import { useState } from 'react'
import {
    FormControl,
    IconButton,
    InputLabel,
    InputAdornment,
    OutlinedInput,
} from '@mui/material'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';


interface Props
{
   label: string 
   required?: boolean
   name?: string
}

export default function PasswordInput(props: Props) {
    const [showPassword, setShowPassword] = useState<boolean>(false)

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };


    return (
        <FormControl fullWidth variant="outlined">
            <InputLabel>{props.label}</InputLabel>
            <OutlinedInput
                id="outlined-adornment-password"
                required={props.required}
                type={showPassword ? 'text' : 'password'}
                name={props.name}
                endAdornment={
                    <InputAdornment position="end">
                    <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                    >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                    </InputAdornment>
                }
                label={props.label}
            />
        </FormControl>
    )
}