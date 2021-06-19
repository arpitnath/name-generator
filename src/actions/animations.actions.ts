import { BaseAction } from ".";

export const AnimationsActionIds = {
  UPDATE_IS_ROTATING: "ANIMATIONS_UPDATE_IS_ROTATING",
  TOGGLE_ROTATION: "ANIMATIONS_TOGGLE_ROTATION",
};

export const animationsUpdateIsRotatingAction: (
  isRotating: boolean
) => BaseAction = (isRotating) => ({
  type: AnimationsActionIds.UPDATE_IS_ROTATING,
  payload: { isRotating },
});

export const animationsToggleRotationAction: (
  isRotating: boolean
) => BaseAction = (isRotating) => ({
  type: AnimationsActionIds.TOGGLE_ROTATION,
  payload: { isRotating },
});
