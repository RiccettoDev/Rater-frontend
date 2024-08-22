import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-color: #121212;
  color: #FFFFFF;
  box-sizing: border-box;
`;

export const MoviesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding-left: 24px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding-left: 2.5em;
  }
`;

export const MovieCard = styled.div`
  position: relative;
  width: 220px;
  text-align: center;
  color: #FFFFFF;
  margin-bottom: 10px;

  img {
    width: 100%;
    border-radius: 8px;
  }

  .no-image {
    width: 100%;
    height: 330px; /* Ajuste de acordo com a altura média das imagens */
    background-color: #c6c6c6;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    color: black;
    font-weight: bold;
    font-size: 16px;
  }

  @media (max-width: 768px) {
    width: 80%;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);/* Escurece o fundo para melhor visibilidade do texto */
  color: #FFFFFF;
  padding: 8px;
  border-radius: 8px;
  box-sizing: border-box;
`;

export const Info = styled.div`
  p {
    margin: 4px 0;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
