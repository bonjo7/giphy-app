import React from "react";
import { Button, Row, Col } from "react-bootstrap";

const Topics = ({ searchGifs }) => {
  const categories = [
    {
      id: 0,
      category: "Sport",
    },
    {
      id: 1,
      category: "Funny",
    },
    {
      id: 2,
      category: "Halloween",
    },
    {
      id: 3,
      category: "Dancing",
    },
  ];

  return (
    <>
      <Row>
        {categories.map((item) => {
          return (
            <Col style={{textAlign: "center"}}>
              <Button
                aria-label="category-button"
                id={`button-${item.key}`}
                variant='outline-info'
                key={item.id}
                onClick={() => searchGifs(item.category)}
              >
                {item.category}
              </Button>
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default Topics;
