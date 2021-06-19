import * as React from "react";
import { SpinnerLogoWrapper, SpinnerLogoImage } from "./styles";
import { SpinnerLogoProps } from "./interfaces";

const SpinnerLogo: React.FC<SpinnerLogoProps> = ({ isSpinning, logo }) => {
  return (
    <SpinnerLogoWrapper>
      <SpinnerLogoImage isSpinning={isSpinning} src={logo} />
    </SpinnerLogoWrapper>
  );
};

export default SpinnerLogo;
