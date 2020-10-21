import styled from 'styled-components';

export const ExamContainer = styled.div`
    overflow-x: hidden !important;
    width: 100%; 
    background: #031C32;
    color: #EBCACA;
    font-family: 'Chilanka', cursive;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 200px;
    position: relative;
    z-index: 1; 
    @media screen and (max-width: 740px){
        height: 1100px;   
    }
`;

export const ExamHead = styled.h1`
  padding: 30px;
  font-size: 1.5em;
  margin-top: -10px;
  text-align: center;
  color: #EBCACA;
  @media screen and (max-width: 740px){
      margin-bottom: 300px;
  }
`;

export const ExamWrapper = styled.div`
max-width: 2px;
margin-left: -880px;
width: 100%;
display: grid;
grid-template-columns: 1fr 1fr 1fr ;
grid-gap: 40px;
@media screen and (max-width: 740px){
    margin-top: -240px;
    margin-left: -270px;
    grid-template-columns: 1fr  ;
    padding: 0 20px;
}
`;

export const ExamCard = styled.div`
    background: #B3365B;
    max-height: 340px;
    width: 250px;
    align-items: center;
    padding: 40px 40px 50px 40px;
    transcition: all 0.2 ease-in-out;

    &:hover{
        transform: scale(1.2);
        transcition: all 0.2 ease-in-out;
        cursor: pointer;
    }
`;
