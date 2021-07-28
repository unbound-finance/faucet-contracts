// We require the Hardhat Runtime Environment explicitly here. This is optional 
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const {
    BigNumber,
    utils
  } = require("ethers");
  const {
    ethers
  } = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile 
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const Faucet = await ethers.getContractAt("Faucet", "0x27589e6ff5145f970ad35088c3e37715e041e1a0");
  await Faucet.addToken("0x2fB875e25366631d847eD07C7D5E00Ae695b3054", "1000000000000000000000")
  await Faucet.addToken("0x76802791950F103F443f89c0dbce6DdB457DBc34", "400000000000000000")//   const ERC20 = await hre.ethers.getContractAt("ERC20");

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
