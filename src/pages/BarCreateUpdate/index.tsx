import { useParams } from 'react-router-dom';

import type { Bar } from '@global/models'
import Container from '../../components/Container'
import PageLayout from '../../components/PageLayout';
import Form from './Form'


export default function Page() {
    const { barId } = useParams()
    const bar: Bar | null = barId ? {
        id: 1,
        name: 'Burger King',
        branches: 56
    } : null

    return <PageLayout
        title={barId ? `Bar #${barId} edit` : 'Bar creation'}
        breadcrumbs={[
            ['Bar administration', '/bars/']
        ]}
        back={true}
    >
        <Container>
            <Form bar={bar}/>
        </Container>
    </PageLayout>
}