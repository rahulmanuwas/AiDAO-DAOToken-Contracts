pragma solidity ^0.4.11;

import "zeppelin-solidity/contracts/token/StandardToken.sol";

contract DAOToken is StandardToken{

    string public constant NAME = "DAO Token";
    string public constant SYMBOL = "DAO";
    uint8 public constant DECIMALS = 8;
    uint256 public constant INITIAL_SUPPLY = 1000000000 * 10**uint256(DECIMALS);

    function DAOToken() {
        totalSupply = INITIAL_SUPPLY;
        balances[msg.sender] = INITIAL_SUPPLY;
    }
}
