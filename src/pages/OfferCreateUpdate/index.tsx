import { useParams } from 'react-router-dom';

import Container from '../../components/Container'
import PageLayout from '../../components/ProtectedPageLayout';
import Form from './Form'


export default function Page() {
    const { offerId } = useParams()

    return <PageLayout
        title={offerId ? `Offer #${offerId} edit` : 'Offer creation'}
        breadcrumbs={[
            ['Offer administration', '/offers/']
        ]}
        back={true}
    >
        <Container>
            <Form/>
        </Container>
    </PageLayout>
}