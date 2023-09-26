import QRCode from "react-qr-code"
import { Link as RouterLink } from 'react-router-dom'
import {
    Grid
} from '@mui/material'

import Container from '../../components/Container'
import PageLayout from '../../components/PageLayout';



export default function Page() {
    return <PageLayout
        title={'QR Generator'}
        breadcrumbs={true}
    >
        <Container>
            <Grid container spacing={2}>
                {
                    [...Array.from(Array(12))].map((item, index)=>
                        <Grid item xs={6} lg={2}>
                            {item}
                            <RouterLink to={`/qr-generator/${index+1}/`}>
                                <QRCode value="hey" style={{width: '100%', height: 'auto'}}/>
                            </RouterLink>
                            Table №{index+1}
                        </Grid>
                    )
                }
            </Grid>
        </Container>
    </PageLayout>
}