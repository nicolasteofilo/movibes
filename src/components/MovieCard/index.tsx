import { StarImg } from "../../assets/icons/star";
import { Wrapper, Container, Rate, RateContainer } from "./styles";

export interface MovieCardProps {
  name: string;
  coverUrl: string;
  rate: number;
}

export function MovieCard({ name, coverUrl, rate }: MovieCardProps) {
  return (
    <Wrapper>
      <Container imageUrl={coverUrl} aria-label={name}>
        <RateContainer>
          <Rate>
            <StarImg fill="#D2AC17" aria-label="estrela" />
            {rate}
          </Rate>
        </RateContainer>
      </Container>
    </Wrapper>
  );
}
