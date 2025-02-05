const ethers = require("ethers");

//Private key
MASTER_PRIVATE_KEY = process.env.MASTER_PRIVATE_KEY;

//wallet instance (signer)
const Wallet = new ethers.Wallet(MASTER_PRIVATE_KEY);

const getMasterWallet = () => {
    return Wallet;
};

const getMasterAddress = () => {
    return Wallet.address;
};

const checkValidEVMWallet = (address) => {
    const isValid = ethers.utils.isAddress(address);
    return isValid;
};

module.exports = {
    getMasterWallet,
    getMasterAddress,
    checkValidEVMWallet,
}