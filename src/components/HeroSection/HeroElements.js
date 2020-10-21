import styled from 'styled-components';

export const HeroContainer = styled.div`
    background: #031C32;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 600px;
    position: relative;
    z-index: 1; 
    @media screen and (max-width: 740px){
        height: 700px;   
    }
`;

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

export const VideoBg = styled.video`
    margin-top: -100px;
    margin-left: 520px;
    width: 700px;
    height: 800px;
    background: #031C32;
    @media screen and (max-width: 740px) {
        position: absolute;
        right: 0;
        top: 20;
    }
`;

export const HeroContent = styled.div`
    display: flex;
    margin-right: -380px;
    justify-content: center;
    font-family: 'Chilanka', cursive;
`;

export const HeroH1 = styled.h1`
  font-size: 1.5em;
  margin-top: -200px;  
  text-align: center;
  color: #EBCACA;

  @media screen and (max-width: 740px) {
    position: absolute;
    margin-right: -600px;
    margin-top: 50px;
}
`;

export const Herop = styled.p`
  font-size: 1em;
  margin-top: -130px;
  display: flex;
  margin-left: -300px;
  text-align: center;
  color: #EBCACA;

  @media screen and (max-width: 740px) {
    position: absolute;
    margin-right: -900px;
    margin-top: 100px;
    font-size: 0.8em;
}
`;

export const Input = styled.input` 
    margin-right: 730px;
    height: 30px;
    width: 300px;
    padding: 10px;
    border-radius: 5px;

`;

export const Icon = styled.div`
    position: absolute; 
    margin-right: 530px; 
`;
  
export const PlayTab = styled.div`
    background: #B3365B;
    color: #EBCACA;
    align-items: center;
    padding: 15px 40px;
    height: 50px;
    border-radius: 50px;
    width: 300px;
    margin-top: 300px;
    margin-right: 800px;
    position: absolute;
    @media screen and (max-width: 740px) {
        position: absolute;
        font-size: 0.8rem;
        margin-right: -10px;
        margin-top: 450px;
    }  
`;

// export const Icon1 = styled.div`
//     margin-right: -25px;
//     color: #EBCACA;
// `;