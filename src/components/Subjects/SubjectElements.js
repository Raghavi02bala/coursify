import styled from 'styled-components';

export const SubjectContainer = styled.div`
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
    height: 500px;
    position: relative;
    z-index: 1; 
    @media screen and (max-width: 740px){
        height: 1100px;   
    }
`;

export const SubjectHead = styled.h1`
  padding: 30px;
  font-size: 1.5em;
  text-align: center;
  color: #EBCACA;
  @media screen and (max-width: 740px){
      margin-bottom: 300px;
  }
`;

export const SubjectWrapper = styled.div`
max-width: 2px;
margin-left: -990px;
width: 100%;
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
grid-gap: 40px;
@media screen and (max-width: 740px){
    margin-top: -240px;
    margin-left: -270px;
    grid-template-columns: 1fr  ;
    padding: 0 20px;
}
`;

export const SubjectCard = styled.div`
    background: #B3365B;
    width: 200px;
    align-items: center;
    display:flex;
    justify-content: center;
    padding: 20px 20px 20px 20px;
    transcition: all 0.2 ease-in-out;

    &:hover{
        transform: scale(1.2);
        transcition: all 0.2 ease-in-out;
        cursor: pointer;
    }
`;


export const SubjectHead2 = styled.h1`
  padding: 30px;
  font-size: 1.5em;
  margin-top: 10px;
  text-align: center;
  color: #EBCACA;
  @media screen and (max-width: 740px){
      margin-bottom: 300px;
  }
`;


