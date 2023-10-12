import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


const queryClient = new QueryClient()


export default function QueryProvider(props: React.HTMLAttributes<HTMLDivElement>) {
    return <QueryClientProvider client={queryClient}>
        {props.children}
    </QueryClientProvider>
}