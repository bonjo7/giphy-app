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
        {categories.map((item, key) => {
          const buttonAriaLable = `${item.category}-button`
          return (
            <Col style={{textAlign: "center"}} key={key}>
              <Button
                aria-label={buttonAriaLable}
                id={buttonAriaLable}
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
