import {
    Box,
    Button,
    Grid,
    TextField
} from "@mui/material"

import type { User } from '@global/models'
import PasswordInput from "./PasswordInput"
import RoleSelect from './RoleSelect'


interface Props
{
    user: User | null
}

export default function Form(props: Props) {
    return (
        <Box>
            <Box>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField defaultValue={props.user?.barname} label="Bar name" variant="outlined" fullWidth />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField defaultValue={props.user?.username} label="Username" variant="outlined" fullWidth />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <RoleSelect defaultValue={props.user?.role}/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <PasswordInput label='Password'/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <PasswordInput label='Password confirm'/>
                    </Grid>
                    <Grid item xs={12}>
                        <Button fullWidth size='large' variant='contained' color='success'>Submit</Button>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}