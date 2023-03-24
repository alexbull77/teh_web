import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { Link } from "react-router-dom";
import { DeleteConfirmationDialog } from "../components/Dialogs/DeleteConfirmationDialog";
import { EditPostDialog } from "../components/Dialogs/EditPostDialog";

export const PostCardCustom = ({ id, title, body }) => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            {/* <CardMedia
                sx={{ height: 140 }}
                image={first_image.url}
                title={first_image.alt_name}
            /> */}
            <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                    {title}
                </Typography>
                <Typography
                    component={"span"}
                    variant={"body2"}
                    color='text.secondary'
                >
                    {body}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size='small' component={Link} to={`/post/${id}`}>
                    Learn More
                </Button>
                <div className='cursor-pointer'>
                    <EditPostDialog id={id} />
                </div>
                <div className='cursor-pointer'>
                    <DeleteConfirmationDialog id={id} />
                </div>
            </CardActions>
        </Card>
    );
};
