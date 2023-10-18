import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {
  Box,
  Button,
  Typography,
  Modal,
  Card,
  CardContent,
  Stack
} from '@mui/material'
import AccountTree from '@mui/icons-material/AccountTree';

import { RootState } from '../../app/store';
import { APIBranch } from '@/global/models';
import { toggleModalBranch } from '../../features/modals/modalsReducer';
import Autocomplete from '../AutocompleteBranch'


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
  const filters = useSelector((state: RootState) => state.filters)
  const [selected, setSelected] = useState<APIBranch|null>(filters.branch)

  const reset = () => {
    setSelected(filters.branch)
  }

  return (
    <div>
      <Modal
        open={active}
        onClose={ () => {dispatch(toggleModalBranch()); reset()} }
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Card>
            <CardContent>
              <Typography sx={{mb: 3}} variant="h6" component="h2">
                Select branch
              </Typography>
              <Autocomplete selected={selected} selectedOrganizationId={filters.organization?.id}
                onChange={
                  (_, value) => setSelected(value)
                }
              />
              <Stack direction={'row'} sx={{mt:3}} gap={1}>
                <Button
                  startIcon={<AccountTree/>}
                  variant='contained'
                  disabled={
                    filters.branch?.id === selected?.id || !selected?.id
                  }
                  fullWidth
                >
                  SELECT
                </Button>
                <Button
                  color='warning'
                  onClick={ reset }
                  fullWidth
                  disabled={
                    filters.branch?.id === selected?.id
                  }
                >
                  RESET
                </Button>
              </Stack>
            </CardContent>
          </Card>
        </Box>
      </Modal>
    </div>
  );
}