import React from 'react';
import { SubjectContainer, SubjectWrapper, SubjectHead, SubjectCard, SubjectHead2 } from './SubjectElements'

const Subjects = () => {
    return (
        <SubjectContainer>
            <SubjectHead>
                Explore our subjects
            </SubjectHead>
            <SubjectWrapper>
                <SubjectCard>
                    Maths
                </SubjectCard>
                <SubjectCard>
                    Physics
                </SubjectCard>
                <SubjectCard>
                    Chemistry
                </SubjectCard>
                <SubjectCard>
                    Biology
                </SubjectCard>
                <SubjectCard>
                    Science
                </SubjectCard>
                <SubjectCard>
                    Commerce
                </SubjectCard>
                <SubjectCard>
                    Coding
                </SubjectCard>
                <SubjectCard>
                    Language
                </SubjectCard>
            </SubjectWrapper>
            {/* Second Container */}


            <SubjectHead2>
                Free Solutions
            </SubjectHead2>
            <SubjectWrapper>
                <SubjectCard>
                    NCERT Solutions
                </SubjectCard>
                <SubjectCard>
                    NCERT Exemplar
                </SubjectCard>
                <SubjectCard>
                    Reference Books
                </SubjectCard>
                <SubjectCard>
                    Exam Prep material
                </SubjectCard>
            </SubjectWrapper>
        </SubjectContainer>
    )
}

export default Subjects;
