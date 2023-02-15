const { ethers, upgrades } = require("hardhat");

async function main() {
    const Box = await ethers.getContractFactory("Box");
    const box = await upgrades.deployProxy(Box, [42], {
        initializer: "initialize",
    });
    await box.deployed();
     console.log("Box deployed to: ",box.address);
}
main();
//0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0 hardhat bode
//0xA8AAd96C7Ba436C3a76dCC242136b7c2DaCe849C goerli test network