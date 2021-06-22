import {
  checkOriginOfNames,
  generateRandomNames
} from '../../src/services/names.services'
import data from '../../src/assets/data/names.json'
import { expect } from 'chai'

describe('Names Services', () => {
  let listOfNames
  before(() => {
    listOfNames = generateRandomNames(data)
  })

  it('should generate 5 names', async () => {
    let limitOfNames = 5

    expect(listOfNames.length).to.be.equal(limitOfNames)
  })

  it('should return an array', async () => {
    expect(Array.isArray(listOfNames)).to.be.eql(true)
  })

  it('should generate names from the input list', async () => {
    const checkRandomNamesExists = checkOriginOfNames(listOfNames, data)

    expect(checkRandomNamesExists).to.be.true
  })
})
