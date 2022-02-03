//https://eth-ropsten.alchemyapi.io/v2/fUw0agr8F8Me-yV0fW-Skoytcys5-cJF


require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/fUw0agr8F8Me-yV0fW-Skoytcys5-cJF',
      accounts: ['f21ae0e7f584da4422eb2aa3991f6487dae4cb8bab7a668401efdc0db0d36d2f'],
    },
  },
};