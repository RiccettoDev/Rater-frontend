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
  }
`;

export const Works = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 65%;
  color: #FFFFFF;
  gap: 15px;
`;

export const ContainerOthers = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  color: #FFFFFF;
  gap: 15px;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const ProfileImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50%;
  padding: 3px ;
  background-color: #3A3A3A;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.8);
  border-radius: 15px;
  gap: 15px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    object-fit: cover;
  }
`;

export const TitleContainer = styled.h2`
  color: #FFFFFF;
  width: 100%;
  margin-top: -0.3em;
  margin-bottom: -0.6em;
`;

export const TitleContainer2 = styled.h3`
  color: #858585;
  margin-bottom: -1.5em;
`;

export const TitleContainer3 = styled.h5`
  color: #c6c6c6;
  margin-bottom: -0.8em;
`;

export const Button = styled.button`
  width: 128px;
  height: 40px;
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