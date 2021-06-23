import api from '../../src/services'
import { toggleRotationSaga } from '../../src/sagas/toggleRotation.saga'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as chai from 'chai'
import * as sinon from 'sinon'
import { expect } from 'chai'
import { recordSaga } from '../utils/recordSaga'
import {
  AnimationsActionIds,
  animationsUpdateIsRotatingAction
} from '../../src/actions/animations.actions'

chai.use(require('chai-json-schema'))
chai.use(require('chai-match'))

let sandbox: sinon.SinonSandbox
let store: any
const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
const initialAction = {
  type: AnimationsActionIds.TOGGLE_ROTATION,
  payload: { isRotating: false }
}

describe('toggleRotationSaga', () => {
  before(() => {
    sandbox = sinon.createSandbox()
    store = mockStore()
  })

  afterEach(() => {
    sandbox.restore()
  })

  it('puts animationsUpdateIsRotatingAction', async () => {
    const expectedIsRotatingFlag = true
    const toggleRotationSpy = sandbox
      .stub(api.animations)
      .toggleRotation.callsFake((isRotating: boolean) => {
        return !isRotating
      })

    const dispatchedActions = await recordSaga(
      toggleRotationSaga,
      api,
      store.dispatch,
      initialAction
    )

    expect(toggleRotationSpy.calledOnceWith(initialAction.payload.isRotating))
      .to.be.true
    expect(dispatchedActions).to.deep.include(
      animationsUpdateIsRotatingAction(expectedIsRotatingFlag)
    )
  })
})
