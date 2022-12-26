import { Container, Picture } from "./styles";

interface AvatarProps {
  imageUrl: string;
  name: string;
}

export function Avatar({ imageUrl, name }: AvatarProps) {
  return (
    <Container>
      <Picture src={imageUrl} alt={name} title={name} />
    </Container>
  )
}
