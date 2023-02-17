//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/proxy/transparent/TransparentUpgradeableProxy.sol";

contract ProxyContract is TransparentUpgradeableProxy{
    constructor(address _logic) TransparentUpgradeableProxy(_logic, msg.sender, "") {}
}