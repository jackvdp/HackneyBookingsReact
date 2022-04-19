import React, { useState } from "react"
import { Dialog, DialogOverlay, DialogContent } from "@reach/dialog";
import "@reach/dialog/styles.css";

const DialogCancel = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="govuk-button lbh-button"
      >
        Cancel Booking
      </button>

      <Dialog
        title="Are you sure?"
        isOpen={open}
        onDismiss={() => setOpen(false)}
      >
        <p className="lbh-body">Are you sure you want to cancel the booking?</p>

        <div className="lbh-dialog__actions">
          <a href="#" className="govuk-button lbh-button">
            Yes, cancel
          </a>

          <button
            onClick={() => setOpen(false)}
            className="lbh-link lbh-link--no-visited-state"
          >
            No, don't cancel
          </button>
        </div>
      </Dialog>
    </>
  )
}

export default DialogCancel