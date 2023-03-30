import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Fab from "@mui/material/Fab";
import { observer } from "mobx-react";
import * as React from "react";
import { IPostModel } from "../../../mst/Interfaces";

export const DeleteConfirmationDialog = observer(({ post }: IPostModel) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    post.delete();
    handleClose();
  };

  return (
    <div>
      <Fab
        size="small"
        color="secondary"
        aria-label="edit"
        onClick={handleClickOpen}
      >
        <DeleteIcon />
      </Fab>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Do you really want to delete this post?"}
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleClose}>No</Button>
          <Button onClick={handleSubmit} autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
});
