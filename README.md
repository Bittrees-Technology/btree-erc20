# btree-erc20

![Solidity tests](https://github.com/briangershon/btree-erc20/actions/workflows/continuous-integration.yaml/badge.svg)

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

### Deploy to Mainnet

If you're happy with everything after testing locally and on testnet, it's time to deploy to production on Mainnet.

Use same instructions above for deploying to testnet but use `--network mainnet` command option instead.
