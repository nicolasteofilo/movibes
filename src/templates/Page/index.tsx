import { useLocation } from "react-router-dom";

import { Container, ContentContainer } from "./styles";

import { Sidebar } from "../../components/Sidebar";

interface PageTemplateProps {
  children: React.ReactNode;
}

export function PageTemplate({ children }: PageTemplateProps) {
  const location = useLocation();

  return (
    <Container>
      <Sidebar currentLocation={location.pathname} />
      <ContentContainer>
        {children}
      </ContentContainer>
    </Container>
  )
}
