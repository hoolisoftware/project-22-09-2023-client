import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  Typography
} from '@mui/material'


interface Props
{
    defaultValue?: string
    roles?: {
      value: string
      display_name: string
    }[],
    errors?: string[],
    helperText?: string
}

export default function RowRadioButtonsGroup(props: Props) {
  return (
    <div>
      <FormLabel>Role ({props.helperText})</FormLabel>
      <RadioGroup
        row
        name='role'
        defaultValue={props.defaultValue}
        color='danger'
      >
        {
          props.roles && props.roles.map(role =>
            <FormControlLabel key={role.value} value={role.value} control={<Radio />} label={role.display_name} />
          )
        }
      </RadioGroup>
      <Typography sx={{color: 'red'}}>
        {props.errors && "Don't leave this field blank"}
      </Typography>
    </div>
  );
}