import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding-left: 24px;
  gap: 20px;
  width: 100%;
  height: 750px;
  color: #FFFFFF;

  @media (max-width: 768px) {
    flex-direction: column;
    height: 1080px;
    position: relative;
  }
`;

export const ContainerOthers = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  color: #FFFFFF;
  gap: 15px;

  @media (max-width: 768px) {
    margin-top: 33em;
    width: 90%;
    height: 500px;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: #FFFFFF;
  margin-top: -1em;
  margin-bottom: -1em;

  @media (max-width: 768px) {
    margin-bottom: 1em;
    margin-top: 1em;
  }
`;