import {
    Box,
    Card,
    CardContent,
    Grid,
    Typography,
    TextField
} from '@mui/material';


interface props
{
    offerId?: string
}

export default function BasicGrid(props: props) {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                {
                    ['Home team win', 'Draw', 'Away team win'].map(item =>
                        <Grid item xs={12} sm={4} key={item}>
                            <Card variant='outlined'>
                                <CardContent>
                                    <center>
                                        <Typography variant='h6' gutterBottom>
                                            {item}
                                        </Typography>
                                        <TextField
                                            fullWidth
                                            placeholder="Prize description"
                                            multiline
                                            rows={5}
                                            defaultValue={
                                                props.offerId ? `${item} lorem ipsum` : ''
                                            }
                                        />
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