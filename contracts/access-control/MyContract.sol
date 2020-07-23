// contracts/MyContract.sol
// 访问控制最常见和最基本的形式是所有权的概念：存在一个owner属于合同的帐户，可以执行合同中的管理任务。
// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

import "@openzeppelin/contracts/access/Ownable.sol";

contract MyContract is Ownable {
    function normalThing() public {
        // anyone can call this normalThing()
    }

    function specialThing() public onlyOwner {
        // only the owner can call specialThing()!
    }
}

