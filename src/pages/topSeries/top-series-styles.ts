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
`;

export const Title = styled.h1`
  color: #FFFFFF;
  margin: 0;
  margin-left: 16em;

  @media (max-width: 768px) {
    position: absolute;
    width: 100%;
    right: -2.5em;
    top: 5.5em;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;

  @media (max-width: 768px) {
    margin-top: 3em;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  max-width: 600px;
  padding: 10px;
  font-size: 16px;
  border-radius: 15px;
  background-color: #1E1E1E;
  color: #FFFFFF;
  margin-top: 24px;
  margin-bottom: 24px;

  ::placeholder {
    color: #FFFFFF;
  }

  @media (max-width: 768px) {
    width: 70%;
  }
`;

export const SearchButton = styled.button`
  left: 16px;
  width: 128px;
  height: 40px;
  border-radius: 12px;
  margin-right: 48px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 55px, 12px, 55px, 12px;
  gap: 8px;
  background-color: #232323;
  color: #EEEEEE;
  cursor: pointer;

  &:hover {
    background: rgba(0, 0, 0, 0.3);
    transform: scale(1.05);
    cursor: pointer;
  }

  @media (max-width: 768px) {
    margin-left: 4em;
  }
`;
