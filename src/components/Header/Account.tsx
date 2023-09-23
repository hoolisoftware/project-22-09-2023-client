import * as React from 'react';
import {
    Button,
    Divider,
    Menu,
    MenuItem,
    ListItemIcon,
    ListItemText
} from '@mui/material'
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';

import MenuItemLink from '../MenuItemLink';


interface props
{
    setLogoutModal: CallableFunction
}

export default function BasicMenu(props: props) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{color: 'white'}}
      >
        ADMIN
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItemLink to='/account/settings/' icon={<SettingsIcon fontSize='small' />} primary={'Settings'} />
        <Divider/>
        <MenuItem onClick={ () => props.setLogoutModal(true) }>
          <ListItemIcon>
            <LogoutIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Logout</ListItemText>
        </MenuItem>
      </Menu>
    </>
  );
}