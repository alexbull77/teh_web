import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import * as React from "react";

export default function ProductCardCustom({
    title,
    description,
    image,
    rating,
    category,
}) {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                image={image.url}
                title={image.alt_name}
                sx={{ height: 140, objectFit: "contain" }}
            />
            <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                    {title}
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                    {description}
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                    {rating}
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                    {category}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size='small'>Share</Button>
                <Button size='small'>Learn More</Button>
            </CardActions>
        </Card>
    );
}
