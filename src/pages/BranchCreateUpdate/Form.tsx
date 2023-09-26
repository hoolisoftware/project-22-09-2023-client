import {
    Box,
    Button,
    Grid,
    TextField,
} from "@mui/material"

import type { Branch } from '@global/models'
import AutoComplete from '../../components/AutocompleteBar'


interface Props
{
    branch: Branch | null
}

export default function Form(props: Props) {
    return (
        <Box>
            <Box>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <AutoComplete selected={false} setSelected={() => {}}/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField defaultValue={props.branch?.address} label="Address" variant="outlined" fullWidth />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField defaultValue={props.branch?.tables} type='number' label="Tables amount" variant="outlined" fullWidth />
                    </Grid>
                    <Grid item xs={12}>
                        <Button fullWidth size='large' variant='contained' color='success'>Submit</Button>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}