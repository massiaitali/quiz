import React from 'react';
import {Card, Col, Row} from "react-materialize";

const Score = ({score}) => {
  return (
    <Row>
      <Col m={3} s={0}/>
      <Col m={6} s={12}>
        <Card
          className="blue-grey darken-1"
          textClassName="white-text"
          title={'Resultat'}
        >
          {score}
        </Card>
      </Col>
      <Col m={3} s={0}/>
    </Row>
  );
};

export default Score;