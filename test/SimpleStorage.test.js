// test/SimpleStorage.test.js

// Load dependencies
const { accounts, contract } = require('@openzeppelin/test-environment');
const { expect } = require('chai');

// Load compiled artifacts
const SimpleStorage = contract.fromArtifact('SimpleStorage');

// Start test block
describe('SimpleStorage', function () {
    const [ owner ] = accounts;

    beforeEach(async function () {
        // Deploy a new SimpleStorage contract for each test
        this.contract = await SimpleStorage.new({ from: owner });
    });

    // Test case
    it('retrieve .. stored', async function () {        
        await this.contract.set(42, { from: owner });
        console.log('... result is '+(await this.contract.get()).toString());
        expect((await this.contract.get()).toString()).to.equal('42');
    });
});

