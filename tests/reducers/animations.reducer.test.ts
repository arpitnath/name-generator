import * as chai from "chai";
import { expect } from "chai";
import { animationsUpdateIsRotatingAction } from "../../src/actions/animations.actions";
import { animationsReducer } from "../../src/reducers/animations.reducer";

chai.use(require("chai-json-schema"));
chai.use(require("chai-match"));

describe("animationsReducer", () => {
  it("returns the initial state on undefined action", () => {
    expect(animationsReducer(undefined, { type: null })).to.eql({
      isRotating: false,
    });
  });

  describe("ANIMATIONS_UPDATE_IS_ROTATING", () => {
    it("returns true on true payload", () => {
      const expectedIsRotatingFlag: boolean = true;

      expect(
        animationsReducer(
          undefined,
          animationsUpdateIsRotatingAction(expectedIsRotatingFlag)
        )
      ).to.eql({
        isRotating: expectedIsRotatingFlag,
      });
    });
    it("returns false on false payload", () => {
      const expectedIsRotatingFlag: boolean = false;

      expect(
        animationsReducer(
          undefined,
          animationsUpdateIsRotatingAction(expectedIsRotatingFlag)
        )
      ).to.eql({
        isRotating: expectedIsRotatingFlag,
      });
    });
  });
});
