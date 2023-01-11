import styled from "styled-components";
import media from "styled-media-query";

export const MoviesRow = styled.div`
  display: flex;
  overflow-x: auto;
  width: 1100px;

  div + div {
    margin-left: ${({ theme }) => theme.spacings.xsmall};
  }

  /* ${media.lessThan("large")`
    width: 450px;
    grid-template-columns: repeat(3, 2fr);
  `}

  ${media.lessThan("medium")`
    width: 300px;
    grid-template-columns: repeat(2, 2fr);
  `} */
`;
