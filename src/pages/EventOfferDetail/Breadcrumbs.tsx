import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';


interface props
{
  title: string
}

export default function BasicBreadcrumbs(props: props) {
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link underline="hover" color="inherit" href="#">
        "Valencia Irish Pub"
      </Link>
      <Link
        underline="hover"
        color="inherit"
        href="#"
      >
        Todays Offers
      </Link>
      <Typography color="text.primary">{props.title}</Typography>
    </Breadcrumbs>
  );
}