// test/Box.test.js

// Load dependencies
const { accounts, contract } = require('@openzeppelin/test-environment');
const { expect } = require('chai');

// Load compiled artifacts
const Roles = contract.fromArtifact('Roles');

/*
// Start test block
describe('Roles', function () {
    const [ owner ] = accounts;

    beforeEach(async function () {
        // Deploy a new Box contract for each test
        this.contract = await Roles.new({ from: owner });
    });

    // Test case
    it('retrieve roles', async function () {
        const minterCount = await myToken.getRoleMemberCount(MINTER_ROLE);

        const members = [];
        for (let i = 0; i < minterCount; ++i) {
            members.push(await myToken.getRoleMember(MINTER_ROLE, i));
        }
        console.log(members);
    });
});
*/
