import { Navigate } from "react-router-dom";

import { useAuth } from '@/hooks/useAuth';


interface Props
{
    page: React.ReactElement
    protected?: boolean
}

export default function Page(props: Props) {
    const { token, tokenRefresh } = useAuth();

    if (props.protected && !token && !tokenRefresh) return <Navigate to="/login/" />


    return <>
        {props.page}
    </>    
}