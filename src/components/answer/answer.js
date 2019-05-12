import React from 'react';
import { Button } from 'react-materialize';

const Answer = ({answer, idGoodAnswer, setResult, index, result}) => {
    const onClick = e => (
      Number(e.target.value) === idGoodAnswer ? setResult(result+1) : false
    );
    return (
            <Button className={'answer'} key={'question0answer0'} onClick={onClick} value={index}> {answer} </Button>
    )
};

export default Answer;