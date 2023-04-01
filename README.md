# btree-erc20

![Solidity tests](https://github.com/Bittrees-Technology/btree-erc20/actions/workflows/continuous-integration.yaml/badge.svg)

Develop, test and deploy an ERC-20 contract based on OpenZeppelin Solidity framework and Hardhat development environment. Deploy to any EVM blockchain.

Tested with Node v18 (LTS).

Includes:

-   configuration for deploying to any EVM chain
-   suite of tests
    -   run tests locally with watcher (via `npm test`)
    -   use [Chai matchers from Waffle](https://ethereum-waffle.readthedocs.io/en/latest/matchers.html) (instead of OpenZeppelin Test Helpers)
    -   includes Github Action to run tests
    -   run gas report
    -   run code coverage report
-   generates TypeScript bindings via TypeChain (in `contract/typechain-types`)
-   monorepo-ready -- all contract code and tools are in `./contract` to make it easy to add UI or other pieces
-   solhint linter config (and then install plugin for your editor that supports solhint syntax highlighting)
-   format files with Prettier (`npm run style`)
-   turn on Solidity optimization (1000 means optimize for more high-frequency usage of contract). [Compiler Options](https://docs.soliditylang.org/en/v0.7.2/using-the-compiler.html#input-description)
-   add hardhat-etherscan for verifying contracts on PolygonScan (or Etherscan), which means uploading the source code so it's available for contract users to view/verify. For more info see [hardhat-etherscan plugin](https://hardhat.org/plugins/nomiclabs-hardhat-etherscan.html).

## Getting Started

Install dependencies and run tests to make sure things are working.

    cd contract
    npm install
    npm test

    npm run test:gas    # to also show gas reporting
    npm run test:coverage   # to show coverage, details in contract/coverage/index.html

## Create and Modifying your own Contract

For first-time setup after creating your repo based on this template, you'll want to rename the contract. Follow these steps:

-   Rename `BTREEToken.sol` to the contract name of your choice.
-   Search-and-replace `BTREEToken` throughout the code base.
-   You'll probably want to make some changes to `README.md` to make this your own.

Now, try running the tests again and make sure everything is working.

    cd contract
    npm test

## Deploying

### First setup configuration and fund your wallet

-   copy `.env.sample` to `.env`. Then view and edit `.env` for further instructions on configuring your RPC endpoints, private key and Etherscan API key.
-   for deploys to testnet, ensure your wallet account has some test currency to deploy. For example, on Polygon you want test MATIC via <https://faucet.polygon.technology/> For local testing, Hardhat already provides test currency for you on the local chain.

### Deploy to Testnet

-   cd contract
-   deploy via `npx hardhat run --network testnet scripts/deploy.js`
-   verify via `npx hardhat verify --network testnet CONTRACT_ADDRESS`

### Deploy to Mainnet

If you're happy with everything after testing locally and on testnet, it's time to deploy to production on Mainnet.

Use same instructions above for deploying to testnet but use `--network mainnet` command option instead.

## Live Contracts

Admin role: 0x0
Minter role: 0x9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6
Pauser role: 0x65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a

### Testnet (Goerli)

Contract: https://goerli.etherscan.io/address/0x1Ca23BB7dca2BEa5F57552AE99C3A44fA7307B5f

Assign minter and pauser role to `0xa657a18cAaFBdb58536B8Ce366A570CD3dbCAc61` and `0xE5350D96FC3161BF5c385843ec5ee24E8B465B2f` via `grantRole` method on contract.

### Mainnet (Ethereum)

Contract: 0x6bDdE71Cf0C751EB6d5EdB8418e43D3d9427e436

Roles and Wallets

-   Minter, Authority (Board of Directors): 0xa657a18cAaFBdb58536B8Ce366A570CD3dbCAc61
-   Pauser (Core DAO): 0x2268E2b8F7640a29752C5c58b8735906F4E84F60
-   Recipient is Bittrees Capital: 0x6e4063a6481ab48FED6eeEBceA440d3bFe1e5Dcd <https://app.safe.global/home?safe=eth:0x6e4063a6481ab48FED6eeEBceA440d3bFe1e5Dcd>
