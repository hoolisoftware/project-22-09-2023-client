import { useParams } from 'react-router-dom';

import type { User } from '@global/models'
import Container from '../../components/Container'
import PageLayout from '../../components/PageLayout';
import Form from './Form'


export default function Page() {
    const { userId } = useParams()
    const user: User | null = userId ? {
        id: 1,
        username: 'lama',
        barname: 'Burger King',
        role: 'admin'
    } : null
    
    return <PageLayout
        title={userId ? `User #${userId} edit` : 'User Creation'}
        breadcrumbs={[
            ['User administration', '/users/']
        ]}
        back={true}
    >
        <Container>
            <Form user={user}/>
        </Container>
    </PageLayout>
}