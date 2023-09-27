import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

export default function RadioButtonsGroup() {
  return (
    <FormControl>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value="home" control={<Radio />} label="Home team" />
        <FormControlLabel value="away" control={<Radio />} label="Away team" />
        <FormControlLabel value="draw" control={<Radio />} label="Draw" />
      </RadioGroup>
    </FormControl>
  );
}