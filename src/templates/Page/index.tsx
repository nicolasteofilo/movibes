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
    <Container>
      <Sidebar currentLocation={location.pathname} />
      <ContentContainer>
        <Header />
        {children}
      </ContentContainer>
    </Container>
  )
}
