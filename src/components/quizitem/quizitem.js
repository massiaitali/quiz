import React from 'react';
import { Row, Col } from 'react-materialize';
import CardItem from './../carditem/carditem';

const QuizItem = ({question, answers, idGoodAnswer, setResult, result}) => {
    return (
        <Row>
            <Col m={3} s={0}/>
            <Col m={6} s={12}>
                <CardItem question={question} answers={answers} idGoodAnswer={idGoodAnswer} setResult={setResult} result={result}/>
            </Col>
            <Col m={3} s={0}/>
        </Row>
    )
};

export default QuizItem;