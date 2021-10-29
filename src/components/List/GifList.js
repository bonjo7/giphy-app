import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";

import styles from "./Giflist.module.css";
import Spinner from "../Spinner/Spinner";

const GifList = ({ gifs, loading }) => {
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <Container>
          <Row>
            {gifs?.map((gif, key) => {
              return (
                <Col sm={4} key={key}>
                  <Card className={styles.card}>
                    <Card.Img
                      variant='top'
                      className={styles.img}
                      src={gif.images.original.url}
                    />
                    <Card.Body>
                      <Card.Text className={styles.cardText}>
                        {gif.title.split("by")[0]}
                      </Card.Text>
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
