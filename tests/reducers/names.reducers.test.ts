import { expect } from 'chai'
import { updateNames, updateNamesFail } from '../../src/actions/names.action'
import { namesReducer } from '../../src/reducers/names.reducers'
import { generateRandomNames } from '../../src/services/names.services'
import data from '../../src/assets/data/names.json'

describe('namesReducer', () => {
  it('should returns the initial state on undefined action', () => {
    expect(namesReducer(undefined, { type: null })).to.eql({ names: [] })
  })
  describe('NAMES_LOADING_SUCCESS', () => {
    let listOfNames
    before(() => {
      listOfNames = generateRandomNames(data)
    })

    it('should return list of the names', () => {
      expect(namesReducer(undefined, updateNames(listOfNames))).to.eql({
        names: listOfNames
      })
    })
  })

  describe('NAMES_LOADING_FAIL', () => {
    let emptyList
    before(() => {
      emptyList = generateRandomNames([])
    })

    it('should return "Error" with an empty list ', () => {
      expect(namesReducer(undefined, updateNamesFail([]))).to.eql({
        names: emptyList
      })
    })
  })
})
