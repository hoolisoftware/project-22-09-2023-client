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
import LocationOnIcon from '@mui/icons-material/LocationOn';

import type { APIListOrganization, APIListBranch } from '@/global/models';
import { RootState } from '../../app/store';
import { toggleModalBar } from '../../features/modals/modalsReducer';
import { setOrganization, setBranch } from '@/features/filters/filtersReducer';
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
  const filters = useSelector((state: RootState) => state.filters)
  const [selectedOrganization, setSelectedOrganization] = useState<APIListOrganization|null>(null)
  const [selectedBranch, setSelectedBranch] = useState<APIListBranch|null>(null)

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
              <Box>
                <Button startIcon={<BusinessIcon/>} fullWidth disabled>
                  { filters.organization?.name }
                </Button>
              </Box>
              <Box>
                <Button startIcon={<LocationOnIcon/>} disabled>
                  { filters.branch?.address }
                </Button>
              </Box>
              <Typography sx={{mb: 3}} variant="h6" component="h2">
                Select bar
              </Typography>
              <Box sx={{mb: 3}}>
                <AutocompleteBar selected={selectedOrganization} setSelected={setSelectedOrganization}/>
              </Box>
              <Box sx={{mb: 3}}>
                <AutocompleteBranch selected={selectedBranch} setSelected={setSelectedBranch}/>
              </Box>
              <Button
                disabled={!selectedOrganization && !selectedBranch}
                startIcon={<BusinessIcon/>}
                variant='contained'
                onClick={ () => {
                  dispatch(setOrganization(selectedOrganization))
                  dispatch(setBranch(selectedBranch))
                }}
              >
                SELECT
              </Button>
            </CardContent>
          </Card>
        </Box>
      </Modal>
    </div>
  );
}