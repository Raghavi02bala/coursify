import styled from 'styled-components';

export const TestimonialContainer = styled.div`
    background: #031C32;
    color: #EBCACA;
    font-family: 'Chilanka', cursive;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    // padding: 0 30px;
    height: 500px;
    position: relative;
    z-index: 1; 
    @media screen and (max-width: 740px){
        height: 1500px;   
    }
`;

export const TestimonialWrapper = styled.div`
    max-width: 5px;
    display: grid;
    margin-left: -1000px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 25px;
    @media screen and (max-width: 740px){
        margin-top: -240px;
        margin-left: -270px;
        grid-template-columns: 1fr ;
        padding: 0 20px;
    }
`;
export const TestimonialCard = styled.div`
    background: #B3365B;
    border-radius: 10px;
    max-height: 340px;
    padding: 30px;
    transcition: all 0.2 ease-in-out;
`;

export const TestimonialIcon = styled.img`
    height: 160px;
    width: 160px;
    margin-top: -60px;
    margin-bottom: 10px;
`;

export const TestimonialP = styled.p`
    font-size: 1rem;
    margin-top: 10px;
    text-align: center;
`;