import { useAuth } from '@/hooks/useAuth';

import Container from '../../components/Container'
import PageLayout from '../../components/PageLayout';


export default function Page() {
    const { token, tokenRefresh } = useAuth()

    return <PageLayout
        title={'Dashboard'}
    >
        <Container>
            <div>
                JWT Token :
                <pre style={{ padding: 10, width: '100%', overflowX: 'scroll'}}>
                    {token}
                </pre>
            </div>
            <br />
            <div>
                JWT Token Refresh :
                <pre style={{ padding: 10, width: '100%', overflowX: 'scroll'}}>
                    {tokenRefresh}
                </pre>
            </div>
        </Container>
    </PageLayout>
}