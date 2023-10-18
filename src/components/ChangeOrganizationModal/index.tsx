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
import BusinessIcon from '@mui/icons-material/Business';

import type { APIOrganization, APIBranch } from '@/global/models';
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

export default function ChangeOrganizationModal() {
  const dispatch = useDispatch()
  const active = useSelector((state: RootState) => state.modals.modalBar)
  const filters = useSelector((state: RootState) => state.filters)
  const [selectedOrganization, setSelectedOrganization] = useState<APIOrganization|null>(filters.organization)
  const [selectedBranch, setSelectedBranch] = useState<APIBranch|null>(filters.branch)

  const reset = () => {
    setSelectedOrganization(filters.organization)
    setSelectedBranch(filters.branch)
  }

  return (
    <div>
      <Modal
        open={active || !filters.branch || !filters.organization}
        onClose={ () => {dispatch(toggleModalBar()); reset()} }
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Card>
            <CardContent>
              <Typography sx={{mb: 3}} variant="h6" component="h2">
                Select bar & branch
              </Typography>
              <Box sx={{mb: 3}}>
                <AutocompleteBar
                  selected={selectedOrganization?.id}
                  onChange={
                    (_, value) => {
                      if (value?.id !== selectedOrganization?.id) {
                        setSelectedOrganization(value)
                        setSelectedBranch(null)
                      }
                  }}
                />
              </Box>
              { selectedOrganization &&
                <Box sx={{mb: 3}}>
                  <AutocompleteBranch
                    selected={selectedBranch}
                  setSelected={setSelectedBranch}
                    selectedOrganizationId={selectedOrganization?.id}
                    onChange={
                      (_, value) => setSelectedBranch(value)
                    }
                  />
                </Box>
              }
              <Stack direction={'row'} gap={1}>
                <Button
                  fullWidth
                  disabled={
                    (
                      filters.organization?.id === selectedOrganization?.id &&
                      filters.branch?.id === selectedBranch?.id
                    ) || (
                      !selectedOrganization?.id ||
                      !selectedBranch?.id
                    )
                  }
                  startIcon={<BusinessIcon/>}
                  variant='contained'
                  onClick={ () => {
                    dispatch(setOrganization(selectedOrganization))
                    dispatch(setBranch(selectedBranch))
                  }}
                >
                  SELECT
                </Button>
                <Button
                  fullWidth color='warning'
                  disabled={
                    filters.organization?.id === selectedOrganization?.id &&
                    filters.branch?.id === selectedBranch?.id
                  }
                  onClick={ reset }
                >
                  Reset
                </Button>
              </Stack>
            </CardContent>
          </Card>
        </Box>
      </Modal>
    </div>
  );
}