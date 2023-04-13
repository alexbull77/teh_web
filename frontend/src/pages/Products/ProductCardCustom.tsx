import { Box } from "@mui/material"
import Button from "@mui/material/Button"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"
import * as React from "react"
import { Link } from "react-router-dom"

export default function ProductCardCustom({
    id,
    title,
    description,
    thumbnail,
    price,
}) {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                image={thumbnail}
                title={"some_alt_name"}
                sx={{ height: 140, objectFit: "contain" }}
                component={Link}
                to={`/product/${id}`}
            />
            <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                    {title}
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                    {description}
                </Typography>
                <Box px={1}>
                    <Typography
                        variant='h5'
                        align='right'
                        // component='h2'
                        gutterBottom={true}
                    >
                        {price + " USD"}
                    </Typography>
                </Box>
            </CardContent>
            <CardActions>
                <Button size='small' component={Link} to={`/product/${id}`}>
                    Learn More
                </Button>
            </CardActions>
        </Card>
    )
}
