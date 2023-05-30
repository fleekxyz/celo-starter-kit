require("@nomicfoundation/hardhat-chai-matchers");
require("dotenv").config({ path: ".env" });
require("hardhat-deploy");
require("hardhat-celo");

const defaultNetwork = "alfajores";
const derivationPath = "m/44'/52752'/0'/0"; // derivation path used by Celo (If you are HD wallet (i.e mnemonic) then use this path)

// This is the mnemonic used by celo-devchain
const DEVCHAIN_MNEMONIC =
    "concert load couple harbor equip island argue ramp clarify fence smart topic";

module.exports = {
    defaultNetwork,
    networks: {
        localhost: {
            url: "http://127.0.0.1:8545",
            accounts: {
                mnemonic: DEVCHAIN_MNEMONIC,
                path: derivationPath,
            },
        },
        alfajores: {
            url: "https://alfajores-forno.celo-testnet.org",
            accounts: [process.env.PRIVATE_KEY],
            chainId: 44787,
        },
        celo: {
            url: "https://forno.celo.org",
            accounts: [process.env.PRIVATE_KEY],
            chainId: 42220,
        },
    },
    etherscan: {
        apiKey: {
            alfajores: process.env.CELOSCAN_API_KEY,
            celo: process.env.CELOSCAN_API_KEY,
        },
    },
    solidity: {
        version: "0.8.17",
    },
    namedAccounts: {
        deployer: 0,
    },
};
