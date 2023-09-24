import {
    Button,
    Typography
 } from '@mui/material';

import Container from '../../components/Container'
import PageLayout from '../../components/PageLayout';
import Breadcrumb from './Breadcrumbs'
import CardAction from './CardAction'
import Prediction from './Prediction'
import Offer from './Offer'

export default function Page() {
    document.title = 'Create Offer'

    return <PageLayout>
        <Container>
            <Breadcrumb/>
        </Container>
        <Container>
            <CardAction/>
        </Container>
        <Container>
            <Typography variant='h5' gutterBottom>
                Prediction
            </Typography>
            <Prediction/>
        </Container>
        <Container>
            <Typography variant='h5' gutterBottom>
                Offer
            </Typography>
            <Offer/>
        </Container>
        <Container>
            <Button variant='contained' size='large' color='success' fullWidth>CREATE OFFER</Button>
        </Container>
    </PageLayout>
}