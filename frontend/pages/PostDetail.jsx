// import React from "react";

// const PostDetail = () => {
//     return (
//         <div>
//             <h1>Post Detail</h1>
//         </div>
//     );
// };

// export default PostDetail;
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useParams } from "react-router-dom";

const theme = createTheme({
    spacing: 3,
    paper: {
        padding: 3,
        marginBottom: 3,
    },
    chip: {
        marginRight: 1,
        marginBottom: 1,
    },
});

const PostDetail = ({ posts }) => {
    const { postId } = useParams();
    const [post, setPost] = useState({});

    useEffect(() => {
        setPost(posts.find((post) => post.id == postId));
    }, []);

    // const [first_image_obj, second_image_obj, third_image_obj] = post.images;
    console.log(post);

    return (
        <div>
            {post ? (
                // <div>
                //     <h1>Post is here</h1>
                // </div>
                <ThemeProvider theme={theme}>
                    <div style={{ flexGrow: 1, padding: theme.spacing(3) }}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={8}>
                                <Typography
                                    variant='h3'
                                    component='h1'
                                    gutterBottom
                                >
                                    {post.title}
                                </Typography>
                                <Typography variant='subtitle1' gutterBottom>
                                    By {post.author?.username}
                                </Typography>
                                <Divider />
                                <Typography
                                    variant='body1'
                                    gutterBottom
                                    style={{ marginTop: "1rem" }}
                                >
                                    {post.short_description}
                                </Typography>

                                {/* <Carousel
                                    sx={{
                                        height: 300,
                                        paddingTop: "56.25%",
                                    }}
                                >
                                    {post.images?.map((image) => {
                                        <Box
                                            key={image.id}
                                            component='img'
                                            sx={{
                                                height: 233,
                                                width: 350,
                                                maxHeight: { xs: 233, md: 167 },
                                                maxWidth: { xs: 350, md: 250 },
                                            }}
                                            alt={image.alt_name}
                                            src={image.url}
                                        />;

                                        

                                        // <Item key={i} item={item} />;
                                    })}
                                </Carousel> */}

                                <Carousel
                                    showArrows={false}
                                    stopOnHover={true}
                                    autoPlay={true}
                                    showStatus={false}
                                >
                                    {post.images?.map((image) => {
                                        return (
                                            <div key={image.id}>
                                                <img src={image.url} />
                                                {/* <p className='legend'>
                                                    Legend 1
                                                </p> */}
                                            </div>
                                        );
                                    })}
                                </Carousel>

                                <Divider
                                    style={{
                                        marginTop: "1rem",
                                        marginBottom: "1rem",
                                    }}
                                />
                                <Typography variant='body1' gutterBottom>
                                    {post.body}
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Paper sx={theme.paper}>
                                    <Typography
                                        variant='subtitle1'
                                        gutterBottom
                                    >
                                        Tags
                                    </Typography>
                                    {post.tags?.map((tag) => (
                                        <Chip
                                            key={tag.id}
                                            label={tag.name}
                                            sx={theme.chip}
                                        />
                                    ))}
                                </Paper>
                            </Grid>
                        </Grid>
                    </div>
                </ThemeProvider>
            ) : (
                <div>Post is not here</div>
            )}
        </div>
    );
};

export default PostDetail;
