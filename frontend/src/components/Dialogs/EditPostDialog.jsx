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
import * as React from "react";
import { useEffect, useState } from "react";
import { useRootStore } from "../../MST/Stores/RootStore";

export const EditPostDialog = observer(({ post }) => {
    const [open, setOpen] = useState(false);
    const { editPost } = useRootStore();

    const [title, setTitle] = useState(post.title);
    const [body, setBody] = useState(post.body);

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
        console.log(title);
    };

    const handleBodyChange = (event) => {
        setBody(event.target.value);
        console.log(body);
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // check if we have changed anything at all
        if (title === post.title && body === post.body) {
            console.log("Nothing has changed");
            return;
        } else {
            editPost(post.id, title, body);
        }
        handleClose();
    };

    return (
        <>
            <Fab
                size='small'
                color='secondary'
                aria-label='edit'
                onClick={handleClickOpen}
            >
                <EditIcon />
            </Fab>
            <Dialog fullWidth={true} open={open} onClose={handleClose}>
                <DialogTitle>Edit Post Form</DialogTitle>
                <DialogContent>
                    <DialogContentText color={"primary"}>
                        Please rename your post
                    </DialogContentText>
                    <TextField
                        // somehow doesn't work
                        // didn't find a way to make it work
                        autoFocus={true}
                        value={title}
                        margin='normal'
                        id='title'
                        type='text'
                        fullWidth
                        variant='standard'
                        onChange={handleTitleChange}
                    />
                    <DialogContentText color={"primary"}>
                        Refactor the existing body
                    </DialogContentText>
                    <TextField
                        id='standard-multiline-static'
                        margin='normal'
                        fullWidth
                        multiline
                        rows={10}
                        value={body}
                        variant='standard'
                        onChange={handleBodyChange}
                    />
                </DialogContent>

                <DialogActions>
                    <Button variant='outlined' onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant='outlined' onClick={handleSubmit}>
                        Save Changes
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
});
