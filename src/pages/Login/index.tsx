import css from './index.module.scss'

import axios from 'axios'
import { useMutation } from '@tanstack/react-query'
import { Navigate  } from 'react-router-dom'
import {
    Alert,
    Box,
    Button,
    Card,
    CardContent,
    TextField,
    Typography
} from '@mui/material'

import { useAuth } from '@/hooks/useAuth'
import Footer from '@components/Footer'
import PasswordField from '@/components/FieldPassword'
import { useState } from 'react'



export default function PageLayout()
{
    const { token, setToken, setTokenRefresh } = useAuth();

    const mutation = useMutation({
        mutationFn: async (credentials: FormData) => {
            return await axios.post('http://localhost:8000/api/token/', credentials)
        },
        onSuccess: (res) => {setToken(res.data.access); setTokenRefresh(res.data.refresh)},
        onError: () => setError('You entered wrong credentials or something went wrong. Please try again or contact administrator!')
    })
    const [error, setError] = useState<string|false>(false)

    document.title = 'Login'
    
    if (token) return <Navigate to='/'/>

    return <>
        <div className={css.layout}>
            <div className={css.container}>
                <Card className={css.card} variant='outlined'>
                    <CardContent>                        
                        <form method='post' onSubmit={ async (e) => {
                            e.preventDefault()
                            await mutation.mutate(new FormData(e.currentTarget))
                        } }>
                            <Box mb={2}>
                                <center>
                                    <Typography>
                                        Login
                                    </Typography>
                                </center>
                            </Box>
                            {
                                error &&
                                <Alert severity='error' sx={{mb: 3}}>{error}</Alert>
                            }
                            <Box mb={2}>
                                <TextField required fullWidth label='Username' name='username'/>
                            </Box>
                            <Box mb={2}>
                                <PasswordField required label='Enter password' name='password'/>
                            </Box>
                            <Button
                                fullWidth
                                variant='contained'
                                color='primary'
                                type='submit'
                                >
                                Submit
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
            <Footer/>
        </div>
    </> 
}