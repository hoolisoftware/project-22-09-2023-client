import { Typography } from '@mui/material'

import CardAction from './CardAction'
import Prediction from './Prediction'

import Container from '../Container'


export default function ActionInfo() {
    return (
        <>
            <Container>
                <CardAction />
            </Container>
            <Container>
                <Typography variant='h5' gutterBottom>
                    Prediction
                </Typography>
                <Prediction />
            </Container>
        </>
    )
}