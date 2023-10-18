import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    AppBar,
    Box,
    Button,
    IconButton,
    Toolbar,
    Typography
} from '@mui/material'

import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import MenuIcon from '@mui/icons-material/Menu';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import { Link as RouterLink } from 'react-router-dom'

import { RootState } from '../../app/store';
import { toggleTheme } from '../../features/theme/themeReducer';
import Account from './Account'
import Drawer from '../Drawer'
import LogoutModal from './LogoutModal'


export default function DrawerAppBar() {
    const dispatch = useDispatch()
    const theme = useSelector((state: RootState) => state.theme)  
    const [logoutModal, setLogoutModal] = useState<boolean>(false)
    const [drawer, setDrawer] = useState<boolean>(false)

    return (
        <>
            <AppBar component={'nav'}>
                <Toolbar>
                    <IconButton
                        onClick={ () => setDrawer(true) }
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 1 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Button
                            component={RouterLink}
                            to='/'
                            startIcon={<SportsSoccerIcon/>}
                            color='inherit'
                        >
                            SWSPORTS
                        </Button>
                    </Typography>
                    <Box>
                        <Account {...{setLogoutModal}}/>
                        <IconButton sx={{ ml: 1 }} onClick={() => dispatch(toggleTheme())} color="inherit">
                            {theme.modeDark ? <Brightness7Icon /> : <Brightness4Icon />}
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>      
            <Toolbar />
            <LogoutModal active={logoutModal} setActive={setLogoutModal}/>
            <Drawer {...{setLogoutModal}} active={drawer} setActive={setDrawer}/>
        </>
    );
}