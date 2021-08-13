require('dotenv').config()
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    version: "0.8.0",
    settings: {
      optimizer: {
        runs: 200,
        enabled: true
      }
     }
    },
  networks: {
    testnetMatic: {
      url: `https://matic-mumbai.chainstacklabs.com`,
      accounts: [process.env.DEPLOYER_PRIVATE_KEY],
      chainId: 80001,
      gasPrice: 20000000000,
    }
  },

  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: "T9GV1IF4V7YDXQ8F53U1FK2KHCE2KUUD8Z"
  }
};