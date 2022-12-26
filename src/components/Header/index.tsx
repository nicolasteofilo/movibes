import { useTheme } from "styled-components";
import { Container, InfosContainer } from "./styles";
import { TextField } from "../TextField";

import { SearchImg } from "../../assets/icons/search";

export function Header() {
  const theme = useTheme();

  return (
    <Container>
      <TextField
        icon={<SearchImg fill={theme.colors.gray[500]} />}
        placeholder="Pesquise por filmes, séries..."
      />

      <InfosContainer>
        <p>infos</p>
      </InfosContainer>
    </Container>
  )
}
