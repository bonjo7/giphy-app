import React from "react";
import { Modal, Button, InputGroup, FormControl, Form } from "react-bootstrap";
import UseModal from "../../Hooks/ModalHook";
import Toast from "../Toast/Toast";
import styles from "./GifModal.module.css";

const GifModal = ({ show, handleClose, gif, share }) => {
  const { copy, responsive, onSwitchAction, onClickCopy, error, errorStatus, showToast,  setShow  } = UseModal();

  const gifURL = gif;
  const IFrame = `<iframe src="${gif}"width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="${gif}">via GIPHY</a></p>`;
  const responsiveIFrame = `<div style="width:100%;height:0;padding-bottom:100%;position:relative;"><iframe src="${gif}" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="${gif}">via GIPHY</a></p>`;

  const modalValue = () => {
    let value;
    if (share) {
      value = gifURL;
    }
    if (!share && !responsive) {
      value = IFrame;
    }
    if (!share && responsive) {
      value = responsiveIFrame;
    }

    return value;
  };
  return (
    <>
     {error && (
          <Toast
            error={error}
            errorStatus={errorStatus}
            show={show}
            setShow={showToast}
          />
        )}
      <Modal
        id="share-modal"
        show={show}
        onHide={handleClose}
        aria-labelledby='contained-modal-title-vcenter'
        centered
      >
        <Modal.Header closeButton id="close-button" className={styles.modal}>
          <Modal.Title style={{ color: "#1d44b8" }}>
            {" "}
            {share ? "Share GIF" : "Embed GIF"}
          </Modal.Title>
        </Modal.Header>

        <Modal.Body className={styles.modalBody}>
          {share ? (
            ""
          ) : (
            <>
              <p>
                Want to embed this GIF on your website or blog? Just drop in the
                embed code below and you're done!
              </p>

              <Form.Switch
                onChange={onSwitchAction}
                id='responsive-switch'
                label='Responsive'
                checked={responsive}
                style={{ marginBottom: "20px" }}
              />
            </>
          )}

          <InputGroup className='mb-3'>
            <FormControl
              id='IframeLink'
              aria-label='Iframe-link'
              aria-describedby='Iframe-link'
              value={modalValue()}
            />

            <Button
              aria-label='copybutton'
              variant='flat'
              onClick={(e) =>
                onClickCopy(document.getElementById("IframeLink").value)
              }
              id='button-addon2'
              className={copy ? styles.buttonCopied : styles.buttonCopy}
            >
              {copy ? "Copied" : "Copy Code"}
            </Button>
          </InputGroup>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default GifModal;
