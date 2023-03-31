import * as React from "react";
import Button from "@mui/material/Button";
import { useRootStore } from "../../mst/Stores/RootStore";
import { useNavigate } from "react-router-dom";

export default function SignOut() {
  const { resetCurrentUser } = useRootStore();
  const navigate = useNavigate();
  const handleCancel = () => {
    navigate("/home");
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    resetCurrentUser();
    navigate("/home");
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="mx-auto text-center">
        <p className="font-bold text-2xl mb-4">
          Do you really want to Sign Out?
        </p>
        <div className="space-x-4">
          <Button variant="outlined" onClick={handleCancel}>
            Cancel
          </Button>
          <Button variant="outlined" onClick={handleSubmit}>
            Sign Out
          </Button>
        </div>
      </div>
    </div>
  );
}
