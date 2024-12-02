// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./Challenge.sol";

contract ChallengeFactory {
    address public owner;
    Challenge[] public challenges; // Array to store all challenges created

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can call this.");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    // Function to create a new challenge contract
    function createChallenge(uint256 duration, uint256 stakingAmount) external onlyOwner {
        Challenge newChallenge = new Challenge(duration, stakingAmount); // Deploy a new challenge
        challenges.push(newChallenge); // Add the new challenge to the array
    }

    // Function to get the number of challenges created
    function getChallengesCount() external view returns (uint256) {
        return challenges.length;
    }

    // Function to get a specific challenge contract by index
    function getChallenge(uint256 index) external view returns (address) {
        require(index < challenges.length, "Invalid challenge index.");
        return address(challenges[index]);
    }
}
