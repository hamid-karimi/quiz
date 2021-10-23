import React from 'react'
import {AnswerObject} from '../App'


//styles
import { Wrapper, ButtonWrapper } from './QuestionCard.styles'

type Props ={
    question: string;
    answers: string[];
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer: AnswerObject | undefined;
    questionNr: number;
    totalQuestions: number;
}
const QuestionCard: React.FC<Props> = ({
    question, 
    answers, 
    callback, 
    userAnswer, 
    questionNr, 
    totalQuestions
}) => {
    return (
        <Wrapper>
            <p className="number">
                Questions: {questionNr} / {totalQuestions}
            </p>
            <p dangerouslySetInnerHTML={{__html: question}} />
            <div>
                {answers.map(answer => (
                    <ButtonWrapper 
                        correct={userAnswer?.correctAnswer === answer}
                        userClicked={userAnswer?.answer === answer}
                        key={answer}
                    >
                        <button disabled={userAnswer ? true : false} value={answer} onClick={callback}>
                            <span dangerouslySetInnerHTML={{__html: answer}} />
                        </button>
                    </ButtonWrapper>
                ))}
            </div>
            
        </Wrapper>            
    )
}


export default QuestionCard
