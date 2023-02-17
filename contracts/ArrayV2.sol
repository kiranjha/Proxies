//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "./Array.sol";
contract ArrayV2 is Array {
    function delArray(uint _index) public{
        //index value must be lessthan or equal to the length
        if(_index<=arr.length-1){
            //copying all the upper elements to the left
            for(uint i=_index;i<arr.length-1;i++){
                arr[i]=arr[i+1];
            }
            arr.pop();  //delete the last elements
        }
    }
}
