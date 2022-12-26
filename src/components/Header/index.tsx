import { useTheme } from "styled-components";
import { Container, InfosContainer } from "./styles";

import { TextField } from "../TextField";
import { Avatar } from "../Avatar";

import { SearchImg } from "../../assets/icons/search";

interface HeaderProps {
  user: {
    name: string;
    imageUrl: string;
  }
}

export function Header({ user }: HeaderProps) {
  const theme = useTheme();

  return (
    <Container>
      <TextField
        icon={<SearchImg fill={theme.colors.gray[500]} />}
        placeholder="Pesquise por filmes, séries..."
      />

      <InfosContainer>
        <Avatar {...user} />
      </InfosContainer>
    </Container>
  )
}
