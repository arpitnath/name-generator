import { BaseAction } from "../actions";
import { AnimationsActionIds } from "../actions/animations.actions";

export interface AnimationsState {
  isRotating: boolean;
}

const initialState: AnimationsState = {
  isRotating: false,
};

export const animationsReducer = (
  state: AnimationsState = initialState,
  action: BaseAction
): AnimationsState => {
  switch (action.type) {
    case AnimationsActionIds.UPDATE_IS_ROTATING:
      return { ...state, isRotating: action.payload.isRotating };
    default:
      return state;
  }
};
