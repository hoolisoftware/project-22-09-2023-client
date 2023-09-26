import { useState } from 'react'
import {
    Box,
    Button,
    Grid,
    TextField
} from "@mui/material"

import type { User } from '@global/models'
import AutocompleteBar from '@components/AutocompleteBar'
import AutocompleteBranch from '@components/AutocompleteBranch'
import PasswordInput from "./PasswordInput"
import RoleSelect from './RoleRadioGroup'


interface Props
{
    user: User | null
}

export default function Form(props: Props) {
    const [role, setRole] = useState<string>(props.user?.role || '')

    return (
        <Box>
            <Box>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField defaultValue={props.user?.username} label="Username" variant="outlined" fullWidth />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <RoleSelect setValue={setRole} defaultValue={props.user?.role}/>
                    </Grid>
                    {
                        role === 'admin' &&
                        <Grid item xs={12}>
                            <AutocompleteBar selected={false} setSelected={() => {}}/>
                        </Grid>
                    }
                    {
                        role === 'staff' &&
                        <Grid item xs={12}>
                            <AutocompleteBranch selected={false} setSelected={() => {}}/>
                        </Grid>
                    }
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