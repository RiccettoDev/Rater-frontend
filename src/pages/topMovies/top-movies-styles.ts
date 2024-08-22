import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-color: #121212;
  color: #FFFFFF;
  overflow-x: hidden;
`;

export const MoviesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  width: 100%;
  padding: 24px;
`;

export const Title = styled.h1`
  color: #FFFFFF;
  margin: 0;
  margin-left: 16em;

  @media (max-width: 768px) {
    margin-left: 2.5em;
    padding: 0;
  }
`;