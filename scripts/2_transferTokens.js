async function main() {

  // QuickSwap
  let ETH = "0x9187BEF12f16E7B40E0446f4cD7821e68149223f"
  let DAI = "0xb4b085E895396a076e784F148949c309cCAB7792"
  let USDC = "0xE6440846aD46d1ed8D37f5e0959296C044E1a721"
  let USDT = "0xe71151F4aa47c930766404c44F58fDB49fed4459"
  let MATIC = "0x0BFA1d1c2b1e27b12d5AaC7E34E621B7460feEDD"
  let ETH_DAI_LP = "0x6dBf98C35ad5f51E538270C6F48acB5A80b2E4Ff"
  let MATIC_DAI_LP = "0xF050E1ae57e7738E459a6180Aa5Da2e635267Ddc"
  let USDC_USDT_LP = "0x9b142C268ecdBd391F7Eebd19c3013F1CAaD6a6F"
  let USDC_DAI_LP = "0x34E346BA43ad0871a1D1733e85a630482a416B44"
  let USDT_DAI_LP = "0xBa918949608e43D1B81FaEda785E6FE07c5dc115"

  // DFYN
  let ETH2 = "0xb1b9BCEe4fE5762CC5E5fd4eb156944dC9EA8a55"
  let DAI2 = "0xfF5fbc5cD1C4720ddECF2777F57528C4BC74858b"
  let USDC2 = "0x305Bce02E89E529e7d63b632aA7f3830B7C53D21"
  let USDT2 = "0x32e6bE895a8aE7F27592cd00443aC4a5e0d3008a"
  let MATIC2 = "0x56D003A6673cC2DA38F7d68884efD8751f40E163"
  let ETH_DAI_LP2 = "0x784D4Cce3D45D696F091Ec20aad726637F73Dd36"
  let MATIC_DAI_LP2 = "0x8BB080f531b728085A54e49aC0bC06b29fde19bE"
  let USDC_USDT_LP2 = "0x9eD8e6ECe2aFbbE2c10f6A0d0fBf072b720557eF"
  let USDC_DAI_LP2 = "0x9465A554da22B376B55a057eecC79911bCd71da4"
  let USDT_DAI_LP2 = "0xFf956462170143d35fb3339629a1BdbdEeF60203"

  let faucetAddress = "0xc296a61E4dde6E5F954A44B92cD538cAa83F3c07"
    
  const tEth = await ethers.getContractAt("ERC20", ETH);
  const tDai = await ethers.getContractAt("ERC20", DAI);
  const tUsdc = await ethers.getContractAt("ERC20", USDC);
  const tUsdt = await ethers.getContractAt("ERC20", USDT);
  const tMatic = await ethers.getContractAt("ERC20", MATIC);

  const pairEthDai = await ethers.getContractAt("ERC20", ETH_DAI_LP);
  const pairMaticDai = await ethers.getContractAt("ERC20", MATIC_DAI_LP);
  const pairUsdcUsdt = await ethers.getContractAt("ERC20", USDC_USDT_LP);
  const pairUsdcDai = await ethers.getContractAt("ERC20", USDC_DAI_LP);
  const pairUsdtDai = await ethers.getContractAt("ERC20", USDT_DAI_LP);

  const tEth2 = await ethers.getContractAt("ERC20", ETH2);
  const tDai2 = await ethers.getContractAt("ERC20", DAI2);
  const tUsdc2 = await ethers.getContractAt("ERC20", USDC2);
  const tUsdt2 = await ethers.getContractAt("ERC20", USDT2);
  const tMatic2 = await ethers.getContractAt("ERC20", MATIC2);

  const pairEthDai2 = await ethers.getContractAt("ERC20", ETH_DAI_LP2);
  const pairMaticDai2 = await ethers.getContractAt("ERC20", MATIC_DAI_LP2);
  const pairUsdcUsdt2 = await ethers.getContractAt("ERC20", USDC_USDT_LP2);
  const pairUsdcDai2 = await ethers.getContractAt("ERC20", USDC_DAI_LP2);
  const pairUsdtDai2 = await ethers.getContractAt("ERC20", USDT_DAI_LP2);

  // sending amount x 1000 tokens. (All tokens can be requested for 1000 times)
  await tEth._mint(faucetAddress, "1000000000000000000000")
  await tDai._mint(faucetAddress, "1000000000000000000000000")
  await tUsdc._mint(faucetAddress, "1000000000000")
  await tUsdt._mint(faucetAddress, "1000000000000000000000000")
  await tMatic._mint(faucetAddress, "1000000000000000000000000")

  await pairEthDai.transfer(faucetAddress, "1000000000000000000000")
  await pairMaticDai.transfer(faucetAddress, "5000000000000000000000")
  await pairUsdcUsdt.transfer(faucetAddress, "10000000000000000000")
  await pairUsdcDai.transfer(faucetAddress, "10000000000000000000")
  await pairUsdtDai.transfer(faucetAddress, "5000000000000000000000")

  await tEth2._mint(faucetAddress, "1000000000000000000000")
  await tDai2._mint(faucetAddress, "1000000000000000000000000")
  await tUsdc2._mint(faucetAddress, "1000000000000")
  await tUsdt2._mint(faucetAddress, "1000000000000000000000000")
  await tMatic2._mint(faucetAddress, "1000000000000000000000000")

  await pairEthDai2.transfer(faucetAddress, "1000000000000000000000")
  await pairMaticDai2.transfer(faucetAddress, "5000000000000000000000")
  await pairUsdcUsdt2.transfer(faucetAddress, "10000000000000000000")
  await pairUsdcDai2.transfer(faucetAddress, "10000000000000000000")
  await pairUsdtDai2.transfer(faucetAddress, "5000000000000000000000")

  console.log("Token sent to faucet contract")
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
