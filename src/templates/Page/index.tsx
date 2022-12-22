import { useLocation } from "react-router-dom";

import { Container } from "./styles";

import { Sidebar } from "../../components/Sidebar";

interface PageTemplateProps {
  children: React.ReactNode;
}

export function PageTemplate({ children }: PageTemplateProps) {
  const location = useLocation();

  return (
    <Container>
      <Sidebar currentLocation={location.pathname} />
      {children}
    </Container>
  )
}
