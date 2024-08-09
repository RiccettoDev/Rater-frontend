import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #121212;
  color: #FFFFFF;
`;

export function App() {

  return (
    <Container>
      <h1>Hello Rater!</h1>
    </Container>
  )
}

