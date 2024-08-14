import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 24px;
  height: 96px;
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
  width: 477px;
  height: 545px;
  padding: 2em;
  border-radius: 10px;
  text-align: center;
  gap: 1em;
  color: #FFFFFF;
  position: relative;
`;

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

export const Title = styled.h1`
  color: #FFFFFF;
  margin: 0;
`

export const SubTitle = styled.h4`
  color: #858585;
  font-weight: lighter;
  margin: 0;
`
export const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 40%;
`

export const Label = styled.label`
  color: #FFFFFF;
  display: flex;
  padding: 10px;
`

export const Input = styled.input`
  width: 100%;
  height: 45px;
  padding-left: 15px;
  border-radius: 20px;
  margin-bottom: 1em;
  background-color: #232323;
  border: none;
  color: #FFFFFF;

  &::placeholder {
    display: flex;
    align-items: center;
    color: #FFFFFF;
  }
`

export const LoginButton2 = styled.button`
  left: 16px;
  width: 90%;
  height: 50px;
  margin-left: 1.5em;
  border-radius: 12px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #232323;
  color: #EEEEEE;
  cursor: pointer;

  &:hover {
    background: rgba(0, 0, 0, 0.3);
    transform: scale(1.05);
    cursor: pointer;
  }
`;