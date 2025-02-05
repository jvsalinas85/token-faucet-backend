const { ethers } = require("ethers");
const Response = require("../helpers/Response.helper");
const { getTokenBalance, sendTokens } = require("../services/Contract");
const { checkValidEVMWallet } = require("../services/Wallet");

const defaultController = (req, res) => {
    const response = new Response(res);
    const version = "1.0.0";
    const name = "Faucet API";

    response.ok({
        name,
        version,
    })
};

const getAddressBalance = async (req, res) => {
    const response = new Response(res); //initialize response
    const {address} = req.body; //address coming from body

    if (!address) {
        //check if there is an address
        return response.ko("Please provide an EVM address");
    };

    const check = checkValidEVMWallet(address);

    if(!check) {
        //if not valid return error
        return response.ko("Invalid EVM address");
    }

    try {
        const tokenBalance = await getTokenBalance(address);
        //after fetching balance
        response.ok("Token balance fetched successfully", tokenBalance);
    } catch (error) {
        response.ko("Error fetching address", error);
    }


};

const claimTokens = async (req,res) => {
    const response = new Response(res); //initialize response
    const {address} = req.body; //address coming from body

    if (!address) {
        //check if there is an address
        return response.ko("Please provide an EVM address");
    };

    const check = checkValidEVMWallet(address);

    if(!check) {
        //if not valid return error
        return response.ko("Invalid EVM address");
    }

    try {
        const hash = await sendTokens(address);
        //after claiming tokens
        response.ok("Tokens claimed successfully", hash);
    } catch (error) {
        response.ko("Error claiming tokens", error);
    }
};

module.exports = {
    defaultController,
    getAddressBalance,
    claimTokens,
}