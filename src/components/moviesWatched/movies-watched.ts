import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 24px;
  padding-bottom: 24px;
  color: #FFFFFF;

  @media (max-width: 768px) {
    margin-top: 1em;
  }
`;

export const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  color: #FFFFFF;
  gap: 15px;
  padding-bottom: 24px;
`;

export const Description = styled.h3`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: -1em;
`;

export const Login = styled.button`
  width: 128px;
  height: 40px;
  border-radius: 12px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2em;
  padding: 55px, 12px, 55px, 12px;
  background-color: #232323;
  color: #EEEEEE;
  cursor: pointer;
  
  &:hover {
    background: rgba(0, 0, 0, 0.3);
    transform: scale(1.05);
    cursor: pointer;
  }
`;