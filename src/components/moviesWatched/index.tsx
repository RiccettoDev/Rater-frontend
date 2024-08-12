import { Clapperboard } from "lucide-react"
import { Container, SubContainer, Description, Login } from "./movies-watched"

export function MoviesWatched() {
  return (
    <Container>
      <h3>| Filmes Assitidos</h3>
      <SubContainer>
        <Clapperboard size={48} />
        <Description>Ops, nenhum filme avaliado ainda. </Description>
        <Description>Que tal adicionar um</Description>
        <Login>Fazer login</Login>
      </SubContainer>
    </Container>
  )
}