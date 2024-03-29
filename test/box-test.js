const { expect } = require("chai");

let Box, box;
describe("Box Proxy", async () => {
    beforeEach(async () => {
        Box = await ethers.getContractFactory("Box");
        box = await upgrades.deployProxy(Box, [42], { initializer: "initialize"});
    });

    //Test Case
    it("val return a value initialized", async () => {
        expect((await box.val()).toString()).to.equal('42');
    });
});