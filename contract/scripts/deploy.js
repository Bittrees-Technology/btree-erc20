const { ethers } = require('hardhat');

async function main() {
    const [deployer] = await ethers.getSigners();
    console.log(
        'Deploy wallet balance:',
        ethers.utils.formatEther(await deployer.getBalance())
    );
    console.log('Deployer wallet public key:', deployer.address);

    const Contract = await ethers.getContractFactory('BTREEToken');
    const contract = await Contract.deploy();
    await contract.deployed();

    console.log(`BTREEToken contract deployed to: ${contract.address}`);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
