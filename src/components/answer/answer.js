import React from 'react';
import { Button } from 'react-materialize';

const Answer = ({answer}) => {
    return (
            <Button className={'answer'} key={'question0answer0'}> {answer} </Button>
    )
};

export default Answer;