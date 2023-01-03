import { MovieCard } from "../../components/MovieCard";
import { PageTemplate } from "../../templates/Page";

export function Home() {
  return (
    <PageTemplate>
      <MovieCard name="Top Gun: Maverick" rate={8.4} coverUrl="https://upload.wikimedia.org/wikipedia/pt/thumb/d/d2/Top_Gun_Maverick.jpg/250px-Top_Gun_Maverick.jpg" />
    </PageTemplate>
  )
}
