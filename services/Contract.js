const { ethers } = require("ethers");
const { getMasterWallet } = require("./Wallet");

const TOKEN_ADDRESS = process.env.TOKEN_ADDRESS;
const RPC = process.env.RPC;
const TOKENS_TO_SEND = process.env.TOKENS_TO_SEND;

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

const provider = new ethers.providers.JsonRpcProvider(RPC); //provider

const MASTER_WALLET = getMasterWallet(); //getting master wallet

//signer
const MASTER_WALLET_WITH_PROVIDER = MASTER_WALLET.connect(provider);

//contract instance
const contract = new ethers.Contract(TOKEN_ADDRESS, TOKEN_ABI, MASTER_WALLET_WITH_PROVIDER); 


//get balance function
const getTokenBalance = async (address) => {
    const balance = await contract.balanceOf(address);
    const formattedBalance = ethers.utils.formatEther(balance);
    return formattedBalance;
};

const sendTokens = async (address) => {
    const tx = await contract.transfer(address, TOKENS_TO_SEND); //send tokens
    await tx.wait();
    return tx.hash;
}

module.exports = {
    getTokenBalance,
    sendTokens
};