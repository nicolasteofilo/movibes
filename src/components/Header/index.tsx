import { useTheme } from "styled-components";
import { Container, InfosContainer } from "./styles";

import { TextField } from "../TextField";
import { Avatar } from "../Avatar";

import { SearchImg } from "../../assets/icons/search";
import { useSearch } from "../../hooks/useSearch";

interface HeaderProps {
  user: {
    name: string;
    imageUrl: string;
  };
}

export function Header({ user }: HeaderProps) {
  const {  search, setSearch } = useSearch();
  const theme = useTheme();

  return (
    <Container>
      <TextField
        icon={<SearchImg fill={theme.colors.gray[500]} />}
        placeholder="Pesquise por filmes, séries..."
        onChange={(event) => setSearch(event.target.value)}
        value={search}
      />

      <InfosContainer>
        <Avatar {...user} />
      </InfosContainer>
    </Container>
  );
}
