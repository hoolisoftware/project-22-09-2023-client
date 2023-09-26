import { Link as RouterLink } from 'react-router-dom'
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { Button } from '@mui/material';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

import Container from '../Container';


export type Breadcrumb = [string, string]

interface Props
{
    title: string
    breadcrumbs: Breadcrumb[] | boolean 
    back?: boolean
}

export default function BasicBreadcrumbs(props: Props) {
  return (
    <Container>
        <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/">
            Dashboard
            </Link>
            {
                Array.isArray(props.breadcrumbs) && props.breadcrumbs.map(item => 
                    <Link
                        component={RouterLink}
                        to={item[1]}
                        underline="hover"
                        color="inherit"
                    >
                        {item[0]}
                    </Link>
                )
            }
            <Typography color="text.primary">{props.title}</Typography>
        </Breadcrumbs>
        {
            props.back &&
            <Button
                component={RouterLink}
                to={Array.isArray(props.breadcrumbs) ? props.breadcrumbs[props.breadcrumbs.length-1][1] : '/'}
                variant='contained'
                size='small'
                sx={{mt: 3}}
                startIcon={<ArrowBackIosIcon/>}    
            >
                Back
            </Button>
        }
    </Container>
  );
}