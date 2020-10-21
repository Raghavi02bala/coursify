import React from 'react';
import { ExamContainer, ExamHead, ExamWrapper, ExamCard } from './ExamElements'

const Exams = () => {
    return (
        <ExamContainer id="exams">
            <ExamHead>
                Exams that you can ace with Coursify
            </ExamHead>
            <ExamWrapper>
                <ExamCard>
                    BoardExams
                </ExamCard>
                <ExamCard>
                    JEE Mains & Advanced
                </ExamCard>
                <ExamCard>
                    NEET
                </ExamCard>
            </ExamWrapper>
        </ExamContainer>
    )
}

export default Exams;
