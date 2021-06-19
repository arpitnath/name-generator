import { Dispatch } from "redux";
import { all, fork } from "redux-saga/effects";

import api from "../services";
import { BaseAction } from "../actions/index";
import { toggleRotationSaga } from "./toggleRotation.saga";

// Register all your watchers
export const rootSaga = function* root(dispatch: Dispatch<BaseAction>) {
  yield all([fork(toggleRotationSaga, api, dispatch)]);
};
