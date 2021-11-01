import React, { useState } from "react";
import { Container, Card, Row, Col, Button } from "react-bootstrap";
import GifModal from "../Modal/GifModal";
import { Share } from "phosphor-react";
import styles from "./Giflist.module.css";
import Spinner from "../Spinner/Spinner";

const GifList = ({ gifs, loading }) => {
  const [show, setShow] = useState(false);
  const [gif, setGif] = useState();
  const handleClose = () => setShow(false);

  const handleShow = (gifEmbed_URL) => {
    setShow(true);
    setGif(gifEmbed_URL);
  };
  return (
    <>
      <GifModal handleClose={handleClose} show={show} gif={gif} />

      {loading ? (
        <Spinner />
      ) : (
        <Container id='landing-page'>
          <Row>
            {gifs?.map((gif, key) => {
              const altTag = `${gif.title}-gif`;
              return (
                <Col sm={4}>
                  <Card className={styles.card} key={key} id={altTag}>
                    <Card.Img
                      alt={altTag}
                      variant='top'
                      className={styles.img}
                      src={gif.images.original.url}
                    />
                    <Card.Body>
                      <Card.Text className={styles.cardText}>
                        {gif.title.split("by")[0]}
                      </Card.Text>
                      <Button
                        aria-label='embed-button'
                        onClick={() => handleShow(gif.embed_url)}
                      >
                        <Share size={20} />
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      )}
    </>
  );
};

export default GifList;
