# 🚰  Token Faucet API

> A ** TOKEN faucet** built with **Ethers.js** and **Express**, designed to send a specific amount of tokens (or any ERC20-compliant token) to a valid EVM address.

![Node.js](https://img.shields.io/badge/Node.js-%5E18.0.0-green?logo=node.js) ![Express.js](https://img.shields.io/badge/Express.js-%5E4.0.0-blue?logo=express) ![Ethers.js](https://img.shields.io/badge/Ethers.js-%5E5.0.0-purple?logo=ethereum) ![ERC20](https://img.shields.io/badge/ERC20-Compatible-yellow)

---

## ✨ Features

- 🚀 **Send tokens (or any ERC20 token)**: Transfers tokens to valid EVM addresses.
- 🔒 **Secure setup**: Protects the master account with a private key.
- ⚡ **Sepolia-compatible**: Works with an RPC endpoint configured in MetaMask (e.g., via [getblock.io](https://getblock.io)).
- 🛠️ **Adaptable**: Can work with any ERC20-compliant token contract.

---

## 📦 Environment Variables

Create a `.env` file in the root of the project with the following variables:

| Variable             | Description                                                                                     |
|----------------------|-------------------------------------------------------------------------------------------------|
| `TOKEN_ADDRESS`      | Contract address of the token or any ERC20-compliant token (e.g., `0x779877A7B0D9E8603169DdbD7836e478b4624789`). |
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
   mkdir faucet-api
   cd faucet-api
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

# 🚰 API de Faucet de Tokens

> Un **faucet de tokens** construido con **Ethers.js** y **Express**, diseñado para enviar una cantidad específica de tokens (o cualquier token compatible con ERC20) a una dirección EVM válida.

![Node.js](https://img.shields.io/badge/Node.js-%5E18.0.0-green?logo=node.js) ![Express.js](https://img.shields.io/badge/Express.js-%5E4.0.0-blue?logo=express) ![Ethers.js](https://img.shields.io/badge/Ethers.js-%5E5.0.0-purple?logo=ethereum) ![ERC20](https://img.shields.io/badge/ERC20-Compatible-yellow)

---

## ✨ Características

- 🚀 **Envío de tokens (o cualquier token ERC20)**: Transfiere tokens a direcciones EVM válidas.
- 🔒 **Configuración segura**: Protege la cuenta maestra con una clave privada.
- ⚡ **Compatible con Sepolia**: Funciona con un endpoint RPC configurado en MetaMask (por ejemplo, desde [getblock.io](https://getblock.io)).
- 🛠️ **Adaptable**: Puede funcionar con cualquier contrato compatible con ERC20.

---

## 📆 Variables de Entorno

Crea un archivo `.env` en la raíz del proyecto con las siguientes variables:

| Variable             | Descripción                                                                                     |
|----------------------|-------------------------------------------------------------------------------------------------|
| `TOKEN_ADDRESS`      | Dirección del contrato del token o cualquier token compatible con ERC20 (por ejemplo, `0x779877A7B0D9E8603169DdbD7836e478b4624789`). |
| `TOKENS_TO_SEND`     | Cantidad de tokens a enviar en cada solicitud al faucet (por ejemplo, `10` para enviar 10 tokens).            |
| `MASTER_PRIVATE_KEY` | Clave privada de la cuenta maestra que contiene suficientes tokens para transferencias.                     |
| `RPC`                | Endpoint RPC para Sepolia (por ejemplo, desde [getblock.io](https://getblock.io)).                      |

---

## ⚙️ Configuración del Proyecto

### 1️⃣ Prerrequisitos

Asegúrate de tener instalado:

- **Node.js** (v18 o superior)
- **npm** (v8 o superior)
- **Cuenta de MetaMask** configurada en la red Sepolia con suficientes tokens LINK o cualquier otro token compatible con ERC20.

---

### 2️⃣ Configuración del Proyecto

1. **Inicializa el proyecto**:  
   ```bash
   mkdir faucet-api
   cd faucet-api
   npm init -y
   ```

2. **Instala las dependencias necesarias**:  
   ```bash
   npm install express dotenv ethers
   ```

3. **Crea el archivo `.env`**:  
   Agrega las variables de entorno requeridas:
   ```env
   TOKEN_ADDRESS=0x779877A7B0D9E8603169DdbD7836e478b4624789
   TOKENS_TO_SEND=10
   MASTER_PRIVATE_KEY=<Tu_Clave_Privada>
   RPC=<Tu_Endpoint_RPC_Sepolia>
   ```

4. **Crea el archivo principal de la aplicación**:  
   Crea un archivo `faucet.js` para manejar el servidor Express y la lógica de transferencia de tokens.

5. **Ejecuta el proyecto**:  
   Inicia la aplicación:
   ```bash
   node faucet.js
   ```

---

## 🥽🎓 Pruebas del Faucet

Usa herramientas como **Postman** o **cURL** para realizar una solicitud POST al endpoint del faucet con una dirección EVM válida. Ejemplo:
```json
{
  "address": "0xTuDireccionEVM"
}
```

---

## 📒 Documentación

- **[Ethers.js](https://docs.ethers.org/)**: Biblioteca JavaScript para la interacción con Ethereum.
- **[Express.js](https://expressjs.com/)**: Framework web para construir APIs.
- **[Sepolia Testnet](https://sepolia.dev/)**: Red de prueba de Ethereum.
- **[getblock.io](https://getblock.io/)**: Proveedor de RPC para redes de Ethereum.

---



