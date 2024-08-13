import { CelebritySection } from "../../components/celebritySection";
import { Header } from "../../components/header";
import { Container } from "./celebrity-detail-styles";


export function CelebrityDetail() {
  return (
    <Container>
      <Header />
      <CelebritySection />
    </Container>
  )
}