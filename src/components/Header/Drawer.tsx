import { useDispatch } from 'react-redux';
import {
    Box,
    Button,
    Drawer,
    List,
} from '@mui/material'

import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import HistoryIcon from '@mui/icons-material/History';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import QrCodeIcon from '@mui/icons-material/QrCode';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountTreeIcon from '@mui/icons-material/AccountTree';

import { toggleModalBranch } from '../../features/modals/modalsReducer';
import ListItemLink from '../ListItemLink';
import BusinessIcon from '@mui/icons-material/Business';

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
        <Button sx={{mt: 3}} fullWidth size='large' startIcon={<AccountTreeIcon/>} onClick={ () => dispatch(toggleModalBranch()) }>Valencia Irish Pub</Button>
        <List sx={{ my: 2 }}>
            <ListItemLink to='/events' primary={'Branches'} icon={<BusinessIcon />}/>
            <ListItemLink to='/events' primary={'Events'} icon={<LocalOfferIcon />}/>
            <ListItemLink to='/winners' primary={'Winners'} icon={<EmojiEventsIcon />}/>
            <ListItemLink to='/history' primary={'History'} icon={<HistoryIcon />}/>
            <ListItemLink to='/qr-generator' primary={'QR generator'} icon={<QrCodeIcon />}/>
        </List>
        <Button fullWidth color='error' startIcon={<LogoutIcon />}>Logout</Button>
    </Box>

    return <Drawer
        anchor={'left'}
        open={props.active}
        onClose={() => props.setActive(false)}
    >
        {list}
    </Drawer>
}