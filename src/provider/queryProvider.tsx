import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            refetchOnReconnect: false,
            retry: 1,
            staleTime: 5 * 1000,
        },
    },
})


export default function QueryProvider(props: React.HTMLAttributes<HTMLDivElement>) {
    return <QueryClientProvider client={queryClient}>
        {props.children}
    </QueryClientProvider>
}