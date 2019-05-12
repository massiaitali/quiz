import React from 'react';
import { Card } from 'react-materialize';
import Answer from './../answer/answer';
import ContentQuestion from '../contentquestion/ContentQuestion';

const CardItem = ({question, answers, idGoodAnswer, setResult, result}) => {
    return (
            <Card
                className="blue-grey darken-1"
                textClassName="white-text"
                title={question}
                actions={
                    answers.map((answer, index) => (
                        <Answer key={index} index={index} answer={answer} idGoodAnswer={idGoodAnswer} setResult={setResult} result={result}/>
                    ))
                }
            >
                <ContentQuestion/>
            </Card>
    )
};

export default CardItem;