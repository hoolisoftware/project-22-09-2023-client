import {
    Button,
    Grid,
    TextField
} from '@mui/material'

import Container from '../../components/Container'
import PageLayout from '../../components/PageLayout';

import FieldPassword from '@components/FieldPassword'


export default function Page() {
    return <PageLayout
        title={'Account Settings'}
        breadcrumbs={true}
    >
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label='Username'
                        defaultValue={'lama'}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FieldPassword label='New password'/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FieldPassword label='New password confirm'/>
                </Grid>
                <Grid item xs={12}>
                    <Button size='large' color='success' variant='contained' fullWidth>Save</Button>
                </Grid>
            </Grid>
        </Container>
    </PageLayout>
}