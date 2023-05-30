# Hardhat | Celo Composer

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a sample script that deploys that contract.

## Setup & Installation

### Alfajores Testnet Setup

**Note** This setup is not required when using a local development blockchain (like celo-devchain or Ganache).

1. Create a `.env` file similar to `.env.example`.
2. Paste the private key in `.env`.
    > note: depending on how you generate your private key, you may have to prepend `0x` in the private key does not already have it prepended.
3. Faucet your account with the Alfajores testnet faucet [here](https://celo.org/developers/faucet).

## Develop

1. Write your contracts in `./contracts`.
2. Update contract deployment scripts in `./deploy`scripts.
3. Deploy contracts with `yarn deploy` from the **root directory**. The default deployment network is specified in `hardhat.config.js` and is set to `alfajores` initially.
4. You can specify a specific network deployment directly with

```bash
npx hardhat deploy --network [network name]
```

Network configs are defined in `hardhat.config.js`.

## Verify your contracts

### hardhat-celo

You can easily verify your contracts deployed to the associated networks with hardhat-celo.

[Reference](https://docs.celo.org/developer/verify/hardhat)

```bash
npx hardhat verify smart-contract-address parameter(s) --network alfajores
```

On Mainnet:

```bash
npx hardhat verify smart-contract-address parameter(s) --network celo
```

### Sourcify

Additionally, you can easily verify your contracts deployed to the associated networks with the following commands.

[Reference](https://docs.celo.org/blog/hardhat-deploy-verify)

On Alfajores:

```bash
npx hardhat --network alfajores sourcify
```

On Mainnet:

```bash
npx hardhat --network celo sourcify
```

## Deploy with [Figment Datahub](https://datahub.figment.io/)

Figment Datahub provides RPC & REST APIs for Celo network. To learn more about Datahub refer this doc - [https://docs.figment.io/introduction/what-is-datahub](https://docs.figment.io/introduction/what-is-datahub). Follow these steps to deploy your smart contract with Figment datahub's RPC.

-   Create account on [Datahub](https://datahub.figment.io/).
-   On the dashboard, click on `Create new app` and select **Celo** from the protocol list.
-   Once you have created an app, copy the api key.
-   Edit `hardhat.config.js` and update `alfajoresDatahub` and `celoDatahub` with the API Key.
-   Run the test or deploy the contract with following commands.

```bash
npx hardhat run scripts/deploy.ts --network alfajoresDatahub

npx hardhat run scripts/deploy.ts --network celoDatahub
```
