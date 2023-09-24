import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';


export default function BasicBreadcrumbs() {
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link underline="hover" color="inherit" href="#">
        Dashboard
      </Link>
      <Link
        underline="hover"
        color="inherit"
        href="#"
      >
        Todays Offers
      </Link>
      <Typography color="text.primary">Create Offer</Typography>
    </Breadcrumbs>
  );
}