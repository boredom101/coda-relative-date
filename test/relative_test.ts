import {assert} from "chai";
import {executeFormulaFromPackDef} from "@codahq/packs-sdk/dist/development";
import {it, describe} from "mocha";
import {pack} from "../pack";

describe("Relative date pack", () => {
    it("Calculates relative date backwards", async () => {
        assert.equal("13 hours ago", await executeFormulaFromPackDef(pack, "RelativeDate", [
            new Date(2022, 6, 26, 10, 45, 34, 87),
            new Date(2022, 6, 25, 21, 33, 12, 7)
        ]));
    });
    it("Calculates relative date forwards", async () => {
        assert.equal("in 3 days", await executeFormulaFromPackDef(pack, "RelativeDate", [
            new Date(2022, 6, 26, 10, 45, 34, 87),
            new Date(2022, 6, 29, 21, 33, 12, 7)
        ]));
    });
    it("Uses shortened mode", async () => {
        assert.equal("13 hr. ago", await executeFormulaFromPackDef(pack, "RelativeDate", [
            new Date(2022, 6, 26, 10, 45, 34, 87),
            new Date(2022, 6, 25, 21, 33, 12, 7),
            true
        ]));
    });
});
