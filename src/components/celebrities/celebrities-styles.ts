import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 24px;
  padding-right: 24px;
  padding-bottom: 24px;
  color: #FFFFFF;

  @media (max-width: 768px) {
    width: 90%;
    display: flex;
    margin-top: 1em;
  }
`;

export const SubContainer = styled.div`
  display: flex;
  width: 100%;
  height: 250px;
  color: #FFFFFF;
  gap: 15px;

  @media (max-width: 768px) {
    flex-direction: column;
    height: 600px;
    margin-top: 2em;
  }
`;