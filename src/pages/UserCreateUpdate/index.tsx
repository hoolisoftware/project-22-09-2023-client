import { useParams } from 'react-router-dom';

import Container from '../../components/Container'
import PageLayout from '../../components/ProtectedPageLayout';
import Form from './Form'


export default function Page() {
    const { userId } = useParams()
    
    return <PageLayout
        title={userId ? `User #${userId} edit` : 'User Creation'}
        breadcrumbs={[
            ['User administration', '/users/']
        ]}
        back={true}
    >
        <Container>
            <Form/>
        </Container>
    </PageLayout>
}