require("@nomicfoundation/hardhat-toolbox");
require("@openzeppelin/hardhat-upgrades");
require("@nomiclabs/hardhat-ethers");
require('dotenv').config();
// require("@nomiclabs/hardhat-etherscan");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  // defaultNetwork: "goerli",
  // networks: {
  //   goerli: {
  //     url: `${process.env.RPC_URL}`,
  //     accounts: [`${process.env.METAMASK_PRIVATE_KEY}`],
  //   }
  // }
};
