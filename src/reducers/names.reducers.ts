import { NameActionIds } from '../actions/names.action'
import { NamesAction } from '../actions'

export type NameState = string[] | []

const intialState: NameState = []

export const namesReducer = (
  state: NameState = intialState,
  action: NamesAction
) => {
  switch (action.type) {
    case NameActionIds.NAMES_LOADING:
      return state //continue

    case NameActionIds.NAMES_UPDATED:
      return action.payload

    default:
      return state
  }
}
