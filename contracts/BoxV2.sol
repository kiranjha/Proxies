//SPDX-License-IDentifier: UNLICENSED
pragma solidity ^0.8.0;

contract BoxV2 {
    uint public val;

    function inc() external {
        val += 1;
    }
}