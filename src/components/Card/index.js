import React from 'react';
import Icon1 from '../../images/svg-1.svg';
import Icon2 from '../../images/svg-2.svg';
import Icon3 from '../../images/svg-3.svg';
import Icon4 from '../../images/svg-4.svg'
import { CardContainer, CardWrapper, Card, CardIcon, CardH1, CardP } from './CardElements';


const CardComponent = () => {
    return (
        <CardContainer id="card">
            <CardWrapper>
                <Card>
                    <CardH1>LIVE CLASSES</CardH1>
                    <CardIcon src={Icon1}></CardIcon>
                    <CardP>Learn live from the best tutors in India</CardP>

                </Card>
                <Card>
                    <CardH1>EARN CASH</CardH1>
                    <CardIcon src={Icon2}></CardIcon>
                    <CardP>Learn live from the best tutors in India</CardP>
                </Card>
                <Card>
                    <CardH1>EXAM PREPARATION</CardH1>
                    <CardIcon src={Icon3}></CardIcon>
                    <CardP>Learn live from the best tutors in India</CardP>
                </Card>
                <Card>
                    <CardH1>SMALL TEST</CardH1>
                    <CardIcon src={Icon4}></CardIcon>
                    <CardP>Learn live from the best tutors in India</CardP>
                </Card>
            </CardWrapper>
        </CardContainer>
    )
}

export default CardComponent;