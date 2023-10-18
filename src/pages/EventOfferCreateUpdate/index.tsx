import { useParams } from 'react-router-dom';
import {
    Button,
    Stack,
    Typography
} from '@mui/material';
import SaveAsIcon from '@mui/icons-material/SaveAs';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

import Container from '../../components/Container'
import PageLayout from '../../components/ProtectedPageLayout';
import ActionInfo from '../../components/OfferInfo';
import Offer from './Offer'



export default function Page() {
    const {offerId} = useParams()
    
    return <PageLayout
        title={offerId ? `Edit offer #${offerId}` : 'Create offer'}
        breadcrumbs={[
            ['Events', '/events/'],
        ]}
        back={true}
    >
        <ActionInfo/>
        <Container>
            <Typography variant='h5' gutterBottom>
                Offer
            </Typography>
            <Offer offerId={offerId}/>
        </Container>
        <Container>
            <Stack direction={{ xs: 'column', sm: 'row' }} gap={2}>
                <Button variant='contained' size='large' color='primary' startIcon={<SaveAsIcon/>} fullWidth>SAVE OFFER DRAFT</Button>
                <Button variant='contained' size='large' color='success' startIcon={<RocketLaunchIcon/>} fullWidth>ACTIVATE OFFER</Button>
            </Stack>
        </Container>
    </PageLayout>
}