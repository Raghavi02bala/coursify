import styled from 'styled-components';

export const MaterialContainer = styled.div`
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
    height: 550px;
    position: relative;
    z-index: 1; 
    @media screen and (max-width: 740px){
        height: 1200px; 
        display: flex;
        flex-direction: column;  
    }
`;

export const MaterialWrapper = styled.div`
    max-width: 2px;
    margin-left: 200px;
    display: grid;
    margin-left: -1000px;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 16px;
    @media screen and (max-width: 740px){
        margin-left: -270px;
        grid-template-columns: 1fr 1fr ;
        padding: 0 20px;
    }
`;

export const MaterialCard = styled.div`
    border-radius: 10px;
    max-height: 340px;
    padding: 30px;
    transcition: all 0.2 ease-in-out;

    &:hover{
        transform: scale(1.2);
        transcition: all 0.2 ease-in-out;
        cursor: pointer;
    }
`;

export const MaterialIcon = styled.img`
    height: 60px;
    width: 60px;
    margin-top: -60px;
    margin-bottom: 10px;
`;

export const MaterialP = styled.p`
        font-size: 1rem;
        margin-top: 10px;
        text-align: center;
`;

export const MaterialHead = styled.h1`
  margin-bottom: 50px;
  font-size: 1.5em;
  text-align: center;
  color: #EBCACA;
  @media screen and (max-width: 740px){
    //   margin-top: 200px;
  }
`;
