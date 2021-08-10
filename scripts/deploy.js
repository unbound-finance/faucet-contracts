// We require the Hardhat Runtime Environment explicitly here. This is optional 
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile 
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const Faucet = await hre.ethers.getContractFactory("Faucet");
  const ERC20 = await hre.ethers.getContractFactory("ERC20");

  const network = "kovan"

  const faucet = await Faucet.deploy("0x22CB224F9FA487dCE907135B57C779F1f32251D4")

  const owner = "0x22CB224F9FA487dCE907135B57C779F1f32251D4"


  // const tDAI = await ERC20.deploy("Uniswap V3 Test DAI", "uniDAI", 18, "1000000000000000000000000000000000", owner);
  // const tETH = await ERC20.deploy("Uniswap V3 Test WETH", "uniWETH", 18, "1000000000000000000000000000000000", owner);

  await faucet.addToken("0xF821ddD9068B75F0d906f066590c646085B9fF3a", "1000000000000000000000")
  await faucet.addToken("0xf35acA6667C80705fFB21a84ab39F1ac9a4b00fE", "400000000000000000")

  console.log("✓ Contract Verification")
  console.log({
    // TDAI: `npx hardhat verify --network ${network} ${tDAI.address} "Uniswap V3 Test DAI" "uniDAI" "18" "1000000000000000000000000000000000" "${owner}"`,
    // TETH: `npx hardhat verify --network ${network} ${tETH.address} "Uniswap V3 Test WETH" "uniWETH" "18" "1000000000000000000000000000000000" "${owner}"`,
    Faucet: `npx hardhat verify --network ${network} ${faucet.address} "0x22CB224F9FA487dCE907135B57C779F1f32251D4"`,
  })
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
