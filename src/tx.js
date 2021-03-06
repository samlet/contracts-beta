const Web3 = require('web3');
const { setupLoader } = require('@openzeppelin/contract-loader');

async function main() {
    // Set up web3 object, connected to the local development network
    const web3 = new Web3('http://localhost:8545');
    const loader = setupLoader({ provider: web3 }).web3;

    // Retrieve accounts from the local node
    const accounts = await web3.eth.getAccounts();
    const address = '0xCfEB869F69431e42cdB54A4F4f105C19C080A601';
    const box = loader.fromArtifact('Box', address);

    // Send a transaction to store() a new value in the Box
    await box.methods.store(20)
        .send({ from: accounts[0], gas: 50000, gasPrice: 1e6 });

    // Call the retrieve() function of the deployed Box contract
    const value = await box.methods.retrieve().call();
    console.log("Box value is", value);
}

main();
