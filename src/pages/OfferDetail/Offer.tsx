import {
    Box,
    Card,
    CardContent,
    Grid,
    Typography,
} from '@mui/material';


interface props
{
    offerId?: string
}

export default function BasicGrid(props: props) {
    props.offerId

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                {
                    ['Home team win', 'Draw', 'Away team win'].map(item =>
                        <Grid item xs={12} sm={4}>
                            <Card variant='outlined'>
                                <CardContent>
                                    <center>
                                        <Typography variant='h6' gutterBottom>
                                            {item}
                                        </Typography>
                                        <Typography>
                                            {item} lorem ipsum
                                        </Typography>
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