import { useState } from 'react'
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    TextField
 } from '@mui/material';

interface props {
    active: boolean
    setActive: CallableFunction
    value?: string
    onOk?: CallableFunction
    objectId: string|number
}


export default function AlertDialog(props: props) {
    const [confirm, setConfirm] = useState<boolean>(false)

    return (
        <Dialog
            open={props.active}
            onClose={ () => props.setActive(false) }
        >
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Are you sure that you want to delete {props.value}?
                    <br /><br />
                    This can't be undone...
                </DialogContentText>
                <TextField
                    size='small'
                    label={'Please type "CONFIRM"'}
                    sx={{mt: 3}}
                    fullWidth
                    onChange={ (e) => setConfirm(e.currentTarget.value==='CONFIRM') }
                />
            </DialogContent>
            <DialogActions>
                <Button
                    autoFocus
                    onClick={ () => props.setActive(false) }
                >
                        Cancel
                </Button>
                <Button 
                    onClick={ props?.onOk && props.onOk() }
                    variant='contained'
                    color='error'
                    disabled={!confirm}
                >
                    Delete
                </Button>
            </DialogActions>
        </Dialog>
    );
}