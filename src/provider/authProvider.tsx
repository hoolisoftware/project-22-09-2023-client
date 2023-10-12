import React from 'react';
import { createContext, useEffect, useMemo, useState } from "react"

interface AuthContextType
{
	token: string | null
	setToken: CallableFunction
	tokenRefresh?: string | null
	setTokenRefresh: CallableFunction
}

export const AuthContext = createContext<AuthContextType>({
	token: null,
	setToken: (_: string) => {_},
	tokenRefresh: null,
	setTokenRefresh: (_: string) => {_}
})

const AuthProvider = (props: React.HTMLAttributes<HTMLDivElement>) => {
	const [token, setToken_] = useState(localStorage.getItem("JWTToken"));
	const [tokenRefresh, setTokenRefresh_] = useState(localStorage.getItem("JWTTokenRefresh"))

	const setToken = (newToken: string) => {
		setToken_(newToken);
	};

	const setTokenRefresh = (newToken: string) => {
		setTokenRefresh_(newToken)
	}

	useEffect(() => {
		if (token && tokenRefresh) {
			localStorage.setItem('JWTToken', token);
			localStorage.setItem('JWTTokenRefresh', tokenRefresh)
		} else {
			localStorage.removeItem('JWTToken');
			localStorage.removeItem('JWTTokenRefresh')
		}
	}, [token, tokenRefresh]);

	const contextValue = useMemo(
		() => ({
			token,
			setToken,
			tokenRefresh,
			setTokenRefresh
		}),
		[token, tokenRefresh]
	);

	return (
		<AuthContext.Provider value={contextValue}>
			{props.children}
		</AuthContext.Provider>
	);
};


export default AuthProvider