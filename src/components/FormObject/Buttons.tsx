import {
    Button,
    Stack,
    Grid,
} from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete'

interface Props
{
    objectId?: string
    setModalDelete: CallableFunction
}


export default function Buttons(props: Props) {
    return (
        <Grid item xs={12}>
            <Stack direction={'row'} gap={1}>
                <Button
                    type='submit'
                    fullWidth
                    size="large"
                    variant="contained"
                    color="success"
                >
                    {props.objectId ? 'Update' : 'Create'}
                </Button>
                {
                    props.objectId &&
                    <Button
                        variant='contained'
                        color='error'
                        startIcon={<DeleteIcon />}
                        onClick={() => props.setModalDelete(true)}
                    >
                        Delete
                    </Button>
                }
            </Stack>
        </Grid>
    )
}