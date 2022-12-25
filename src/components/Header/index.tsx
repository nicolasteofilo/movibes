import { Container, SearchContainer, InputSearch, InfosContainer } from "./styles";

export function Header() {
  return (
    <Container>
      <SearchContainer>
        <InputSearch placeholder="Pesquise por filmes, séries..." />
      </SearchContainer>

      <InfosContainer>
        <p>infos</p>
      </InfosContainer>
    </Container>
  )
}
