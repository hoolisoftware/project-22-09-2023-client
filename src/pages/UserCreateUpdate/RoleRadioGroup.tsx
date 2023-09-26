import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


interface Props
{
    defaultValue?: string
    setValue?: CallableFunction
}

export default function RowRadioButtonsGroup(props: Props) {
  return (
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Role</FormLabel>
      <RadioGroup
        onChange={ (event) => props.setValue && props.setValue(event.currentTarget.value) }
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        defaultValue={props.defaultValue}
      >
        <FormControlLabel value="superadmin" control={<Radio />} label="Superadmin" />
        <FormControlLabel value="admin" control={<Radio />} label="Admin" />
        <FormControlLabel value="staff" control={<Radio />} label="Staff" />
      </RadioGroup>
    </FormControl>
  );
}