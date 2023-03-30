import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import EditIcon from "@mui/icons-material/Edit";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Fab from "@mui/material/Fab";
import TextField from "@mui/material/TextField";
import { observer } from "mobx-react-lite";
import { applySnapshot, clone, getSnapshot } from "mobx-state-tree";
import * as React from "react";
import { useEffect, useState } from "react";
import { PostModel } from "../../../mst/Models/PostModel";
import { useRootStore } from "../../../mst/Stores/RootStore";

export const NewPostDialog = observer(() => {
    const { addPost } = useRootStore();
    const [open, setOpen] = useState(false);
    const [newPost, setNewPost] = useState(PostModel.create({}));

    const handleTitleChange = (event) => {
        newPost.changeTitle(event.target.value);
    };

    const handleBodyChange = (event) => {
        newPost.changeBody(event.target.value);
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setNewPost(PostModel.create({}));
        setOpen(false);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(newPost);
        addPost(newPost);
        setNewPost(PostModel.create({}));
        setOpen(false);
    };

    return (
        <>
            <Fab
                size='small'
                color='secondary'
                aria-label='edit'
                onClick={handleClickOpen}
            >
                <AddCircleOutlineOutlinedIcon />
            </Fab>
            <Dialog fullWidth={true} open={open} onClose={handleClose}>
                <DialogTitle>New Post Form</DialogTitle>
                <DialogContent>
                    <DialogContentText color={"#008080"}>
                        Please enter the title
                    </DialogContentText>
                    <TextField
                        // somehow doesn't work
                        // didn't find a way to make it work
                        autoFocus={true}
                        value={newPost.title}
                        margin='normal'
                        id='title'
                        type='text'
                        fullWidth
                        variant='standard'
                        onChange={handleTitleChange}
                    />
                    <DialogContentText color={"#008080"}>
                        Create a body for your post
                    </DialogContentText>
                    <TextField
                        id='standard-multiline-static'
                        margin='normal'
                        fullWidth
                        multiline
                        rows={10}
                        value={newPost.body}
                        variant='standard'
                        onChange={handleBodyChange}
                    />
                </DialogContent>

                <DialogActions>
                    <Button variant='outlined' onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant='outlined' onClick={handleSubmit}>
                        Create New Post
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
});
