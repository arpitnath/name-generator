import { NamesAction } from '.'

export const NameActionIds = {
  NAMES_LOADING: 'NAMES_LOADING',
  NAMES_UPDATED: 'NAMES_LOADING_SUCCESS',
  NAMES_UPDATE_FAIL: 'NAMES_LOADING_FAIL'
}

export const loadNames = () => ({
  type: NameActionIds.NAMES_LOADING,
  payload: []
})

export const updateNames = (names: string[]): NamesAction => ({
  type: NameActionIds.NAMES_UPDATED,
  payload: names
})

export const updateNamesFail = (names: string[]): NamesAction => ({
  type: NameActionIds.NAMES_UPDATE_FAIL,
  payload: names
})
