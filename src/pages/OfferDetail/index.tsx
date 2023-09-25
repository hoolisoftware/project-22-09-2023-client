import { useParams } from 'react-router-dom'
import {
    Typography
} from '@mui/material'

import Container from '../../components/Container'
import PageLayout from '../../components/PageLayout'
import Breadcrumb from './Breadcrumbs'
import ActionInfo from '../../components/ActionInfo'
import Offer from './Offer'


interface props
{
    title: string
}


export default function Page(props: props) {
    document.title = props.title
    const {offerId} = useParams()
    

    return <PageLayout>
        <Container>
            <Breadcrumb title={
                offerId ? `${props.title} #${offerId}` : props.title
            }/>
        </Container>
        <ActionInfo/>
        <Container>
            <Typography variant='h5' gutterBottom>
                Offer
            </Typography>
            <Offer offerId={offerId}/>
        </Container>
    </PageLayout>
}