import styled from "styled-components";

export const Container = styled.div`
  .loader {
    width: 48px;
    height: 48px;
    border: 5px solid ${({ theme }) => theme.colors.gray[500]};
    border-bottom-color: ${({ theme }) => theme.colors.green};
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;

    @keyframes rotation {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
`;
