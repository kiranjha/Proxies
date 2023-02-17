//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
contract Array{
    uint[] public arr;         //declare a dynamic array 

    //dynamically insert elements in an array
    function addElement(uint _element) public{
        arr.push(_element);  //push function append the element in an array and the array length by one.
    }
    function length() public view returns(uint){
        return arr.length;
    }

}