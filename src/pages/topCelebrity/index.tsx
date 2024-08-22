import { useEffect, useState } from "react";
import { Header } from "../../components/header";
import { Container, DivFooter, MoviesContainer, Title } from "./top-celebrity-styles";
import { SmallCardTopCelebrity } from "../../components/smallCardTopCelebrity";
import { Footer } from "../../components/footer";

interface Celebrity {
  id: number;
  name: string;
  profile_path: string | null;
  popularity: string;
}

const apiKey = import.meta.env.VITE_API_KEY;
const apiPerson = import.meta.env.VITE_API_PERSON;
const imageBaseUrl = import.meta.env.VITE_IMAGE_BASE_URL;

export function TopCelebrity() {
  const [celebrities, setCelebrities] = useState<Celebrity[]>([]);

  useEffect(() => {
    const topCelebritiesURL = `${apiPerson}popular?api_key=${apiKey}&language=pt-br`;
    const getTopCelebrities = async () => {
      try {
        const res = await fetch(topCelebritiesURL);
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await res.json();
        setCelebrities(data.results.slice(0, 20)); // Pega as 20 primeiras celebridades
      } catch (error) {
        console.error("Error fetching celebrities:", error);
      }
    };
    getTopCelebrities();
  }, []);

  return (
    <Container>
      <Header />
      <Title>| Top Celebridades |</Title>
      <MoviesContainer>
        {celebrities.map(celebrity => (
          <SmallCardTopCelebrity
            key={celebrity.id}
            celebrity={celebrity}
            imageBaseUrl={imageBaseUrl}
          />
        ))}
      </MoviesContainer>
      <DivFooter>
        <Footer />
      </DivFooter>
    </Container>
  );
}
