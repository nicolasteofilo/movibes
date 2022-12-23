import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
  display: flex;
  height: 100vh;

  ${media.lessThan("medium")`
    flex-direction: column-reverse;
  `}
`;

export const ContentContainer = styled.div`
  ${media.lessThan("medium")`
    position: absolute;
    top: 0;
  `}
`;
