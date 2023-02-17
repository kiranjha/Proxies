const { expect } = require("chai");
const { ethers } = require("hardhat");
const { BigNumber } = require("ethers");


describe("Array V1", async () => {
    let ArrayV1, arrayV1, ArrayV2, arrayV2, ProxyContract, upgradedArray, proxy, owner, addr1, addr2;
    beforeEach(async () => {
        [owner, addr1, addr2] = await ethers.getSigners();
        ArrayV1 = await ethers.getContractFactory("Array");
        arrayV1 = await ArrayV1.deploy();
        await arrayV1.deployed();
        console.log("Array deployed contract address : - ", arrayV1.address);
        ArrayV2 = await ethers.getContractFactory("ArrayV2");
        arrayV2 = await ArrayV2.deploy();
        await arrayV1.deployed();
        console.log("ArrayV2 deployed contract address : - ", arrayV2.address);
        ProxyContract = await ethers.getContractFactory("ProxyContract");
        proxy = await ProxyContract.deploy(arrayV2.address);
        console.log("Proxy Contract Deployed Address :- ", proxy.address);

        //Verify the Proxy is pointing to the ArrayV2 contract
        upgradedArray = ArrayV2.attach(proxy.address);
        // console.log("Is Proxy pointing to ArrayV2 ? ", (await upgradedArray.arr(0)).toString());
        //deployed on goerli testnet to address 0x97b08c9808c45b6F2Ef4E89E4786B9876dbd7a54
    });

    //Test Case
    it("Should Add Element in array", async () => {
        await upgradedArray.connect(addr1).addElement(10);
        const getEle = await upgradedArray.connect(addr1).arr(0);
        console.log(getEle);
        expect(getEle).to.equal(BigNumber.from('10'));
    });
    it("Should get the length of array", async () => {
        await upgradedArray.connect(addr1).addElement(20);
        await upgradedArray.connect(addr1).addElement(30);
        await upgradedArray.connect(addr1).addElement(40);
        await upgradedArray.connect(addr1).addElement(50);
        await upgradedArray.connect(addr1).addElement(60);
        console.log(await upgradedArray.connect(addr1).arr(0));
        const length = await upgradedArray.connect(addr1).length();
        console.log(length);
        expect(length).to.equal(BigNumber.from('5'))
    });
    it("Should get the length of array", async () => {
        await upgradedArray.connect(addr1).addElement(20);
        await upgradedArray.connect(addr1).addElement(30);
        await upgradedArray.connect(addr1).addElement(40);
        await upgradedArray.connect(addr1).addElement(50);
        await upgradedArray.connect(addr1).addElement(60);
        await upgradedArray.connect(addr1).addElement(70);
        console.log("before deleting", await upgradedArray.connect(addr1).length());
        await upgradedArray.connect(addr1).delArray(5);
        const length = await upgradedArray.connect(addr1).length();
        console.log("after deleting ",length);
        expect(length).to.equal(BigNumber.from('5'))
    });
});