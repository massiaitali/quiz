import React, { Fragment, useState } from 'react';
import { Carousel } from 'react-materialize';
import './solo.css';
import QuizItem from "../quizitem/quizitem";
import Score from "../score/score";

const questions = [
    {
        'question': "who is the best dog of the world ?",
        'answers': [
            "Tyson",
            "Betoven"
        ],
        'idAnswer': 0
    },
    {
        'question': "who is the cat of the world ?",
        'answers': [
            "Gaspar",
            "Mimi"
        ],
        'idAnswer': 1
    }
];

const Solo = () => {
    const [result, setResult] = useState(0);
    return (
        <Fragment>
            <Carousel options={{fullWidth: true}}>
            {
                questions.map((question,index) => (
                    <div key={index}>
                        <QuizItem question={question.question} answers={question.answers} idGoodAnswer={question.idAnswer} setResult={setResult} result={result}/>
                    </div>
                ))
            }
                <div>
                    <Score score={ `${result}/${questions.length}` } />
                </div>
            </Carousel>
        </Fragment>
    );
};

export default Solo;