import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {
  Box,
  Button,
  Typography,
  Modal,
  Card,
  CardContent
} from '@mui/material'
import AccountTree from '@mui/icons-material/AccountTree';

import { RootState } from '../../app/store';
import { toggleModalBranch } from '../../features/modals/modalsReducer';
import Autocomplete from './AutoComplete'


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: 400,
  width: '100%',
  p: 2,
};

export default function BasicModal() {
  const dispatch = useDispatch()
  const active = useSelector((state: RootState) => state.modals.modalBranch)
  const [selected, setSelected] = useState<boolean>(false)

  return (
    <div>
      <Modal
        open={active}
        onClose={ () => dispatch(toggleModalBranch()) }
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Card>
            <CardContent>
              <Typography gutterBottom variant="h6" component="h2">
                Select branch
              </Typography>
              <Autocomplete selected={selected} setSelected={setSelected}/>
              <Button disabled={!selected} startIcon={<AccountTree/>} variant='contained' sx={{mt:3}}>
                SELECT
              </Button>
            </CardContent>
          </Card>
        </Box>
      </Modal>
    </div>
  );
}