import { NamesAction } from '.'

export const NameActionIds = {
  NAMES_LOADING: 'NAMES_LOADING',
  NAMES_UPDATED: 'NAMES_LOADING_SUCCESS'
}

export const loadNames = () => ({
  type: NameActionIds.NAMES_LOADING
})

export const updateNames = (names: string[]): NamesAction => ({
  type: NameActionIds.NAMES_UPDATED,
  payload: names
})
