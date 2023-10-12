import { Navigate } from "react-router-dom";

import { useAuth } from '@/hooks/useAuth';


interface Props
{
    page: React.ReactElement
    protected?: boolean
}

export default function Page(props: Props) {
    const { token } = useAuth();

    if (props.protected && !token) return <Navigate to="/login/" />


    return <>
        {props.page}
    </>    
}