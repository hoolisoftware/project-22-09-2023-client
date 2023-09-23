import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    AppBar,
    Box,
    Toolbar,
    Typography,
    IconButton
} from '@mui/material'
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import MenuIcon from '@mui/icons-material/Menu';


import { RootState } from '../../app/store';
import { toggleTheme } from '../../features/theme/themeReducer';
import LogoutModal from './LogoutModal'
import Drawer from './Drawer'
import Account from './Account'


export default function Header() {
    const dispatch = useDispatch()
    const theme = useSelector((state: RootState) => state.theme)  
    const [logoutModal, setLogoutModal] = useState<boolean>(false)
    const [drawer, setDrawer] = useState<boolean>(false)

    return <>
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        onClick={ () => setDrawer(true) }
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        DASHBOARD
                    </Typography>
                    <Box>
                        <Account {...{setLogoutModal}}/>
                        <IconButton sx={{ ml: 1 }} onClick={() => dispatch(toggleTheme())} color="inherit">
                            {theme.modeDark ? <Brightness7Icon /> : <Brightness4Icon />}
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
        <LogoutModal active={logoutModal} setActive={setLogoutModal}/>
        <Drawer {...{setLogoutModal}} active={drawer} setActive={setDrawer}/>
    </>
}