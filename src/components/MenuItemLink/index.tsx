import { forwardRef } from 'react'
import {
    Link as RouterLink,
    LinkProps as RouterLinkProps
} from 'react-router-dom';
import {
    MenuItem,
    ListItemIcon,
    ListItemText,
} from '@mui/material'

interface MenuItemLinkProps {
    icon?: React.ReactElement;
    primary: string;
    to: string;
}

const Link = forwardRef<HTMLAnchorElement, RouterLinkProps>(function Link(
    itemProps,
    ref,
) {
    return <RouterLink ref={ref} {...itemProps} role={undefined} />;
});

export default function ListItemLink(props: MenuItemLinkProps) {
    const { icon, primary, to } = props;

    return (
        <li>
            <MenuItem component={Link} to={to}>
                {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
                <ListItemText primary={primary} />
            </MenuItem>
        </li>
    );
}