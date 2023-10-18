import { useParams } from 'react-router-dom';
import { Typography } from '@mui/material';

import Container from '../../components/Container'
import PageLayout from '../../components/ProtectedPageLayout';
import Form from './Form'
import TableEmployees from './TableEmployees'


export default function Page() {
    const { branchId } = useParams()

    return <PageLayout
        title={branchId ? `Branch #${branchId} edit` : 'Branch creation'}
        breadcrumbs={[
            ['Branch administration', '/branches/']
        ]}
        back={true}
    >
        <Container>
            <Form/>
        </Container>
        <Container>
            <Typography gutterBottom variant='h4'>
                Employee list
            </Typography>
            <TableEmployees/>
        </Container>
    </PageLayout>
}