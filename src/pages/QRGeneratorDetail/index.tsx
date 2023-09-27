import QRCode from "react-qr-code"
import {
    Box,
    Button,
    Typography
} from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

import Container from '../../components/Container'
import PageLayout from '../../components/PageLayout';



export default function Page() {
    return <PageLayout
        title={'QR Generator Table #1'}
        breadcrumbs={[
            ['QR Generator', '/qr-generator/']
        ]}
        back
    >
        <Container>
            <center>
                <Typography variant='h5'>
                    Table №1
                </Typography>  
                <Box my={2}>
                    <RouterLink to='/get-offer/12/12/'>
                            <QRCode value="https://hoolisftoware.xyz" style={{width: '35vh', height: '35vh', margin: '0 auto'}}/>
                    </RouterLink>
                </Box>
                <Box>
                    <Button size='large' fullWidth variant='contained' color='info' sx={{maxWidth: 200}} startIcon={<ContentCopyIcon/>}>COPY LINK</Button>
                </Box>
            </center>
        </Container>
    </PageLayout>
}