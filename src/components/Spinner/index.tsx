import { Container } from "./styles";

export function Spinner() {
  return (
    <Container>
      <span className="loader" aria-label="loader"></span>
    </Container>
  );
}
