// SPDX-License-Identifier: MIT
pragma solidity ^0.8.27;

interface IFundraisePrivate {
    function depositedAmount(address user) external view returns (uint256);
}

contract FundraiseAdapter {
    IFundraisePrivate public oldFundraiseContract;

    constructor(address _oldFundraiseContract) {
        oldFundraiseContract = IFundraisePrivate(_oldFundraiseContract);
    }

    function depositedInAllRounds(address user) external view returns (uint256) {
        return oldFundraiseContract.depositedAmount(user);
    }
}
