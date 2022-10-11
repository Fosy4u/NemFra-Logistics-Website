import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { ReactComponent as Phone } from "feather-icons/dist/icons/phone.svg";
import { ReactComponent as Mail } from "feather-icons/dist/icons/mail.svg";

export default function PhoneNumber({ open, setOpen }) {
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <div>
     
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        severity="success"
        open={open}
        autoHideDuration={90000}
        onClose={handleClose}
        // message= {`${<Phone />} : +2347061146501   ${<Mail />} : info@nemfra.com`}
        message={
          <span className="d-flex">
            <span className="d-flex me-1">
              <Phone className="brandPrimary me-1" /> +2347061146501
            </span>
            <span className="d-flex ms-1">
              <Mail className="brandPrimary me-1" /> info@nemfra.com
            </span>
          </span>
        }
        action={action}
      />
    </div>
  );
}
