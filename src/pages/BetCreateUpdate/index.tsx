import { useParams } from 'react-router-dom';

import Container from '../../components/Container'
import PageLayout from '../../components/ProtectedPageLayout';
import Form from './Form'


export default function Page() {
    const { betId } = useParams()

    return <PageLayout
        title={betId ? `Bet #${betId} edit` : 'Bet creation'}
        breadcrumbs={[
            ['Bet administration', '/bets/']
        ]}
        back={true}
    >
        <Container>
            <Form/>
        </Container>
    </PageLayout>
}