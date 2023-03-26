import { Box, Button, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Meme from "../../static/meme.jpg";
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
                                Welcome to My Project
                            </Typography>

                            <Typography
                                variant='subtitle1'
                                gutterBottom
                                style={{ marginBottom: "1rem" }}
                            >
                                Let's discover my shitty design and a varity of
                                bugs together!
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
                            src={Meme}
                            alt='Meme'
                            style={{
                                width: "80%",
                                height: "auto",
                                marginBottom: "2rem",
                                marginRight: "2rem",
                            }}
                        />
                    </Grid>
                </Grid>
            </div>
        </>
    );
};

export default Home;
