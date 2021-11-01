import React, { useState } from "react";
import { Modal, Button, InputGroup, FormControl, Form } from "react-bootstrap";
import styles from "./GifModal.module.css";

const GifModal = ({ show, handleClose, gif }) => {
  const [copy, setCopy] = useState(false);
  const [responsive, setResponsive] = useState(false);

  const IFrame = `<iframe src="${gif}"width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="${gif}">via GIPHY</a></p>`;
  const responsiveIFrame = `<div style="width:100%;height:0;padding-bottom:100%;position:relative;"><iframe src="${gif}" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="${gif}">via GIPHY</a></p>`;

  const onClickCopy = () => {
    navigator.clipboard.writeText(IFrame);
    setCopy(true);
    setTimeout(() => {
      setCopy(false);
    }, 3000);
  };

  const onSwitchAction = () => {
    setResponsive(!responsive);
  };
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        aria-labelledby='contained-modal-title-vcenter'
        centered
      >
        <Modal.Header closeButton className={styles.modal}>
          <Modal.Title style={{ color: "#1d44b8" }}>Embed GIF</Modal.Title>
        </Modal.Header>
        <Modal.Body className={styles.modalBody}>
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

          <InputGroup className='mb-3'>
            <FormControl
              aria-label='Iframe link'
              aria-describedby='basic-addon2'
              value={responsive ? responsiveIFrame : IFrame}
            />

            <Button
              aria-label='copy-embed-url-button'
              variant='flat'
              onClick={() => onClickCopy()}
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