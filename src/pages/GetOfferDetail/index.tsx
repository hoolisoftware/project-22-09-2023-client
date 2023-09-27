import css from './index.module.scss'

import { Link as RouterLink } from 'react-router-dom';
import { useState } from 'react'
import {
    Box,
    Button,
    Typography,
    Card,
    CardContent,
    TextField
} from '@mui/material';

import Footer from '@/components/Footer';
import Container from '../../components/Container'
import Table from './Table';
import RadioGroup from './RadioGroup'


export default function Page() {
    const [predicted, setPredicted] = useState<boolean>(false)

    return <>
        <Container>
            <Box mb={3}>
                <Button
                    component={RouterLink}
                    to={'/get-offer/12/12/'}
                >
                    {'<'} Back
                </Button>
            </Box>
            <Box mb={3}>
                <center>
                    <Typography>Make prediction and get your personal offer</Typography>
                </center>
            </Box>
            <Container>
                <Table/>
            </Container>
            <Card variant='outlined' className={css.card}>
                <CardContent>
                    {
                        !predicted ?
                        <>
                            <Box mb={3}>
                                <center>
                                    <Typography>What will be result of the match?</Typography>
                                </center>
                            </Box>
                            <Box mb={3}>
                                <RadioGroup/>
                            </Box>
                            <Box mb={3}>
                                <TextField
                                    label='Enter your e-mail'
                                    fullWidth
                                />
                            </Box>
                            <Button onClick={ () => setPredicted(true) } fullWidth color='success' variant='contained'>Make prediction</Button>
                        </>
                        :
                        <>
                            <Box mb={3}>
                                <center>
                                    <Typography>
                                        Your prediction is:&nbsp;
                                        <Typography component={'span'} color='text.secondary'>
                                            Tigers
                                        </Typography>
                                    </Typography>
                                </center>
                            </Box>
                            <Typography gutterBottom>
                                Great choice! Here is your offer:
                            </Typography>
                            <Box mb={3}>
                                <Card>
                                    <CardContent>20% discount on all soft drinks</CardContent>
                                </Card>
                            </Box>
                            <Typography gutterBottom color='text.secondary'>
                                It will be applied automatically to the bill if your prediction wil be right.
                            </Typography>
                        </>
                    }
                </CardContent>
            </Card>
        </Container>
        <Container>
            <Footer/>
        </Container>
    </>
}