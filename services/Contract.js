const { ethers } = require("ethers");

const TOKEN_ADDRESS = process.env.TOKEN_ADDRESS;
const RPC = process.env.RPC;

const TOKEN_ABI = [
    // Token ABI
    "function name() public view returns (string)",
    "function symbol() public view returns (string)",
    "function decimals() public view returns (uint8)",
    "function totalSupply() public view returns (uint256)",
    "function balanceOf(address _owner) public view returns (uint256 balance)",
    "function transfer(address _to, uint256 _value) public returns (bool success)",
    "function transferFrom(address _from, address _to, uint256 _value) public returns (bool success)",
    "function approve(address _spender, uint256 _value) public returns (bool success)",
    "function allowance(address _owner, address _spender) public view returns (uint256 remaining)",

];

const provider = new ethers.providers.JsonRpcProvider(RPC);

//contract instance
const contract = new ethers.Contract(TOKEN_ADDRESS, TOKEN_ABI, provider); 


//get balance function
const getTokenBalance = async (address) => {
    const balance = await contract.balanceOf(address);
    const formattedBalance = ethers.utils.formatEther(balance);
    return formattedBalance;
};

module.exports = {
    getTokenBalance
};