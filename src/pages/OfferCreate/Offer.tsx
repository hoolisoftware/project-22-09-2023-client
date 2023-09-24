import {
    Box,
    Card,
    CardContent,
    Grid,
    Typography,
    TextField
} from '@mui/material';


export default function BasicGrid() {
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
                                        <TextField
                                            fullWidth
                                            placeholder="Prize description"
                                            multiline
                                            rows={5}
                                            maxRows={20}
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