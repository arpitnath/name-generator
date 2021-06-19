import styled from "styled-components";

export const SpinnerLogoWrapper = styled.div`
  display: grid;
`;

export const SpinnerLogoImage = styled.img<{ isSpinning: boolean }>`
  width: 7rem;
  height: 7rem;

  animation: ${(props) =>
    props.isSpinning ? `spin 3s ease-in-out infinite;` : ``};

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
