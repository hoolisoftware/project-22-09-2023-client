import {
    Box,
    Button,
    Grid,
    TextField,
} from "@mui/material"

import type { Bar } from '@global/models'


interface Props
{
    bar: Bar | null
}

export default function Form(props: Props) {
    return (
        <Box>
            <Box>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField defaultValue={props.bar?.name} label="Name" variant="outlined" fullWidth />
                    </Grid>
                    <Grid item xs={12}>
                        <Button fullWidth size='large' variant='contained' color='success'>Submit</Button>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}