import { useTheme } from "styled-components";
import { Container, InfosContainer } from "./styles";

import { TextField } from "../TextField";
import { Avatar } from "../Avatar";

import { SearchImg } from "../../assets/icons/search";
import { useSearchStore } from "../../store/search";

interface HeaderProps {
  user: {
    name: string;
    imageUrl: string;
  };
}

export function Header({ user }: HeaderProps) {
  const { searchTerm, updateSearchTerm } = useSearchStore();
  const theme = useTheme();

  return (
    <Container>
      <TextField
        icon={<SearchImg fill={theme.colors.gray[500]} />}
        placeholder="Pesquise por filmes, séries..."
        onChange={(event) => updateSearchTerm(event.target.value)}
        value={searchTerm}
      />

      <InfosContainer>
        <Avatar {...user} />
      </InfosContainer>
    </Container>
  );
}
