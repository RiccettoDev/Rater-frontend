import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1440px;
  height: 96px;
  padding: 24px;
  color: #FFFFFF;
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`

export const SectionContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 337px;
  height: 48px;
  border-radius: 50px;
  background-color: #191919;
`;

export const Search = styled.input`
  width: 100%;
  height: 100%;
  padding: 0 20px 0 50px;
  border: none;
  border-radius: 50px;
  background-color: transparent;
  color: #FFFFFF;
  font-size: 16px;

  ::placeholder {
    color: #313131;
  }
`;

export const SearchButton = styled.button`
  left: 16px;
  width: 40px;
  height: 40px;
  border-radius: 99px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background-color: #232323;
  color: #EEEEEE;
  cursor: pointer;
`;

export const LoginButton = styled.button`
  left: 16px;
  width: 128px;
  height: 40px;
  border-radius: 12px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 55px, 12px, 55px, 12px;
  gap: 8px;
  background-color: #232323;
  color: #EEEEEE;
  cursor: pointer;
`;