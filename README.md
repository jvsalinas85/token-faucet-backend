# 🚰 LINK Token Faucet API

> A **LINK token faucet** built with **Ethers.js** and **Express**, designed to send a specific amount of LINK tokens (or any ERC20-compliant token) to a valid EVM address.

![Node.js](https://img.shields.io/badge/Node.js-%5E18.0.0-green?logo=node.js) ![Express.js](https://img.shields.io/badge/Express.js-%5E4.0.0-blue?logo=express) ![Ethers.js](https://img.shields.io/badge/Ethers.js-%5E5.0.0-purple?logo=ethereum) ![ERC20](https://img.shields.io/badge/ERC20-Compatible-yellow)

---

## ✨ Features

- 🚀 **Send LINK tokens (or any ERC20 token)**: Transfers tokens to valid EVM addresses.
- 🔒 **Secure setup**: Protects the master account with a private key.
- ⚡ **Sepolia-compatible**: Works with an RPC endpoint configured in MetaMask (e.g., via [getblock.io](https://getblock.io)).
- 🛠️ **Adaptable**: Can work with any ERC20-compliant token contract.

---

## 📦 Environment Variables

Create a `.env` file in the root of the project with the following variables:

| Variable             | Description                                                                                     |
|----------------------|-------------------------------------------------------------------------------------------------|
| `TOKEN_ADDRESS`      | Contract address of the LINK token or any ERC20-compliant token (e.g., `0x779877A7B0D9E8603169DdbD7836e478b4624789`). |
| `TOKENS_TO_SEND`     | Amount of tokens to send in each faucet request (e.g., `10` for sending 10 tokens).            |
| `MASTER_PRIVATE_KEY` | Private key of the master account holding sufficient tokens for transfers.                     |
| `RPC`                | RPC endpoint for Sepolia (e.g., from [getblock.io](https://getblock.io)).                      |

---

## ⚙️ Project Setup

### 1️⃣ Prerequisites

Make sure you have installed:

- **Node.js** (v18 or higher)
- **npm** (v8 or higher)
- **MetaMask account** set up on the Sepolia network with sufficient LINK tokens or any other ERC20-compliant token.

---

### 2️⃣ Setting Up the Project

1. **Initialize the project**:  
   ```bash
   mkdir link-faucet-api
   cd link-faucet-api
   npm init -y
   ```

2. **Install required dependencies**:  
   ```bash
   npm install express dotenv ethers
   ```

3. **Create the `.env` file**:  
   Add the required environment variables:
   ```env
   TOKEN_ADDRESS=0x779877A7B0D9E8603169DdbD7836e478b4624789
   TOKENS_TO_SEND=10
   MASTER_PRIVATE_KEY=<Your_Private_Key>
   RPC=<Your_Sepolia_RPC_Endpoint>
   ```

4. **Create the main application file**:  
   Create a `faucet.js` file to handle the Express server and token transfer logic.

5. **Run the project**:  
   Start the application:
   ```bash
   node faucet.js
   ```

---

## 🧪 Testing the Faucet

Use tools like **Postman** or **cURL** to make a POST request to the faucet endpoint with a valid EVM address. Example:
```json
{
  "address": "0xYourEVMAddress"
}
```

---

## 📚 Documentation

- **[Ethers.js](https://docs.ethers.org/)**: JavaScript library for Ethereum interaction.
- **[Express.js](https://expressjs.com/)**: Web framework for building APIs.
- **[Sepolia Testnet](https://sepolia.dev/)**: Ethereum test network.
- **[getblock.io](https://getblock.io/)**: RPC provider for Ethereum networks.

---

# 🚰 LINK Token Faucet API (English Version)

> A **LINK token faucet** built with **Ethers.js** and **Express**, designed to send a specific amount of LINK tokens (or any ERC20-compliant token) to a valid EVM address.

![Node.js](https://img.shields.io/badge/Node.js-%5E18.0.0-green?logo=node.js) ![Express.js](https://img.shields.io/badge/Express.js-%5E4.0.0-blue?logo=express) ![Ethers.js](https://img.shields.io/badge/Ethers.js-%5E5.0.0-purple?logo=ethereum) ![ERC20](https://img.shields.io/badge/ERC20-Compatible-yellow)

---

## ✨ Features

- 🚀 **Send LINK tokens (or any ERC20 token)**: Transfers tokens to valid EVM addresses.
- 🔒 **Secure setup**: Protects the master account with a private key.
- ⚡ **Sepolia-compatible**: Works with an RPC endpoint configured in MetaMask (e.g., via [getblock.io](https://getblock.io)).
- 🛠️ **Adaptable**: Can work with any ERC20-compliant token contract.

---

## 📦 Environment Variables

Create a `.env` file in the root of the project with the following variables:

| Variable             | Description                                                                                     |
|----------------------|-------------------------------------------------------------------------------------------------|
| `TOKEN_ADDRESS`      | Contract address of the LINK token or any ERC20-compliant token (e.g., `0x779877A7B0D9E8603169DdbD7836e478b4624789`). |
| `TOKENS_TO_SEND`     | Amount of tokens to send in each faucet request (e.g., `10` for sending 10 tokens).            |
| `MASTER_PRIVATE_KEY` | Private key of the master account holding sufficient tokens for transfers.                     |
| `RPC`                | RPC endpoint for Sepolia (e.g., from [getblock.io](https://getblock.io)).                      |

---

## ⚙️ Project Setup

### 1️⃣ Prerequisites

Make sure you have installed:

- **Node.js** (v18 or higher)
- **npm** (v8 or higher)
- **MetaMask account** set up on the Sepolia network with sufficient LINK tokens or any other ERC20-compliant token.

---

### 2️⃣ Setting Up the Project

1. **Initialize the project**:  
   ```bash
   mkdir link-faucet-api
   cd link-faucet-api
   npm init -y
   ```

2. **Install required dependencies**:  
   ```bash
   npm install express dotenv ethers
   ```

3. **Create the `.env` file**:  
   Add the required environment variables:
   ```env
   TOKEN_ADDRESS=0x779877A7B0D9E8603169DdbD7836e478b4624789
   TOKENS_TO_SEND= (example 10 TOKENS = 10000000000000000000)
   MASTER_PRIVATE_KEY=<Your_Private_Key>
   RPC=<Your_Sepolia_RPC_Endpoint>
   ```

4. **Create the main application file**:  
   Create a `faucet.js` file to handle the Express server and token transfer logic.

5. **Run the project**:  
   Start the application:
   ```bash
   node faucet.js
   ```

---

## 🧪 Testing the Faucet

Use tools like **Postman** or **cURL** to make a POST request to the faucet endpoint with a valid EVM address. Example:
```json
{
  "address": "0xYourEVMAddress"
}
```

---

## 📚 Documentation

- **[Ethers.js](https://docs.ethers.org/)**: JavaScript library for Ethereum interaction.
- **[Express.js](https://expressjs.com/)**: Web framework for building APIs.
- **[Sepolia Testnet](https://sepolia.dev/)**: Ethereum test network.
- **[getblock.io](https://getblock.io/)**: RPC provider for Ethereum networks.
