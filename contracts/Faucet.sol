//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract Faucet {
    address public developer;
    using SafeMath for uint256;

    struct Token {
        address token;
        uint256 amount;
    }

    mapping(uint256 => Token) tokens;

    uint256 public totalTokens;
    uint256 public timelimit = 86400000;

    mapping(address => uint256) public lastClaim;

    modifier onlyDev() {
        require(msg.sender == developer, "RESTRICTED");
        _;
    }

    constructor(address _developer) {
        developer = _developer;
    }

    function releaseAll(address _user) external {
        require(
            lastClaim[msg.sender] + timelimit < block.timestamp,
            "try after some time"
        );
        for (uint256 i = 0; i < totalTokens; i++) {
            Token storage token = tokens[i];
            IERC20(token.token).transfer(_user, token.amount);
        }
        lastClaim[msg.sender] = block.timestamp;
    }

    function releaseOne(address _user, uint256 _tokenId) external {
        require(
            lastClaim[msg.sender] + timelimit < block.timestamp,
            "try after some time"
        );
        Token storage token = tokens[_tokenId];
        IERC20(token.token).transfer(_user, token.amount);
    }

    function removeAll(address _to) external onlyDev {
        for (uint256 i = 0; i < totalTokens; i++) {
            Token storage token = tokens[i];
            IERC20(token.token).transfer(
                _to,
                IERC20(token.token).balanceOf(address(this))
            );
        }
    }

    function removeAllWithAmt(address _to, uint256 _amt) external onlyDev {
        for (uint256 i = 0; i < totalTokens; i++) {
            Token storage token = tokens[i];
            IERC20(token.token).transfer(
                _to,
                _amt
            );
        }
    }

    function addToken(address _token, uint256 _amount) external onlyDev {
        Token storage token = tokens[totalTokens];
        token.token = _token;
        token.amount = _amount;
        totalTokens = totalTokens.add(1);
    }

    function removeToken() external onlyDev {
        Token storage token = tokens[totalTokens];
        token.token = address(0);
        token.amount = 0;
        totalTokens = totalTokens.sub(1);
    }
}
