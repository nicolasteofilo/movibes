import { PageTemplate } from "../../templates/Page";

import { useHome } from "./useHome";
import { MoviesSection } from "../../components/MoviesSection";
import { useTheme } from "styled-components";

export function Home() {
  const {
    popularMovies,
    topRatedMovies,
    isLoadingPopularMovies,
    isLoadingtopRatedMovies,
  } = useHome();
  const theme = useTheme();

  return (
    <PageTemplate>
      <MoviesSection
        movies={popularMovies}
        title="Populares"
        mB={theme.spacings.medium}
        isLoading={isLoadingPopularMovies}
      />
      <MoviesSection
        movies={topRatedMovies}
        title="Melhores avaliados"
        isLoading={isLoadingtopRatedMovies}
      />
    </PageTemplate>
  );
}
