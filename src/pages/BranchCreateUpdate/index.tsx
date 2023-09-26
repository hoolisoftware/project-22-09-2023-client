import { useParams } from 'react-router-dom';
import { Typography } from '@mui/material';

import type { Branch } from '@global/models'
import Container from '../../components/Container'
import PageLayout from '../../components/PageLayout';
import Form from './Form'
import TableEmployees from './TableEmployees'


export default function Page() {
    const { branchId } = useParams()
    const branch: Branch | null = branchId ? {
        id: 1,
        address: 'Астраханская область, город Клин, наб. Ломоносова, 15',
        tables: 56
    } : null

    return <PageLayout
        title={branchId ? `Branch #${branchId} edit` : 'Branch creation'}
        breadcrumbs={[
            ['Branch administration', '/branches/']
        ]}
        back={true}
    >
        <Container>
            <Form branch={branch}/>
        </Container>
        <Container>
            <Typography gutterBottom variant='h4'>
                Employee list
            </Typography>
            <TableEmployees/>
        </Container>
    </PageLayout>
}