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

# Primary Deployments - Ethereum and Ethereum Testnets
Token contracts created by direct deployment by an EOA.
## Mainnet (Ethereum) - Main Deployment

Contract: https://etherscan.io/address/0x6bDdE71Cf0C751EB6d5EdB8418e43D3d9427e436

Roles and Wallets

-   Minter, Authority (Board of Directors): 0xa657a18cAaFBdb58536B8Ce366A570CD3dbCAc61
-   Pauser (Core DAO): 0x2268E2b8F7640a29752C5c58b8735906F4E84F60
-   Recipient is Bittrees Capital: 0x6e4063a6481ab48FED6eeEBceA440d3bFe1e5Dcd <https://app.safe.global/home?safe=eth:0x6e4063a6481ab48FED6eeEBceA440d3bFe1e5Dcd>

## Testnet (Sepolia) - Main Deployment

Contract: https://sepolia.etherscan.io/address/0x8389eFa79EF27De249AF63f034D7A94dFBdd4cBE

Roles and Wallets

-   Minter, Authority (Board of Directors): 0xa657a18cAaFBdb58536B8Ce366A570CD3dbCAc61        # gov.bittrees.eth
-   2nd Minter, For Testing (Tech subDAO): 0x2CB5C7bd24480C9D450eD07eb49F4525ee41083a         # tech.gov.bittrees.eth
-   Pauser (Core DAO): 0x2268E2b8F7640a29752C5c58b8735906F4E84F60                             # coredao.eth
-   2nd Pauser, For Testing (Tech subDAO): 0x2CB5C7bd24480C9D450eD07eb49F4525ee41083a         # tech.gov.bittrees.eth
-   Mint funds to Bittrees Capital: 0x6e4063a6481ab48FED6eeEBceA440d3bFe1e5Dcd                # capital.bittrees.eth
-   Mint more funds, For Testing (Tech SubDAO): 0x2CB5C7bd24480C9D450eD07eb49F4525ee41083a    # tech.gov.bittrees.eth

# Secondary Deployments - Chains the BTREE token is officially bridged to.

#### Roles and Wallets - Bridged Deployment
Not relevant or usable on bridged deployments. Secondary deployments cannot mint or pause their contracts, also limiting
the effectiveness of pausing the contract on Mainnet Primary Deployments. as such, consideration should be given to
renouncing the PAUSER_ROLE by all who have it, as well as the DEFAULT_ADMIN_ROLE considering the contract is not 
upgradeable. The MINTER_ROLE shall be retained for now as a defensive mechanism to protect against hostile takeover until
maturity is reach and more peace of mind is to be had in relinquishing that role irrecoverably.

## **Optimism:**
Deployed by calling on the createOptimismMintableERC20 on the 0x4200000000000000000000000000000000000012 precompile
contract using the L1 (Sepolia or Mainnet, respectively) BTREE contract address. After that, a PR should be made to
https://github.com/ethereum-optimism/ethereum-optimism.github.io to add the contract addresses to the repo so as to
signal/indicate the canonical L2 contract bridges should use for minting/burning when bridging L1 tokens to L2
### Optimism Mainnet
Contract: https://optimistic.etherscan.io/address/0xB260d236F5eA5094D31F016160705ff53ac45028

### Optimism Sepolia
Contract: https://sepolia-optimistic.etherscan.io/address/0x7E5A0b6C5c32883AE8E5b830c05688Eff317c3fb

## **Base:**
Same process as Optimism
### Base Mainnet
Contract: https://basescan.org/address/0x4aCFF883f2879e69e67B7003ccec56C73ee41F6f

### Base Sepolia
Contract: https://sepolia.basescan.org/address/0xF8c91a56db8485FCee21c5bf6345B063Cf4228F6

## **Arbitrum One:**
Deployed automatically by the bridge at a deterministic contract address when the token is first bridged to the chain.
Therefore there should not be multiple L2 contracts mapping back to the L1 contract, and the single L2 contract mapped
back to the L1 contract can be taken as canonical, negating the need to open a PR on github indicating the canonical
L2 contract.
### Arbitrum One Mainnet
Contract: https://arbiscan.io/address/0xa29871e78fc005d31982f942e1569265ba145a34

### Arbitrum Sepolia
Contract: https://sepolia.arbiscan.io/address/0x65414d6a6df9a139a462c2f43199de580a348df9





# Test Minting with Hardhat

```shell
cd contract
npx hardhat console --network testnet
```

```javascript
const Contract = await ethers.getContractFactory('BTREEToken');
const contract = await Contract.attach(
    '0x4DE534be4793C52ACc69A230A0318fF1A06aF8A0'
);

// minter role
await contract.grantRole(
    '0x9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6',
    '0xa657a18cAaFBdb58536B8Ce366A570CD3dbCAc61'
);
await contract.hasRole(
    '0x9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6',
    '0xa657a18cAaFBdb58536B8Ce366A570CD3dbCAc61'
);

// pauser role
await contract.grantRole(
    '0x65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a',
    '0x2268E2b8F7640a29752C5c58b8735906F4E84F60'
);
await contract.hasRole(
    '0x65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a',
    '0x2268E2b8F7640a29752C5c58b8735906F4E84F60'
);

await contract.balanceOf('0x7435e7f3e6B5c656c33889a3d5EaFE1e17C033CD');

// mint 5,000,000 BTREE
await contract.mint(
    '0x7435e7f3e6B5c656c33889a3d5EaFE1e17C033CD',
    '5000000000000000000000000'
);

// transfer 555,000 BTREE to another wallet
await contract.transfer(
    '0x458788Af51027917462c87AA6959269249CE8B4c',
    '555000000000000000000000'
);

// increaseAllowance by 550,000 BTREE for contract (`0x14dBB93a78B5e89540e902d1E6Ee26C989e08ef0`) wanting to spent it
// FIRST: ensure you are using test wallet that you want to increase allowance for
await contract.increaseAllowance(
    '0x14dBB93a78B5e89540e902d1E6Ee26C989e08ef0',
    '555000000000000000000000'
);

// owner and sender
await contract.allowance(
    '0x458788Af51027917462c87AA6959269249CE8B4c',
    '0x14dBB93a78B5e89540e902d1E6Ee26C989e08ef0'
);
```
