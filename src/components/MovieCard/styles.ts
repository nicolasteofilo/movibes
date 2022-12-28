import styled from "styled-components";

interface CoverProps {
  imageUrl: string;
}

export const Container = styled.div<CoverProps>`
  position: relative;
  width: 200px;
  height: 300px;
  background-image: ${({ imageUrl }) => `url("${imageUrl}")`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 1.125rem;

  &[title]:hover::after {
    content: attr(title);
    background-color: ${({ theme }) => theme.colors.gray[700]};
    font-weight: ${({ theme }) => theme.font.light};
    font-size: ${({ theme }) => theme.font.sizes.xsmall};
    border-radius: 20px;
    padding: ${({ theme }) => theme.spacings.xxsmall};

    position: absolute;
    left: 40px;
    top: 260px;
  }
`;

export const RateContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: end;
  font-size: ${({ theme }) => theme.font.sizes.xsmall};
  font-weight: ${({ theme }) => theme.font.semi};
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
`;

export const Rate = styled.span`
  width: 44px;
  background: rgba(255, 255, 255, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.gray[600]};
  border-radius: 0 1.25rem 0 1.25rem;

  > svg {
    width: 15px;
    margin-right: 5px;
  }
`;
