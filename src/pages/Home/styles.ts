import styled from "styled-components";
import media from "styled-media-query";

export const MoviesGrid = styled.div`
  display: grid;
  width: 750px;
  grid-template-columns: repeat(5, 2fr);
  grid-column-gap: 0px;
  grid-row-gap: 15px;

  ${media.lessThan("large")`
    width: 450px;
    grid-template-columns: repeat(3, 2fr);
  `}

  ${media.lessThan("medium")`
    width: 300px;
    grid-template-columns: repeat(2, 2fr);
  `}
`;
