import {
    Box,
    Button,
    Typography,
} from '@mui/material';

import Container from '../../components/Container'
import Table from './Table'


export default function Page() {

    return <Container>
        <Box mb={5}>
            <Button size='large' variant='contained' color='success' fullWidth>
                BURGER KING
            </Button>
        </Box>
        <Box mb={3}>
            <center>
                <Typography variant='h5' gutterBottom>Match List</Typography>
                <Typography gutterBottom>27 september 2023</Typography>
            </center>
        </Box>
        <Table />
    </Container>
}