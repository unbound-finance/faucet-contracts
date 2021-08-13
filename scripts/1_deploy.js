const hre = require("hardhat");

async function main() {

  const developer = "0x2a40b9E03fa0BF9E9f2AC931D9dE27C7D8E17166"
  // We get the contract to deploy
  const Faucet = await ethers.getContractFactory("Faucet");

  const faucet = await Faucet.deploy(developer)
  console.log("Faucet Deployed at: " + faucet.address)


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


  await faucet.addToken(ETH, "1000000000000000000") // 1 ETH
  await faucet.addToken(DAI, "1000000000000000000000") // 1000 DAI
  await faucet.addToken(USDC, "1000000000") // 1000 USDC
  await faucet.addToken(USDT, "1000000000000000000000") // 1000 USDT
  await faucet.addToken(MATIC, "1000000000000000000000") // 1000 MATIC
  
  await faucet.addToken(ETH2, "1000000000000000000") // 1 ETH
  await faucet.addToken(DAI2, "1000000000000000000000") // 1000 DAI
  await faucet.addToken(USDC2, "1000000000") // 1000 USDC
  await faucet.addToken(USDT2, "1000000000000000000000") // 1000 USDT
  await faucet.addToken(MATIC2, "1000000000000000000000") // 1000 MATIC

  await faucet.addToken(ETH_DAI_LP, "1000000000000000000") // 1
  await faucet.addToken(MATIC_DAI_LP, "5000000000000000000") // 0.5
  await faucet.addToken(USDC_USDT_LP, "10000000000000000") // 0.01
  await faucet.addToken(USDC_DAI_LP, "10000000000000000") // 0.01
  await faucet.addToken(USDT_DAI_LP, "5000000000000000000") // 5


  await faucet.addToken(ETH_DAI_LP2, "1000000000000000000") // 1
  await faucet.addToken(MATIC_DAI_LP2, "5000000000000000000") // 0.5
  await faucet.addToken(USDC_USDT_LP2, "10000000000000000") // 0.01
  await faucet.addToken(USDC_DAI_LP2, "10000000000000000") // 0.01
  await faucet.addToken(USDT_DAI_LP2, "5000000000000000000") // 5
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
