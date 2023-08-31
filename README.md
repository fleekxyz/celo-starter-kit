# Celo + Fleek Starter Kit

![image](https://github.com/fleekxyz/celo-starter-kit/assets/55561695/1dbde51a-3829-4a19-80f7-6702daa18373)

## 🚀 Project Structure

This project is composed of two packages, here is an overview of the folders and files:

```
/
├── packages/
│   ├── hardhat/
│   └── react-app/
├── README.md
└── package.json
```

- Inside the `hardhat` package you can write your smart contracts and deploy them to the Alfajores Network. [Readme](https://github.com/fleekxyz/celo-starter-kit/blob/main/packages/hardhat/README.md)
- Inside the `react-app` package you can create your Dapp front-end code. [Readme](https://github.com/fleekxyz/celo-starter-kit/blob/main/packages/react-app/README.md)

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `yarn install`         | Installs dependencies                            |
| `yarn build`          | Will deploy contracts to the alfajores network and then build the `react-app` creating the abi definitions.  |
| `yarn build-local`          | Will deploy contracts to the local hardhat network and then build the `react-app` creating the abi definitions.  |
| `yarn react-app:dev`          | Will start the React application in dev mode at `localhost:3000` |
| `yarn react-app:build`          | Will build the React application to `/packages/react-app/out` |
| `yarn react-app:start`          | Will preview the React application in prodcution mode at `localhost:3000` |
| `yarn react-app:lint`          | React application linter |
| `yarn hardhat:test`          | Test hardhat package |
| `yarn hardhat:test-local`          | Test hardhat package in local mode |
| `yarn hardhat:deploy`          | Deploy contracts to the `Alfajores` network, and generates `packages/react-app/contracts/contracts.json`  |
| `yarn hardhat:deploy-local`          | Deploy contracts to the local network, and generates `packages/react-app/contracts/contracts.json`  |

## ⚡ How to deploy to Fleek

### 1. Create a `fleek.json` config file:
You can configure this site deployment using [Fleek CLI]() and running:
```
 > fleek sites init
  WARN! Fleek CLI is in beta phase, use it under your own responsibility
   ? Choose one of the existing sites or create a new one. › 
    ❯ Create a new site
```
 It will prompt you for a `name`, `dist` directory location & `build command`

 - `name`: How you want to name the site
 - `dist`: The output directory where the site is located, for this template it's `packages/react-app/out`
 - `build command`: for this template it's `yarn react-app:build` this will be used to deploy the latest version either by CLI or Github Actions

> ⚠️ Take into consideration that the `yarn build` script deploys the contract to the `Alfajores` Network.


### 2. Deploy the site
After configuiring your `fleek.json` file, you can deployt the site by running

```
fleek sites deploy
```
After running it you will get an output like this:
```
 WARN! Fleek CLI is in beta, use it at your own discretion
  > Success! Deployed!
   > Site IPFS CID: QmP1nDyoHqSrRabwUSrxRV3DJqiKH7b9t1tpLcr1NTkm1M

    > You can visit through the gateway:
     > https://ipfs.io/ipfs/QmP1nDyoHqSrRabwUSrxRV3DJqiKH7b9t1tpLcr1NTkm1M
```

### Extra features
- **Continuous Integration (CI):** `fleek sites ci` [Documentation.](https://docs.fleek.xyz/services/sites/#continuous-integration-ci)
- **Adding custom domains:** `fleek domains create` [Documentation.](https://docs.fleek.xyz/services/domains/)


### Keep in mind:

This template is based on [celo-composer](https://github.com/celo-org/celo-composer) with minimal modification to generate the `packages/react-app/contracts/contracts.json` and on `react-app` to generate a static build suitable for deployment on [Fleek](https://fleek.xyz/)

The `react-app` package has been configured to produce a static output.

```js
// next.config.js 
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  ...
}
```

You can find more information about static builds in [Next Documentation](https://nextjs.org/docs/app/building-your-application/deploying/static-exports#configuration)

## 👀 Want to learn more?

Feel free to check [Celo documentation](https://docs.celo.org/) or jump into Celo's [Discord server](https://chat.celo.org/).

