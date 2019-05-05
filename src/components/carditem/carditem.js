import React from 'react';
import { Card } from 'react-materialize';
import Answer from './../answer/answer';
import Question from './../question/question';

const CardItem = ({question}) => {
    return (
            <Card
                className="blue-grey darken-1"
                textClassName="white-text"
                title="Card title"
                actions={
                    question.answers.map((answer, index) => (
                        <Answer key={index} answer={answer} />
                    ))
                }
            >
                <Question question={question.question}/>
            </Card>
    )
};

export default CardItem;