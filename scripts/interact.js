// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");
const { ethers } = require("hardhat");
const { constants } = require("ethers");

async function main() {
  const network = "kovan";

  const owner = "0x22CB224F9FA487dCE907135B57C779F1f32251D4";
  const faucetAddress = "";

  const faucets = [""];

  for (let i; i < faucets.length; i++) {
    console.log(`⌛ Adding ${tokens[i].name}`);

    // approve tokens
    const token = await ethers.getContractAt("ERC20", tokens[i].address);
    await token.approve(faucet.address, await token.balanceOf(owner));

    console.log(" ✅ Approved");
  }
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
