import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import * as React from "react";

export default function PostCardCustom({ title, short_description, images }) {
    const [first_image, second_image, third_image] = images;

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image={first_image.url}
                title={first_image.alt_name}
            />
            <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                    {title}
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                    {short_description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size='small'>Share</Button>
                <Button size='small'>Learn More</Button>
            </CardActions>
        </Card>
    );
}
