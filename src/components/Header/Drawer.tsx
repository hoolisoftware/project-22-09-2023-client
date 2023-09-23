import {
    Box,
    Drawer,
    List,
    Divider,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText
} from '@mui/material'

import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import HistoryIcon from '@mui/icons-material/History';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import QrCodeIcon from '@mui/icons-material/QrCode';
import LogoutIcon from '@mui/icons-material/Logout';

import ListItemLink from '../ListItemLink';

interface props {
    active: boolean
    setActive: CallableFunction
    setLogoutModal: CallableFunction
}


export default function TemporaryDrawer(props: props) {

    const list = <Box
        sx={{ width: 250 }}
        role="presentation"
        onClick={() => props.setActive(false)}
        onKeyDown={() => props.setActive(false)}
    >
        <List>
            <ListItemLink to='/offers/create' primary={'Create Offer'} icon={<LocalOfferIcon />}/>
            <ListItemLink to='/winners' primary={'Winners'} icon={<EmojiEventsIcon />}/>
            <ListItemLink to='/history' primary={'History'} icon={<HistoryIcon />}/>
            <ListItemLink to='/qr-generator' primary={'QR generator'} icon={<QrCodeIcon />}/>
        </List>
        <Divider />
        <List>
            <ListItem disablePadding>
                <ListItemButton onClick={() => props.setLogoutModal(true)}>
                    <ListItemIcon>
                        <LogoutIcon />
                    </ListItemIcon>
                    <ListItemText primary={'Logout'} />
                </ListItemButton>
            </ListItem>
        </List>
    </Box>

    return <Drawer
        anchor={'left'}
        open={props.active}
        onClose={() => props.setActive(false)}
    >
        {list}
    </Drawer>
}