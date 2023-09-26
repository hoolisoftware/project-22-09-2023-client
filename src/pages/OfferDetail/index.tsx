import { useParams } from 'react-router-dom'
import {
    Typography
} from '@mui/material'

import Container from '../../components/Container'
import PageLayout from '../../components/PageLayout'
import ActionInfo from '../../components/ActionInfo'
import Offer from './Offer'



export default function Page() {
    const {offerId} = useParams()
    

    return <PageLayout
        title={`Offer #${offerId} details`}
        breadcrumbs={[
            ['Events','/events/']
        ]}
    >
        <ActionInfo/>
        <Container>
            <Typography variant='h5' gutterBottom>
                Offer
            </Typography>
            <Offer offerId={offerId}/>
        </Container>
    </PageLayout>
}