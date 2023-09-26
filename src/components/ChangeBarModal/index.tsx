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
import BusinessIcon from '@mui/icons-material/Business';

import { RootState } from '../../app/store';
import { toggleModalBar } from '../../features/modals/modalsReducer';
import AutocompleteBar from '../AutocompleteBar'
import AutocompleteBranch from '../AutocompleteBranch'


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
  const active = useSelector((state: RootState) => state.modals.modalBar)
  const [selectedBar, setSelectedBar] = useState<boolean>(false)
  const [selectedBranch, setSelectedBranch] = useState<boolean>(false)

  return (
    <div>
      <Modal
        open={active}
        onClose={ () => dispatch(toggleModalBar()) }
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Card>
            <CardContent>
              <Typography sx={{mb: 3}} variant="h6" component="h2">
                Select bar
              </Typography>
              <Box sx={{mb: 3}}>
                <AutocompleteBar selected={selectedBar} setSelected={setSelectedBar}/>
              </Box>
              <Box sx={{mb: 3}}>
                <AutocompleteBranch selected={selectedBranch} setSelected={setSelectedBranch}/>
              </Box>
              <Button disabled={!selectedBar && !selectedBranch} startIcon={<BusinessIcon/>} variant='contained'>
                SELECT
              </Button>
            </CardContent>
          </Card>
        </Box>
      </Modal>
    </div>
  );
}