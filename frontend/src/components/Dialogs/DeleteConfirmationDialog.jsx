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
import { useRootStore } from "../../MST/Stores/RootStore";

export const DeleteConfirmationDialog = observer(({ id }) => {
    const { deletePost } = useRootStore();

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        deletePost(id);
        handleClose();
    };

    return (
        <div>
            {/* <Button variant='outlined' onClick={handleClickOpen}>
                Open alert dialog
            </Button> */}
            <Fab
                size='small'
                color='secondary'
                aria-label='edit'
                onClick={handleClickOpen}
            >
                <DeleteIcon />
            </Fab>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby='alert-dialog-title'
                aria-describedby='alert-dialog-description'
            >
                <DialogTitle id='alert-dialog-title'>
                    {"Do you really want to delete this post?"}
                </DialogTitle>
                {/* <DialogContent>
                    <DialogContentText id='alert-dialog-description'>
                        Let Google help apps determine location. This means
                        sending anonymous location data to Google, even when no
                        apps are running.
                    </DialogContentText>
                </DialogContent> */}
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
