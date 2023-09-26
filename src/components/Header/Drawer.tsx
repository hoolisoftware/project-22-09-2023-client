import { useDispatch } from 'react-redux';
import {
    Box,
    Button,
    Drawer,
    List,
    ListSubheader,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Divider
} from '@mui/material'

import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import HistoryIcon from '@mui/icons-material/History';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import QrCodeIcon from '@mui/icons-material/QrCode';
import LogoutIcon from '@mui/icons-material/Logout';
import BusinessIcon from '@mui/icons-material/Business';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import { toggleModalBar, toggleModalBranch } from '../../features/modals/modalsReducer';
import ListItemLink from '../ListItemLink';

interface props {
    active: boolean
    setActive: CallableFunction
    setLogoutModal: CallableFunction
}


export default function TemporaryDrawer(props: props) {
    const dispatch = useDispatch()

    const list = <Box
        sx={{ width: 250 }}
        role="presentation"
        onClick={() => props.setActive(false)}
        onKeyDown={() => props.setActive(false)}
    >
        <List
            subheader={<ListSubheader>Current bnrach</ListSubheader>}
        >
            <ListItemLink to='/events' primary={'Events'} icon={<LocalOfferIcon />}/>
            <ListItemLink to='/winners' primary={'Winners'} icon={<EmojiEventsIcon />}/>
            <ListItemLink to='/history' primary={'History'} icon={<HistoryIcon />}/>
            <ListItemLink to='/qr-generator' primary={'QR generator'} icon={<QrCodeIcon />}/>
        </List>
        <List
            subheader={<ListSubheader>Filters</ListSubheader>}
        >
            <ListItem
                onClick={ () => dispatch(toggleModalBar()) }
                disablePadding
            >
                <ListItemButton>
                    <ListItemIcon>
                        <BusinessIcon/>
                    </ListItemIcon>
                    <ListItemText>
                        Burger King
                    </ListItemText>
                </ListItemButton>
            </ListItem>
            <ListItem
                onClick={ () => dispatch(toggleModalBranch()) }
                disablePadding
            >
                <ListItemButton>
                    <ListItemIcon>
                        <LocationOnIcon/>
                    </ListItemIcon>
                    <ListItemText>
                        Астраханская область, город Клин, наб. Ломоносова, 15
                    </ListItemText>
                </ListItemButton>
            </ListItem>
        </List>
        <List
            subheader={<ListSubheader>Administration</ListSubheader>}
        >
            <ListItemLink to='/users' primary={'Users'} icon={<BusinessIcon />}/>
            <ListItemLink to='/branches' primary={'Branches'} icon={<LocationOnIcon />}/>
        </List>
        <Divider/>
        <Button sx={{mt: 2}} fullWidth color='error' startIcon={<LogoutIcon />}>Logout</Button>
    </Box>

    return <Drawer
        anchor={'left'}
        open={props.active}
        onClose={() => props.setActive(false)}
    >
        {list}
    </Drawer>
}