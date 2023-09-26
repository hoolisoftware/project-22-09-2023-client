import { useParams } from 'react-router-dom';

import type { User } from '@global/models'
import Container from '../../components/Container'
import PageLayout from '../../components/PageLayout';
import Form from './Form'


export default function Page() {
    const { employeeId } = useParams()
    const user: User | null = employeeId ? {
        id: 1,
        username: 'lama',
        role: 'staff'
    } : null
    

    return <PageLayout
        title={employeeId ? 'Update employee' : 'Create employee'}
        breadcrumbs={[
            ['Branches', '/branches/'],
            ['Астраханская область, город Клин, наб. Ломоносова, 15', '/branches/1/update/']
        ]}
        back={true}
    >
        <Container>
            <Form user={user}/>
        </Container>
    </PageLayout>
}