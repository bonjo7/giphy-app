import React, { useEffect } from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import UseRoutes from "../../Hooks/RoutesHook";
import styles from "./Giflist.module.css";
import SearchBox from "../SearchBox/SearchBox";
import Spinner from "../Spinner/Spinner";

const GifList = () => {
  const { loading, gifs, getGifsData } = UseRoutes();

  useEffect(() => {
    getGifsData();
  }, []);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <Container>
          <SearchBox />
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
