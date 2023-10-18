import type { SyntheticEvent } from 'react';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

import type { APIOrganization } from '@/global/models';
import { useOrganizations } from '@/hooks/use-query'

interface Props {
  selected?: number
  onChange: (e: SyntheticEvent, value?: APIOrganization) => void
  disabled?: boolean
  name?: string
}

export default function Asynchronous(props: Props) {
  const [selected, setSelected] = useState<APIOrganization | undefined>()

  const { data, error, isLoading } = useOrganizations();

  if (error instanceof Error) return error.message

  if (isLoading) return 'Loading...'

  return (
    <>
      <Autocomplete
        sx={{ mb: 2 }}
        disabled={props.disabled || Number(data?.results.length) <= 1}
        onChange={(event, newValue) => { props.onChange(event, newValue||undefined), setSelected(newValue||undefined) }}
        disablePortal
        options={data?.results ? data.results : []}
        getOptionLabel={option => option.name}
        defaultValue={
          (props.selected || selected) &&
          data?.results.filter(item => item.id === props.selected)[0] || undefined
        }
        renderInput={(params) => <TextField {...params} label='Bar' fullWidth />}
      />
      {
        props.name &&
        <input hidden type="text" name={props.name} value={selected ? selected.id : props.selected || data?.results[0].id} />
      }
    </>
  );
}
