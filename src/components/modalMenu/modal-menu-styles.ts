import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: fixed;
  width: 200px;
  height: 140px;
  border-radius: 10px;
  top: 1.8em;
  left: 48em;
  background-color: #232323;
  z-index: 5000;
  box-shadow: 0 2px 4px rgba(255, 255, 255, 0.5);
`;

export const SubContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 2em;
  padding-top: 3em;
`;

export const Title = styled.div`
  color: #FFFFFF;
  margin-bottom: 1em;
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
  right: 1em;
  
  &:hover {
    background: rgba(0, 0, 0, 0.3);
    transform: scale(1.05);
    cursor: pointer;
  }
`