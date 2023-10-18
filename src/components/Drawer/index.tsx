import { useDispatch, useSelector } from 'react-redux';
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

import { RootState } from '@/app/store';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import HistoryIcon from '@mui/icons-material/History';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import QrCodeIcon from '@mui/icons-material/QrCode';
import LogoutIcon from '@mui/icons-material/Logout';
import BusinessIcon from '@mui/icons-material/Business';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import GroupIcon from '@mui/icons-material/Group';

import { toggleModalBar, toggleModalBranch } from '../../features/modals/modalsReducer';
import ListItemLink from '../ListItemLink';

interface props {
    active: boolean
    setActive: CallableFunction
    setLogoutModal: CallableFunction
}


export default function TemporaryDrawer(props: props) {
    const dispatch = useDispatch()
    const filters = useSelector((state: RootState) => state.filters)

    const list = <Box
        sx={{ width: 250 }}
        role="presentation"
        onClick={() => props.setActive(false)}
        onKeyDown={() => props.setActive(false)}
    >
        <List
            subheader={<ListSubheader>Current bnrach</ListSubheader>}
        >
            <ListItemLink to='/events' primary={'Events (Soon...)'} icon={<LocalOfferIcon />}/>
            <ListItemLink to='/winners' primary={'Winners (Soon...)'} icon={<EmojiEventsIcon />}/>
            <ListItemLink to='/history' primary={'History (Soon...)'} icon={<HistoryIcon />}/>
            <ListItemLink to='/qr-generator' primary={'QR generator (Soon...)'} icon={<QrCodeIcon />}/>
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
                        {filters.organization?.name}
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
                        {filters.branch?.address}
                    </ListItemText>
                </ListItemButton>
            </ListItem>
        </List>
        <List
            subheader={<ListSubheader>Administration</ListSubheader>}
        >
            <ListItemLink to='/users' primary={'Users'} icon={<GroupIcon />}/>
            <ListItemLink to='/bars' primary={'Bars'} icon={<BusinessIcon />}/>
            <ListItemLink to='/branches' primary={'Branches'} icon={<LocationOnIcon />}/>
            <ListItemLink to='/offers' primary={'Offers'} icon={<LocalOfferIcon />}/>
            <ListItemLink to='/bets' primary={'Bets'} icon={<EmojiEventsIcon />}/>
        </List>        
        <Divider/>
        <Button sx={{mt: 2}} fullWidth color='error' startIcon={<LogoutIcon />} onClick={ () => props.setLogoutModal(true) }>Logout</Button>
    </Box>

    return <Drawer
        anchor={'left'}
        open={props.active}
        onClose={() => props.setActive(false)}
    >
        {list}
    </Drawer>
}