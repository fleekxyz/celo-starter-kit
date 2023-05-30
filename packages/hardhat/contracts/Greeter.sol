//SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract Greeter {
    event NewGreeting(string greeting, address sender);

    string public greeting;

    constructor(string memory _greet) {
        greeting = _greet;
    }

    function setGreeting(string calldata _greeting) external {
        greeting = _greeting;
        emit NewGreeting(_greeting, msg.sender);
    }
}
