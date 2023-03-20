import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useParams } from "react-router-dom";

const PostDetail = () => {
    const { postId } = useParams();
    const [post, setPost] = useState({});

    useEffect(() => {
        axios
            .get(`http://127.0.0.1:8000/api/post/${postId}`)
            .then((res) => setPost(res.data));
        // console.log("Post Detail>> ", post);
    }, []);

    return (
        <>
            {!post ? (
                <div>
                    <h1>Post is not here</h1>
                </div>
            ) : (
                <div style={{ flexGrow: 1 }}>
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

                            <Carousel
                                showArrows={false}
                                stopOnHover={true}
                                autoPlay={true}
                                showStatus={false}
                            >
                                {post.images?.map((image) => {
                                    return (
                                        <div key={image.id}>
                                            <img
                                                src={image.url}
                                                alt={image.alt_name}
                                            />
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
                            <Paper>
                                <Typography variant='subtitle1' gutterBottom>
                                    Tags
                                </Typography>
                                {post.tags?.map((tag) => (
                                    <Chip key={tag.id} label={tag.name} />
                                ))}
                            </Paper>
                        </Grid>
                    </Grid>
                </div>
            )}
        </>
    );
};

export default PostDetail;
