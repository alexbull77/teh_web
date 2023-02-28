import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import * as React from "react";
import { Link } from "react-router-dom";

export default function ProductCardCustom({
    id,
    title,
    description,
    image,
    price,
    quantity,
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
                {/* <Typography variant='body2' color='text.secondary'>
                    
                </Typography> */}
                <Box px={1}>
                    <Typography
                        variant='h5'
                        align='right'
                        component='h2'
                        gutterBottom={true}
                    >
                        {price + " USD"}
                        <Typography
                            variant='h6'
                            color='textSecondary'
                            component='span'
                        >
                            {" / " + quantity}
                        </Typography>
                    </Typography>
                    {/* <Typography color="textSecondary" variant="subtitle1" component="p">{content['01_benefit1']}</Typography>
                    <Typography color="textSecondary" variant="subtitle1" component="p">{content['01_benefit2']}</Typography>
                    <Typography color="textSecondary" variant="subtitle1" component="p">{content['01_benefit3']}</Typography>
                    <Typography color="textSecondary" variant="subtitle1" component="p" paragraph={true}>{content['01_benefit4']}</Typography> */}
                </Box>
            </CardContent>
            <CardActions>
                <Button size='small' component={Link} to={`/products/${id}`}>
                    Learn More
                </Button>
            </CardActions>
        </Card>
    );
}
