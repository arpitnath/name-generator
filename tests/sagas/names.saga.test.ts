import { handleUpdateNames } from '../../src/sagas/names.saga'
import * as sinon from 'sinon'
import * as chai from 'chai'
import { expect } from 'chai'
import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'
import { NameActionIds } from '../../src/actions/names.action'
import { recordSaga } from '../utils/recordSaga'

chai.use(require('chai-json-schema'))
chai.use(require('chai-match'))

let sandbox
let store

const middleware = [thunk]
const mockStore = configureMockStore(middleware)
const initialAction = {
  type: NameActionIds.NAMES_LOADING,
  payload: { names: [] }
}

const fakeData = [
  'name1',
  'name2',
  'name3',
  'name4',
  'name5',
  'name6',
  'name7',
  'name8',
  'name9'
]

describe('NAME SAGA', () => {
  before(() => {
    sandbox = sinon.createSandbox()
    store = mockStore()
  })

  afterEach(() => {
    sandbox.restore()
  })
  it('should load and handle names in case of success', async () => {
    const expectedRandomNamesListLength = 5
    const dispatched_Actions = await recordSaga(
      handleUpdateNames,
      fakeData,
      store.dispatch,
      initialAction
    )
    // console.log(dispatched_Actions)
    // console.log(store.getState)
    expect(dispatched_Actions[0].type).to.be.equal(NameActionIds.NAMES_UPDATED)
    expect(dispatched_Actions[0].payload.length).to.be.equal(
      expectedRandomNamesListLength
    )
  })

  it('should load and handle fail in case empty array is passed', async () => {
    const expectedPayload = 'Error'
    const dispatched_Actions = await recordSaga(
      handleUpdateNames,
      [],
      store.dispatch,
      initialAction
    )
    // console.log(dispatched_Actions)

    expect(dispatched_Actions[0].type).to.be.equal(
      NameActionIds.NAMES_UPDATE_FAIL
    )
    expect(dispatched_Actions[0].payload[0]).to.be.equal(expectedPayload)
  })
})
