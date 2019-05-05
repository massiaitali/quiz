import React, { Fragment } from 'react';
import { Carousel } from 'react-materialize';
import './solo.css';
import QuizItem from "../quizitem/quizitem";

const questions = [
    {
        'question': "who is the best dog of the world ?",
        'answers': [
            "Tyson",
            "Betoven"
        ],
        'idAnswer': 1
    },
    {
        'question': "who is the cat of the world ?",
        'answers': [
            "Gaspar",
            "Mimi"
        ],
        'idAnswer': 2
    }
];

const Solo = () => {
    return (
        <Fragment>
            <Carousel options={{fullWidth: true}}>
                {
                    questions.map((question,index) => (
                        <div key={index}>
                            <QuizItem question={question}/>
                        </div>
                    ))
                }
            </Carousel>
        </Fragment>
    );
};

export default Solo;