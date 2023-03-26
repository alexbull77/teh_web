import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { observer } from "mobx-react";
import * as React from "react";

import { Link } from "react-router-dom";
import { DeleteConfirmationDialog } from "../components/Dialogs/DeleteConfirmationDialog";
import { EditPostDialog } from "../components/Dialogs/EditPostDialog";

export const PostCardCustom = observer(({ post }) => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            {/* <CardMedia
                sx={{ height: 140 }}
                image={first_image.url}
                title={first_image.alt_name}
            /> */}
            <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                    {post.title}
                </Typography>
                <Typography
                    component={"span"}
                    variant={"body2"}
                    color='text.secondary'
                >
                    {post.body}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size='small' component={Link} to={`/post/${post.id}`}>
                    Learn More
                </Button>
                <div className='cursor-pointer'>
                    <EditPostDialog post={post} />
                </div>
                <div className='cursor-pointer'>
                    <DeleteConfirmationDialog post={post} />
                </div>
            </CardActions>
        </Card>
    );
});
