import React, { useState } from "react";
import { Container, Card, Row, Col, Button } from "react-bootstrap";
import GifModal from "../Modal/GifModal";
import { CodeSimple, Share } from "phosphor-react";
import styles from "./Giflist.module.css";
import Spinner from "../Spinner/Spinner";

const GifList = ({ gifs, loading }) => {
  const [show, setShow] = useState(false);
  const [share, setShare] = useState(false);
  const [gif, setGif] = useState();
  const handleClose = () => setShow(false);

  const handleShow = (gifEmbed_URL) => {
    setShow(true);
    setShare(false);
    setGif(gifEmbed_URL);
  };

  const shareGif = (gifURL) => {
    setShare(true);
    setShow(true);
    setGif(gifURL);
  };
  return (
    <>
      <GifModal handleClose={handleClose} show={show} gif={gif} share={share} />

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
                      <div className={styles.centre}>
                        <Button
                          id="embed-button"
                          aria-label='embed-button'
                          variant='flat'
                          style={{ color: "#fff" }}
                          onClick={() => handleShow(gif.embed_url)}
                        >
                          <CodeSimple size={20} /> Embed
                        </Button>
                        <Button
                          id="share-button"
                          aria-label='share-button'
                          variant='flat'
                          style={{ color: "#fff" }}
                          onClick={() => shareGif(gif.url)}
                        >
                          <Share size={20} /> Share
                        </Button>
                      </div>
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
