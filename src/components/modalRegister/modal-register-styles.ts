import styled from 'styled-components';

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
  height: 731px;
  padding: 3em;
  border-radius: 10px;
  text-align: center;
  gap: 1em;
  color: #FFFFFF;
  position: relative;

  @media (max-width: 768px) {
    width: 70%;
  }
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

  @media (max-width: 768px) {
    position: absolute;
    margin-top: 7em;
  }
`

export const Title = styled.h1`
  color: #FFFFFF;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 24px;
    margin-bottom: 1em;
    margin-top: 2em;
  }
`

export const SubTitle = styled.h4`
  color: #858585;
  font-weight: lighter;
  margin: 0;
  margin-bottom: 2em;
  
  @media (max-width: 768px) {
    display: none;
  }
`

export const SubTitleBotton = styled.h4`
  color: #858585;
  font-weight: lighter;
  margin: 0;
  margin-bottom: 2em;

  @media (max-width: 768px) {
    margin-top: -1.8em;
  }
`

export const FormContainer = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: -1em;
  margin-top: -1em;
`

export const Label = styled.label`
  color: #FFFFFF;
  display: flex;
  padding: 10px;

  @media (max-width: 768px) {
    margin-top: 0%.5;
  }
`

export const Input = styled.input`
  width: 100%;
  height: 45px;
  padding-left: 15px;
  border-radius: 20px;
  margin-bottom: 1em;
  margin-left: 1em;
  background-color: #232323;
  border: none;
  color: #FFFFFF;

  &::placeholder {
    display: flex;
    align-items: center;
    color: #FFFFFF;
  }
`

export const ConfirmeButton = styled.button`
  left: 16px;
  width: 100%;
  height: 50px;
  margin-left: 1em;
  border-radius: 12px;
  margin-top: 4.5em;
  margin-bottom: 4em;
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

  @media (max-width: 768px) {
    margin-top: 1em;
  }
`;