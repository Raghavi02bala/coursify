import React from 'react';
import { TestimonialContainer, TestimonialWrapper, TestimonialCard, TestimonialIcon, TestimonialP } from './TestimonialElements';
import male from '../../images/male.svg';
import female from '../../images/female.svg' ;

const Testimonial = () => {
    return (
        <TestimonialContainer id="testi">
            <TestimonialWrapper>
                <TestimonialCard>
                    <TestimonialIcon src={male}></TestimonialIcon>
                    <TestimonialP>I have had my best experience with this site</TestimonialP>
                </TestimonialCard>
                <TestimonialCard>
                    <TestimonialIcon src={female}></TestimonialIcon>
                    <TestimonialP>I got all the solutions neccessary from this site</TestimonialP>
                </TestimonialCard>
                <TestimonialCard>
                    <TestimonialIcon src={male}></TestimonialIcon>
                    <TestimonialP>I solved all the previous year papers and got scores in my exams</TestimonialP>
                </TestimonialCard>
                <TestimonialCard>
                    <TestimonialIcon src={female}></TestimonialIcon>
                    <TestimonialP>I used this ite for solving my homeworks</TestimonialP>
                </TestimonialCard>
            </TestimonialWrapper>
        </TestimonialContainer>
    )
}

export default Testimonial;
