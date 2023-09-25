import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';

interface props {
    active: boolean
    setActive: CallableFunction
}


export default function AlertDialog(props: props) {

    return (
        <Dialog
            open={props.active}
            onClose={ () => props.setActive(false) }
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Are you sure that you paid this winner?
                </DialogContentText>
                <DialogContentText id="alert-dialog-description">
                    You can't cancel this action!
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={ () => props.setActive(false) }>No</Button>
                <Button autoFocus>
                    Yes
                </Button>
            </DialogActions>
        </Dialog>
    );
}