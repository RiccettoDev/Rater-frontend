import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-color: #121212;
  color: #FFFFFF;
  overflow-x: hidden;

  @media (max-width: 768px) {
    position: relative;
  }
`;

export const Profile = styled.div`
  display: flex;
  width: 92%;
  height: 600px;
  margin-left: 24px;
  margin-right: 24px;
  margin-top: -1em;
  border-radius: 10px;
  padding: 24px;
  position: relative;

  @media (max-width: 768px) {
    padding: 0;
    width: 90%;
    margin-top: 10em;
    position: absolute;
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 100%; /* Ajuste para cobrir o card inteiro */
  object-fit: cover; /* Garante que a imagem cubra a área sem distorcer */
  border-radius: 10px;
`;

export const CardOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3); /* Fundo escuro para melhorar a legibilidade */
  pointer-events: none; /* Permite que eventos de clique passem através do overlay */
`;

export const CardTrailer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  color: #FFFFFF;
  width: 200px;
  height: 40px;
  border-radius: 10px;
  gap: 10px;
  background: rgba(0, 0, 0, 0.1); /* Fundo escuro para melhorar a legibilidade */
  position: absolute;
  bottom: 2em;
  left: 2em;
  
  &:hover {
    background: rgba(0, 0, 0, 0.3);
    transform: scale(1.05);
    cursor: pointer;
  }

  @media (max-width: 768px) {
    display: none;
  }
`

export const Vote = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  color: #FFFFFF;
  width: 200px;
  height: 40px;
  border-radius: 10px;
  gap: 10px;
  background: rgba(0, 0, 0, 0.5); /* Fundo escuro para melhorar a legibilidade */
  position: absolute;
  bottom: 2em;
  right: 2em;
  
  &:hover {
    background: rgba(0, 0, 0, 0.3);
    transform: scale(1.05);
    cursor: pointer;
  }

  @media (max-width: 768px) {
    width: 150px;
  }
`
export const Info = styled.div`
  display: flex;
  width: 96%;
  height: 200px;
  margin-left: 24px;
  margin-right: 24px;
  border-radius: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    margin-top: 48em;
  }
`;

export const Detail = styled.div`
  display: flex;
  flex-direction: column;
  width: 65%;
  padding-top: 30px;
  
  @media (max-width: 768px) {
    width: 93%;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 28px;
  font-weight: bold;
  color: #FFFFFF;
  width: 100%;
  margin-bottom: -0.2em;
  gap: 20px;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const TitleContainer2 = styled.h4`
  color: #858585;
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const TitleContainer3 = styled.h5`
  color: #c6c6c6;
  margin-bottom: -0.2em;
`;

export const Detail2 = styled.div`
  color: #FFFFFF;
  width: 40%;
  display: flex;
  padding: 5px;
  gap: 5px;
  margin-top: 0.6em;

  @media (max-width: 768px) {
    width: 93%;
  }
`;

export const Detail3 = styled.div`
  color: #FFFFFF;
  width: 0%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 20px;
`;

export const Detail4 = styled.div`
  color: #FFFFFF;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 0.6em;
`;

export const Pip = styled.div`
  color: #FFFFFF;
  width: 4px;
  height: 50px;
  display: flex;
  flex-direction: column;
  background-color: #FFFFFF;
`;

export const TitleContainer4 = styled.div`
  color: #858585;
  display: flex;
  align-items: center;
  margin-bottom: 0.8%;
`;

export const TitleContainer5 = styled.div`
  color: #c6c6c6;
  margin-bottom: 0.8em;
`;

//----------- celebrity --------------

export const ContainerCelebrity = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 24px;
  padding-right: 24px;
  padding-bottom: 24px;
  color: #FFFFFF;

  @media (max-width: 768px) {
    position: absolute;
    margin-top: 85em;
  }
`;

export const SubContainerCelebrity = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 250px;
  color: #FFFFFF;
  gap: 15px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

//---------- ContainerRecommended

export const ContainerRecommended = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 24px;
  padding-right: 24px;
  padding-bottom: 24px;
  color: #FFFFFF;

  @media (max-width: 768px) {
    position: absolute;
    margin-top: 105em;
    width: 90%;
  }
`;

export const SubContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 250px;
  color: #FFFFFF;
  gap: 15px;

  @media (max-width: 768px) {
    flex-direction: column;
    height: 100%;
  }
`;

//------------ Modal

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #121212;
  width: 550px;
  height: 240px;
  padding: 2em;
  border-radius: 10px;
  text-align: center;
  gap: 1em;
  color: #FFFFFF;
  position: relative;

  @media (max-width: 768px) {
    width: 70%;
  }
`;

export const ContainerStars = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 2em;
  margin-top: 1em;
  color: #858585;
  gap: 10px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  color: #FFFFFF;
  width: 200px;
  padding: 1em;
  border-radius: 10px;
  background-color: #232323;
  
  &:hover {
    background: rgba(0, 0, 0, 0.3);
    transform: scale(1.05);
    cursor: pointer;
  }
`

export const CloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  color: #FFFFFF;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #232323;
  position: absolute;
  top: 1em;
  right: 1.5em;
  
  &:hover {
    background: rgba(0, 0, 0, 0.3);
    transform: scale(1.05);
    cursor: pointer;
  }
`

export const TitleModal = styled.div`
  display: flex;
  align-items: center;
  font-size: 28px;
  font-weight: bold;
  color: #FFFFFF;
`;

export const Message = styled.p`
  display: flex;
  align-items: center;
  font-weight: bold;
  color: #FFFF00;
  margin-bottom: 1em;
`;

//-------------------- Gamb ------------

export const DivFooter = styled.p`
  @media (max-width: 768px) {
    position: absolute;
    margin-top: 177em;
    margin-left: 6em;
  }
`;