import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-color: #121212;
  color: #FFFFFF;
  overflow-x: hidden;
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
`;

export const CardImage = styled.img`
  width: 30%;
  height: 100%; /* Ajuste para cobrir o card inteiro */
  object-fit: cover; /* Garante que a imagem cubra a área sem distorcer */
  border-radius: 10px;
`;

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
`
export const Info = styled.div`
  display: flex;
  width: 96%;
  height: 200px;
  margin-left: 24px;
  margin-right: 24px;
  border-radius: 10px;
`;

export const Detail = styled.div`
  display: flex;
  flex-direction: column;
  width: 65%;
  padding-top: 30px;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 28px;
  font-weight: bold;
  color: #FFFFFF;
  width: 100%;
  margin-bottom: -0.2em;
  gap: 20px
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
`;

export const SubContainerCelebrity = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 250px;
  color: #FFFFFF;
  gap: 15px;
`;