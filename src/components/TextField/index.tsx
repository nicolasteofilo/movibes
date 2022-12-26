import { InputHTMLAttributes } from "react";

import { Container, InputContainer, Input, Icon } from "./styles";

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  icon: React.ReactNode;
}

export function TextField({ icon, ...props }: TextFieldProps) {
  return (
    <Container>
      <Icon>{icon}</Icon>
      <InputContainer>
        <Input
          type="text"
          {...props}
        />
      </InputContainer>
    </Container>
  )
}
