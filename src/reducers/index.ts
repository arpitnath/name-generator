import { combineReducers } from 'redux'
import { AnimationsState, animationsReducer } from './animations.reducer'
import { namesReducer, NameState } from './names.reducers'

export interface AppState {
  animationsState: AnimationsState
  randomNames: NameState
}

export const reducers = combineReducers<AppState>({
  animationsState: animationsReducer,
  randomNames: namesReducer
})
