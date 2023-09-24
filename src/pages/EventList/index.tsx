import { Typography } from '@mui/material';

import Container from '../../components/Container'
import PageLayout from '../../components/PageLayout';
import Table from './Table'


export default function Page() {
    document.title = 'Events'

    return <PageLayout>
        {
            ['25 sep 2023', '28 sep 2023'].map(item =>
                <Container>
                    <Typography variant='h5' gutterBottom>{item}</Typography>
                    <Table />
                </Container>
            )
        }
    </PageLayout>
}