import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';


interface Props
{
    selected: boolean
    setSelected: CallableFunction
}

interface Branch {
    address: string
}

function sleep(delay = 0) {
    return new Promise((resolve) => {
        setTimeout(resolve, delay);
    });
}

export default function Asynchronous(props:Props) {
    const [open, setOpen] = React.useState(false);
    const [options, setOptions] = React.useState<readonly Branch[]>([]);
    const loading = open && options.length === 0;

    React.useEffect(() => {
        let active = true;
        if (!loading) {
            return undefined;
        }
        (async () => {
            await sleep(1e3); // For demo purposes.
            if (active) {
                setOptions([...branches]);
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
            fullWidth
            open={open}
            onOpen={() => {
                setOpen(true)
            }}
            onClose={() => {
                setOpen(false)
            }}
            isOptionEqualToValue={(option, value) => option.address === value.address}
            onInputChange={
                () => props.setSelected(false)
            }
            onChange={
                () => props.setSelected(true)
            }
            getOptionLabel={
                option => option.address
            }
            options={options}
            loading={loading}
            defaultValue={branches[0]}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="Branch address"
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

// Top films as rated by IMDb users. http://www.imdb.com/chart/top
const branches = [
    {
        address: 'Астраханская область, город Клин, наб. Ломоносова, 15',
    },
    {
        address: 'Вологодская область, город Серебряные Пруды, бульвар Чехова, 62',
    },
    {
        address: 'Ивановская область, город Лотошино, шоссе Славы, 01'
    },
    {
        address: 'Омская область, город Сергиев Посад, пр. 1905 года, 26'
    },
    {
        address: 'Калининградская область, город Коломна, наб. Чехова, 98'
    },
    {
        address: 'Пензенская область, город Сергиев Посад, шоссе Сталина, 61'
    },
    {
        address: 'Самарская область, город Одинцово, ул. Будапештсткая, 84'
    },
    {
        address: 'Вологодская область, город Красногорск, бульвар Чехова, 22'
    },
    {
        address: 'Новосибирская область, город Шаховская, въезд Ленина, 24'
    },
    {
        address: 'Пензенская область, город Мытищи, шоссе Чехова, 81'
    },
    {
        address: 'Ростовская область, город Люберцы, наб. Домодедовская, 41'
    },
    {
        address: 'Московская область, город Истра, пл. Гагарина, 90'
    },
    {
        address: 'Белгородская область, город Ступино, спуск Ленина, 99'
    },
    {
        address: 'Белгородская область, город Луховицы, бульвар Гоголя, 94'
    },
    {
        address: 'Пензенская область, город Павловский Посад, пер. Ломоносова, 99'
    },
    {
        address: 'Новосибирская область, город Серебряные Пруды, спуск Славы, 65'
    }
];