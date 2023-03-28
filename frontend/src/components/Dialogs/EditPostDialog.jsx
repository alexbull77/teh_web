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

    const handleTitleChange = (event) => {
        post.changeTitle(event.target.value);
    };

    const handleBodyChange = (event) => {
        post.changeBody(event.target.value);
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // client-side edit is already done, so we need to sync the server
        post.edit();
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
                    <DialogContentText color={"#008080"}>
                        Please rename your post
                    </DialogContentText>
                    <TextField
                        // somehow doesn't work
                        // didn't find a way to make it work
                        autoFocus={true}
                        value={post.title}
                        margin='normal'
                        id='title'
                        type='text'
                        fullWidth
                        variant='standard'
                        onChange={handleTitleChange}
                    />
                    <DialogContentText color={"#008080"}>
                        Refactor the existing body
                    </DialogContentText>
                    <TextField
                        id='standard-multiline-static'
                        margin='normal'
                        fullWidth
                        multiline
                        rows={10}
                        value={post.body}
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
