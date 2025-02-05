const { ethers } = require("ethers");
const Response = require("../helpers/Response.helper");
const { getTokenBalance } = require("../services/Contract");

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

    const check = ethers.utils.isAddress(address); //check if address is valid

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

module.exports = {
    defaultController,
    getAddressBalance
}