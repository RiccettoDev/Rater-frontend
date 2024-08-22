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

export const MoviesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  width: 100%;
  padding: 24px;

  @media (max-width: 768px) {
    position: absolute;
    top: 13em;
  }
`;

export const Title = styled.h1`
  color: #FFFFFF;
  margin: 0;
  margin-left: 16em;

  @media (max-width: 768px) {
    position: absolute;
    right: -4em;
    margin-top: 8.5em;
    font-size: 20px;
    width: 100%;
  }
`;

//----------------- Gamb---------------

export const DivFooter = styled.div`

  @media (max-width: 768px) {
    position: absolute;
    top: 110em;
    margin-left: 6em;
  }
`;