import { Box, Button, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import teaImage from "../../static/teaImage.jpg";
const Home = () => {
    return (
        <>
            <div className='grid place-items-center h-screen '>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <Box
                            sx={{
                                margin: 7,
                            }}
                        >
                            <Typography
                                variant='h3'
                                component='h1'
                                style={{ marginBottom: "0.5rem" }}
                            >
                                Welcome to Tea Haven
                            </Typography>

                            <Typography
                                variant='subtitle1'
                                gutterBottom
                                style={{ marginBottom: "1rem" }}
                            >
                                Discover our range of high-quality teas sourced
                                from around the world.
                            </Typography>
                            <Button
                                variant='contained'
                                color='primary'
                                style={{ marginTop: "1rem" }}
                                component={Link}
                                to={"/products"}
                            >
                                Shop Now
                            </Button>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <img
                            src={teaImage}
                            alt='Tea'
                            style={{
                                width: "100%",
                                height: "auto",
                                marginBottom: "2rem",
                            }}
                        />
                    </Grid>
                </Grid>
            </div>
        </>
    );
};

export default Home;
