import { useContext } from "react";

import { AuthContext } from "@/provider/authProvider";

export const useAuth = () => {
	return useContext(AuthContext);
};