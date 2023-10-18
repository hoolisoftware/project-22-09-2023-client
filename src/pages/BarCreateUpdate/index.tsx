import { useParams } from 'react-router-dom';

import Container from '../../components/Container'
import PageLayout from '../../components/ProtectedPageLayout';
import Form from './Form'


export default function Page() {
    const { barId } = useParams()

    return <PageLayout
        title={barId ? `Bar #${barId} edit` : 'Bar creation'}
        breadcrumbs={[
            ['Bar administration', '/bars/']
        ]}
        back={true}
    >
        <Container>
            <Form/>
        </Container>
    </PageLayout>
}