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

export const Title = styled.div`
  display: flex;
  align-items: baseline;
  width: 100%;
  color: #FFFFFF;
  gap: 15px;
`;

export const Text = styled.p`
  font-size: 14px;
  color: #858585;
  display: none;
`;

export const Span = styled.span`
font-size: 16px;
  font-weight: bold;
  color: #C6C6C6;
`;

