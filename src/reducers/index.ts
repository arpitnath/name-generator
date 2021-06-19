import { combineReducers } from "redux";
import { AnimationsState, animationsReducer } from "./animations.reducer";

export interface AppState {
  animationsState: AnimationsState;
}

export const reducers = combineReducers<AppState>({
  animationsState: animationsReducer,
});
