import { animationsService } from "../../src/services/animations";

import * as chai from "chai";
import { expect } from "chai";

chai.use(require("chai-json-schema"));
chai.use(require("chai-match"));

describe("Animations Service", () => {
  it("on true returns false", async () => {
    const expectedFlag = false;
    const resultFlag: boolean = animationsService.toggleRotation(true);
    expect(resultFlag).to.be.equal(expectedFlag);
  });
  it("on false returns true", async () => {
    const expectedFlag = true;
    const resultFlag: boolean = animationsService.toggleRotation(false);
    expect(resultFlag).to.be.equal(expectedFlag);
  });
});
