const hre = require("hardhat");
const { ethers } = require("hardhat");

async function main() {
  // We get the contract to deploy
  const Faucet = await ethers.getContractFactory("Faucet");

  const network = "bsctest";

  console.log("deploying faucet");
  const faucet = await Faucet.deploy(
    "0x22CB224F9FA487dCE907135B57C779F1f32251D4"
  );

  console.log(faucet.address);

  // console.log("✓ Contract Verification");
  // console.log({
  //   // TDAI: `npx hardhat verify --network ${network} ${tDAI.address} "Uniswap V3 Test DAI" "uniDAI" "18" "1000000000000000000000000000000000" "${owner}"`,
  //   // TETH: `npx hardhat verify --network ${network} ${tETH.address} "Uniswap V3 Test WETH" "uniWETH" "18" "1000000000000000000000000000000000" "${owner}"`,
  //   Faucet: `npx hardhat verify --network ${network} ${faucet.address} "0x22CB224F9FA487dCE907135B57C779F1f32251D4"`,
  // });
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
