import styled from "styled-components";

interface CoverProps {
  imageUrl: string;
}

export const Wrapper = styled.div``;

export const Container = styled.div<CoverProps>`
  position: relative;
  width: 133px;
  height: 215px;
  background-image: ${({ imageUrl }) => `url("${imageUrl}")`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 1.125rem;
  cursor: pointer;
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
