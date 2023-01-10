import { useLocation } from "react-router-dom";

import { Container, ContentContainer } from "./styles";

import { Sidebar } from "../../components/Sidebar";
import { Header } from "../../components/Header";

interface PageTemplateProps {
  children: React.ReactNode;
}

export function PageTemplate({ children }: PageTemplateProps) {
  const location = useLocation();

  return (
    <>
      <Container>
        <ContentContainer>
          <Header
            user={{
              name: "Nicolas Teófilo",
              imageUrl: "https://github.com/nicolasteofilo.png",
            }}
          />
          {children}
        </ContentContainer>
        <Sidebar currentLocation={location.pathname} />
      </Container>
    </>
  );
}
