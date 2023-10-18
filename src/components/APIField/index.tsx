import type { APIField } from "@/global/api"
import {
    TextField,
    RadioGroup,
    Typography,
    FormLabel,
    FormControlLabel,
    Radio,
    Checkbox,
    Box
} from "@mui/material"

import { APIModel } from "@/global/models"


interface Props {
    field: APIField
    data?: APIModel
    name?: string
    errors?: string[]
    getDefaultValue?: CallableFunction
}


export default function APIField(props: Props) {
    const getDefaultValue = () => {
        const value = props?.data && props.name && props.data[props.name as keyof typeof props.data]
        return (props.getDefaultValue && props.getDefaultValue(value)) || value
    }

    if (['integer', 'string', 'field'].includes(props.field.type)) {
        return (
            <TextField
                error={Boolean(props.errors?.length)}
                fullWidth
                label={props.field.label}
                helperText={!props.errors ? props.field.help_text : props.errors?.join('')}
                defaultValue={getDefaultValue()}
                name={props.name}
                required={props.field.required}
                type={
                    props.field.type === 'string' ? 'text' :
                        props.field.type === 'field' ? 'text' :
                            props.field.type === 'integer' ? 'number' :
                                'text'
                }
                sx={{ mb: 2 }}
            />
        )
    }

    if (props.field.type === 'choice') {
        return <Box sx={{mb: 3}}>
            <FormLabel>{props.field.label} { props.field.help_text && `(${props.field.help_text})` }</FormLabel>
            <RadioGroup
                row
                name={props.name}
                color='danger'
                defaultValue={getDefaultValue()}
            >
                {
                    props.field.choices && props.field.choices.map(choice =>
                        <FormControlLabel key={choice.value} value={choice.value} control={<Radio />} label={choice.display_name} />
                    )
                }
            </RadioGroup>
            <Typography sx={{ color: 'red' }}>
                {props.errors && "Don't leave this field blank"}
            </Typography>
        </Box>
    }

    if (props.field.type === 'boolean') {
        return <Box sx={{mb: 3}}>
            <FormControlLabel control={<Checkbox defaultChecked={Boolean(getDefaultValue()) || false} />} label={props.field.label} />
        </Box>
    }

    return <TextField label={props.field.label} />
}