/** Deploy:
 * $ npx oz deploy -k regular -n development -f 0x90F8bf6A479f320ead074411a4B0e7944Ea8c9C1 GLDToken 88
 *  => 0xCfEB869F69431e42cdB54A4F4f105C19C080A601
 * @type {Web3}
 */
const Web3 = require('web3');
const { setupLoader } = require('@openzeppelin/contract-loader');

async function main() {
    // Set up web3 object, connected to the local development network
    const web3 = new Web3('http://localhost:8545');
    const loader = setupLoader({ provider: web3 }).web3;

    // Retrieve accounts from the local node
    const accounts = await web3.eth.getAccounts();
    const address = '0xCfEB869F69431e42cdB54A4F4f105C19C080A601';
    const c = loader.fromArtifact('GLDToken', address);
    const value = await c.methods.balanceOf(accounts[0]).call();
    console.log(value);

    await c.methods.transfer(accounts[1], 20)
        .send({ from: accounts[0], gas: 0, gasPrice: 0 });

    console.log(await c.methods.balanceOf(accounts[0]).call());
    console.log(await c.methods.balanceOf(accounts[1]).call());
}

main();

