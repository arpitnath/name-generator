export interface BaseAction {
  type: string
  payload?: any
}

export interface NamesAction extends BaseAction {
  payload: string[]
}
