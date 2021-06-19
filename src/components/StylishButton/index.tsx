import React, { FC } from "react";
import { StylishButtonContainer, StylishButtonA } from "./styles";
import { StylishButtonProps } from "./interfaces";

const StylishButton: FC<StylishButtonProps> = ({ onClick, text }) => {
  return (
    <StylishButtonContainer>
      <StylishButtonA onClick={onClick}>{text}</StylishButtonA>
    </StylishButtonContainer>
  );
};

export default StylishButton;
