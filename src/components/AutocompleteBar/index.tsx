import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';


interface Props
{
    selected: boolean
    setSelected: CallableFunction
}

interface Bar {
    name: string
}

function sleep(delay = 0) {
    return new Promise((resolve) => {
        setTimeout(resolve, delay);
    });
}

export default function Asynchronous(props:Props) {
    const [open, setOpen] = React.useState(false);
    const [options, setOptions] = React.useState<readonly Bar[]>([]);
    const loading = open && options.length === 0;

    React.useEffect(() => {
        let active = true;
        if (!loading) {
            return undefined;
        }
        (async () => {
            await sleep(1e3); // For demo purposes.
            if (active) {
                setOptions([...bars]);
            }
        })();
        return () => {
            active = false;
        };
    }, [loading]);

    React.useEffect(() => {
        if (!open) {
            setOptions([]);
        }
    }, [open]);

    return (
        <Autocomplete
            // sx={{mb:3}}
            fullWidth
            open={open}
            onOpen={() => {
                setOpen(true)
            }}
            onClose={() => {
                setOpen(false)
            }}
            isOptionEqualToValue={(option, value) => option.name === value.name}
            onInputChange={
                () => props.setSelected(false)
            }
            onChange={
                () => props.setSelected(true)
            }
            getOptionLabel={
                option => option.name
            }
            options={options}
            loading={loading}
            defaultValue={bars[0]}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="Bar name"
                    InputProps={{
                        ...params.InputProps,
                        endAdornment: (
                            <React.Fragment>
                                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                                {params.InputProps.endAdornment}
                            </React.Fragment>
                        ),
                    }}
                />
            )}
        />
    );
}

const bars: Bar[] = [
    {
        name: 'Burger King'
    },
    {
        name: 'Mc Donalds'
    },
    {
        name: 'KFC'
    }
];