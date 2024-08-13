import { useEffect, useState } from "react";
import { Container, SubContainer } from "./celebrities-styles";
import { CardCelebrities } from "./cardCelebritie";

const apiKey = import.meta.env.VITE_API_KEY;
const apiPerson = import.meta.env.VITE_API_PERSON;
const imageBaseUrl = import.meta.env.VITE_IMAGE_BASE_URL;

interface Celebrity {
  id: number;
  name: string;
  profile_path: string;
  popularity: number;
}

export function Celebrities() {
  const [topCelebrities, setTopCelebrities] = useState<Celebrity[]>([]);

  const getTopCelebrities = async (url: string) => {
    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await res.json();
      setTopCelebrities(data.results);
    } catch (error) {
      console.error('Error fetching celebrities:', error);
    }
  };

  useEffect(() => {
    const topCelebrityURL = `${apiPerson}popular?api_key=${apiKey}&language=pt-br`;
    getTopCelebrities(topCelebrityURL);
  }, []);

  return (
    <Container>
      <h3>| Celebridades</h3>
      <SubContainer>
        {topCelebrities.slice(4, 8).map(celebrity => (
          <CardCelebrities key={celebrity.id} celebrity={celebrity} imageBaseUrl={imageBaseUrl} />
        ))}
      </SubContainer>
    </Container>
  )
}