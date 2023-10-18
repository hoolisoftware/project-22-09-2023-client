import {
    Box,
    Card,
    CardContent,
    Grid,
    Stack,
    Typography
} from '@mui/material';

import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

interface StarsProps
{
    percent: number
}

function Stars(props: StarsProps)
{
    return <Stack direction={'row'} justifyContent={'center'}>
        {
            props.percent > 0 ? <StarIcon/> : <StarBorderIcon/>
        }
        {
            props.percent > 20 ? <StarIcon/> : <StarBorderIcon/>
        }
        {
            props.percent > 40 ? <StarIcon/> : <StarBorderIcon/>
        }
        {
            props.percent > 60 ? <StarIcon/> : <StarBorderIcon/>
        }
        {
            props.percent > 80 ? <StarIcon/> : <StarBorderIcon/>
        }
    </Stack> 
}


const data: [string, number][] = [
    ['Home team win', 19],
    ['Draw', 36],
    ['Away team win', 45]
]


export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {
            data.map(item =>
                <Grid item xs={12} sm={4} key={item[0]}>
                    <Card variant='outlined'>
                        <CardContent>
                            <center>
                                <Typography variant='h6'>
                                    {item[0]}
                                </Typography>
                                {item[1]}%
                                <div>
                                    <Stars percent={item[1]}/>
                                </div>
                            </center>
                        </CardContent>
                    </Card>
                </Grid>
            )
        }
      </Grid>
    </Box>
  );
}