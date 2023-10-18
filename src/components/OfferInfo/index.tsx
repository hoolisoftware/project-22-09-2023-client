import { Typography } from '@mui/material'

import CardAction from './CardAction'
import Prediction from './Prediction'

import Container from '../Container'

interface Props
{
    hidePrediction?: boolean
}


export default function ActionInfo(props: Props) {
    return (
        <>
            <Container>
                <CardAction />
            </Container>
            {
                !props.hidePrediction &&
                <Container>
                    <Typography variant='h5' gutterBottom>
                        Prediction
                    </Typography>
                    <Prediction />
                </Container>
            }
        </>
    )
}