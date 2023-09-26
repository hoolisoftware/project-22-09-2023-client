import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';


interface Props
{
  defaultValue?: string
}

export default function BasicSelect(props: Props) {
  const [role, setRole] = React.useState(props.defaultValue ? props.defaultValue : '');

  const handleChange = (event: SelectChangeEvent) => {
    setRole(event.target.value as string);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Role</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={role}
        label="Age"
        onChange={handleChange}
      >
        <MenuItem value={'admin'}>Superadmin</MenuItem>
        <MenuItem value={'superadmin'}>Admin</MenuItem>
      </Select>
    </FormControl>
  )
}