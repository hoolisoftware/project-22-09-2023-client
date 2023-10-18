import type { SyntheticEvent } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

import type { APIBranch } from '@/global/models';
import { useBranches } from '@/hooks/use-query';

interface Props {
  selected?: APIBranch
  selectedOrganizationId?: number
  setSelected?: CallableFunction
  onChange: (e: SyntheticEvent, value: APIBranch | null) => void
  disabled?: boolean
}

export default function Asynchronous(props: Props) {
  const { data, error, isLoading } = useBranches(props.selectedOrganizationId);

  if (error instanceof Error) return error.message 

  if (Number(data?.results.length) == 1) {
    props.setSelected && props.setSelected(data?.results[0])
  }

  return (
    <>
      <Autocomplete
        disabled={props.disabled || Number(data?.results.length) <= 1}
        loading={isLoading}
        onChange={ props.onChange }
        disablePortal
        options={data?.results ? data.results : []}
        getOptionLabel={option => option.address}
        value={ Number(data?.results.length) == 1 ? data?.results[0] : props.selected }
        renderInput={(params) => <TextField {...params} label='Branch' fullWidth/>}
      />
    </>
  );
}
