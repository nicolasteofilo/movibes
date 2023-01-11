import { Container } from "./styles";

interface HeadingProps {
  size?: "small" | "medium" | "large";
  title: string;
}

export function Heading({ size, title }: HeadingProps) {
  return <Container>{title}</Container>;
}
