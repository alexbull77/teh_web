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
import { useState } from "react";
import { IPostModel } from "../../../mst/Interfaces";

export const EditPostDialog = observer(({ post }: { post: IPostModel }) => {
  const [open, setOpen] = useState(false);
  const [clonedObject, setClonedObject] = useState(clone(post));

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    clonedObject.changeTitle(event.target.value);
  };

  const handleBodyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    clonedObject.changeBody(event.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setClonedObject(clone(post));
    setOpen(false);
  };

  const handleSubmit = (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    applySnapshot(post, getSnapshot(clonedObject));
    // client-side edit is already done, so we need to sync the server
    post.edit();
    handleClose();
  };

  return (
    <>
      <Fab
        size="small"
        color="secondary"
        aria-label="edit"
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
            value={clonedObject.title}
            margin="normal"
            id="title"
            type="text"
            fullWidth
            variant="standard"
            onChange={handleTitleChange}
          />
          <DialogContentText color={"#008080"}>
            Refactor the existing body
          </DialogContentText>
          <TextField
            id="standard-multiline-static"
            margin="normal"
            fullWidth
            multiline
            rows={10}
            value={clonedObject.body}
            variant="standard"
            onChange={handleBodyChange}
          />
        </DialogContent>

        <DialogActions>
          <Button variant="outlined" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="outlined" onClick={handleSubmit}>
            Save Changes
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
});
