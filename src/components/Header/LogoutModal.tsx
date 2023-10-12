import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';

import { useAuth } from '@/hooks/useAuth';


interface props {
    active: boolean
    setActive: CallableFunction
}


export default function AlertDialog(props: props) {
    const { setToken } = useAuth()

    return (
        <Dialog
            open={props.active}
            onClose={ () => props.setActive(false) }
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Are you sure that you want logout?
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={ () => props.setActive(false) }>Cancel</Button>
                <Button 
                    onClick={ () => setToken() }
                    autoFocus
                >
                    Logout
                </Button>
            </DialogActions>
        </Dialog>
    );
}