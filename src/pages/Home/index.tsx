import { PageTemplate } from "../../templates/Page";

import { useHome } from "./useHome";
import { MoviesSection } from "../../components/MoviesSection";

export function Home() {
  const { popularMovies } = useHome();

  return (
    <PageTemplate>
      <MoviesSection movies={popularMovies} title="Populares" />
    </PageTemplate>
  );
}
