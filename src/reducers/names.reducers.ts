import { NameActionIds } from '../actions/names.action'
import { NamesAction } from '../actions'

export type NameState = {
  names: any[]
}

const intialState: NameState = {
  names: []
}

export const namesReducer = (
  state: NameState = intialState,
  action: NamesAction
): NameState => {
  switch (action.type) {
    case NameActionIds.NAMES_UPDATED:
      return { ...state, names: action.payload }

    case NameActionIds.NAMES_UPDATE_FAIL:
      return { names: ['Error'] }

    default:
      return state
  }
}
