import css from './index.module.scss'

import {
    Box,
    Button,
    Card,
    CardContent,
    TextField,
    Typography
} from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'

import Footer from '@components/Footer'
import PasswordField from '@/components/FieldPassword'


export default function PageLayout()
{
    document.title = 'Login'

    return <>
        <div className={css.layout}>
            <div className={css.container}>
                <Card className={css.card} variant='outlined'>
                    <CardContent>                        
                        <Box mb={2}>
                            <center>
                                <Typography>
                                    Login
                                </Typography>
                            </center>
                        </Box>
                        <Box mb={2}>
                            <TextField fullWidth label='Username'/>
                        </Box>
                        <Box mb={2}>
                            <PasswordField label='Enter password'/>
                        </Box>
                        <Button
                            component={RouterLink}
                            to='/'
                            fullWidth
                            variant='contained'
                            color='primary'
                        >
                            Submit
                        </Button>
                    </CardContent>
                </Card>
            </div>
            <Footer/>
        </div>
    </> 
}