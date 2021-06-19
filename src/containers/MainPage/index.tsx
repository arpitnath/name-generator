import * as React from "react";
import { PageWrapper, PageContentBlock } from "./styles";
import SpinnerLogo from "../../components/SpinnerLogo";
import logo from "../../assets/images/logo.svg";
import { animationsToggleRotationAction } from "../../actions/animations.actions";
import { useDispatch, useSelector } from "react-redux";
import StylishButton from "../../components/StylishButton";

const MainPage: React.FC = () => {
  const dispatch = useDispatch();

  const isRotating: boolean = useSelector(
    (state: any) => state.animationsState.isRotating
  );

  async function onToggleRotationClicked() {
    dispatch(animationsToggleRotationAction(isRotating));
  }

  return (
    <PageWrapper>
      <PageContentBlock>
        <SpinnerLogo logo={logo} />
        <StylishButton
          text={"Toggle Rotation"}
          onClick={onToggleRotationClicked}
        />
      </PageContentBlock>
    </PageWrapper>
  );
};

export default MainPage;