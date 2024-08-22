import styled from 'styled-components';

export const CardMovie = styled.div`
  position: relative;
  width: 31%;
  height: 200px;
  color: #FFFFFF;
  overflow: hidden; /* Garante que o conteúdo não ultrapasse o card */
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 100%; /* Ajuste para cobrir o card inteiro */
  object-fit: cover; /* Garante que a imagem cubra a área sem distorcer */
`;

export const CardOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* Fundo escuro para melhorar a legibilidade */
  pointer-events: none; /* Permite que eventos de clique passem através do overlay */
`;

export const CardContent = styled.div`
  position: absolute;
  bottom: 5%;
  left: 5%;
  width: 70%;
  color: #FFFFFF;
  padding: 10px;
  box-sizing: border-box;
  z-index: 1; /* Garante que o conteúdo fique sobre o overlay */
`;

export const CardTitle = styled.h3`
  margin: 0;
  padding-bottom: 20px;
`;

export const CardInfo = styled.p`
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 0;
  padding-bottom: 20px;
`;

