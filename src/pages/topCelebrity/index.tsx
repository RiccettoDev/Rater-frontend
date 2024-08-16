import { useEffect, useState } from "react";
import { Header } from "../../components/header";
import { Container, MoviesContainer, Title } from "./top-celebrity-styles";
import { SmallCardTopCelebrity } from "../../components/smallCardTopCelebrity";

interface Person {
  id: number;
  name: string;
  profile_path: string | null;
  popularity: number;
}

const apiKey = import.meta.env.VITE_API_KEY;
const apiPerson = import.meta.env.VITE_API_PERSON;
const imageBaseUrl = import.meta.env.VITE_IMAGE_BASE_URL;

export function TopCelebrity() {
  const [topCelebrities, setTopCelebrities] = useState<Person[]>([]);

  useEffect(() => {
    const topCelebrityURL = `${apiPerson}popular?api_key=${apiKey}&language=pt-br`;
    const getTopCelebrities = async () => {
      try {
        const res = await fetch(topCelebrityURL);
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await res.json();
        setTopCelebrities(data.results.slice(0, 20)); // Pegue os 20 primeiros atores
      } catch (error) {
        console.error("Error fetching celebrities:", error);
      }
    };
    getTopCelebrities();
  }, []);

  return (
    <Container>
      <Header />
      <Title>| Top Atores |</Title>
      <MoviesContainer>
        {topCelebrities.map(person => (
          <SmallCardTopCelebrity
            key={person.id}
            movie={{
              id: person.id,
              title: person.name,
              poster_path: person.profile_path || '',
              vote_average: '',
              overview: '',
              release_date: '',
              popularity: person.popularity.toString(),
            }}
            imageBaseUrl={imageBaseUrl}
          />
        ))}
      </MoviesContainer>
    </Container>
  );
}
