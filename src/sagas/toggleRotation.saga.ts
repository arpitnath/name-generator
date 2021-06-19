import { call, put, takeEvery } from "redux-saga/effects";
import { BaseAction } from "../actions";
import { Dispatch } from "redux";
import { AnimationsApi } from "../services/animations";
import {
  AnimationsActionIds,
  animationsUpdateIsRotatingAction,
} from "../actions/animations.actions";

export function* toggleRotationSaga(
  api: AnimationsApi,
  dispatch: Dispatch<BaseAction>
) {
  //@ts-ignore
  return yield takeEvery(AnimationsActionIds.TOGGLE_ROTATION, (action) =>
    toggleRotation(api, dispatch, action)
  );
}

function* toggleRotation(
  api: AnimationsApi,
  dispatch: Dispatch<BaseAction>,
  action: BaseAction
) {
  const isRotating: boolean = yield call(() =>
    api.animations.toggleRotation(action.payload.isRotating as boolean)
  );
  yield put(animationsUpdateIsRotatingAction(isRotating));
}
