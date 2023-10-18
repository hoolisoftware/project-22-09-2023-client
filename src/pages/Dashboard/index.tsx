import { useAuth } from '@/hooks/useAuth';
import { useDispatch } from 'react-redux';
import { Box, Button, Typography } from '@mui/material';

import { setOrganization, setBranch } from '@/features/filters/filtersReducer';
import Container from '../../components/Container'
import PageLayout from '../../components/ProtectedPageLayout';


export default function Page() {
    const dispatch = useDispatch()
    const {
        token,
        tokenRefresh,
        setToken,
        setTokenRefresh
    } = useAuth()

    return <PageLayout
        title={'Dashboard'}
    >
        <Container>
            <div>
                JWT Token :
                <pre style={{ padding: 10, width: '100%', overflowX: 'scroll'}}>
                    {token}
                </pre>
            </div>
            <br />
            <div>
                JWT Token Refresh :
                <pre style={{ padding: 10, width: '100%', overflowX: 'scroll'}}>
                    {tokenRefresh}
                </pre>
            </div>
            <Box sx={{my: 4}}>
                <center>
                    <Typography variant='h5' gutterBottom>
                        Actions
                    </Typography>
                </center>
                <Button
                    fullWidth
                    color='warning' sx={{mb:1}}
                    onClick={ () => {
                        setToken()
                        setTokenRefresh()
                    } }
                >
                    RESET JWT TOKENS
                </Button>
                <Button
                    fullWidth
                    color='warning'
                    sx={{mb:1}}
                    onClick={ () => {
                        dispatch(setOrganization(null))
                        dispatch(setBranch(null))
                    } }
                >
                    RESET BAR & BRANCH
                </Button>
            </Box>
        </Container>
    </PageLayout>
}