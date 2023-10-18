import { useState } from 'react';
import {
    Alert,
    TextField,
    Button,
    Grid
} from '@mui/material'

import { useMe, usersInstance } from '@/hooks/use-query';
import { useMutation } from '@tanstack/react-query';
import Container from '../../components/Container'
import PageLayout from '../../components/ProtectedPageLayout';


export default function Page() {
    const { data, isLoading, error, refetch } = useMe()
    const [password, setPassword] = useState<string>('')
    const [passwordConfirm, setPasswordConfirm] = useState<string>('')

    const mutation = useMutation({
        mutationFn: async (fields: FormData) => {
            const {data} = await usersInstance.patch('me/update/', fields)
            return data
        },
        onSuccess: () => refetch()
    })

    return <PageLayout
        title={'Account Settings'}
        breadcrumbs={true}
    >
        <Container>
            { error ? error instanceof Error && error.message : '' }
            { isLoading && 'Loading...' }
            {
                mutation.isSuccess &&
                <Alert variant='outlined'>Your information updated</Alert>
            }
            <br />
            { data &&
                <form onSubmit={ (e) => {
                    e.preventDefault()
                    if (password === passwordConfirm) {
                        mutation.mutate(new FormData(e.currentTarget))
                    }
                } }>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                name='username'
                                label='Username'
                                defaultValue={data?.username}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField name='password' helperText={"To not change password leave fields blank"} value={password} onChange={ (e) => setPassword(e.currentTarget.value) } fullWidth label='New password'/>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField value={passwordConfirm} onChange={ (e) => setPasswordConfirm(e.currentTarget.value) } fullWidth label='New password confirm'/>
                        </Grid>
                        <Grid item xs={12}>
                            <Button type='submit' disabled={!(password === passwordConfirm)} size='large' color='success' variant='contained' fullWidth>Save</Button>
                        </Grid>
                    </Grid>
                </form>
            }
        </Container>
    </PageLayout>
}