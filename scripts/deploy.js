// We require the Hardhat Runtime Environment explicitly here. This is optional 
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
//todo : ADD LPT for 5 different tokens

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
 // const faucet = await Faucet.attach("0x6dBf98C35ad5f51E538270C6F48acB5A80b2E4Ff");




//lp token addresses
    const token1 =  await ERC20.attach("0x138136E466A586ccfDb3B5a8510332C3D61c6d0b");
    const token2 =  await ERC20.attach("0xd810Ca81306Ec87c73ad935F7334b2C2F6ce0171");
    const token3 =  await ERC20.attach("0xf47aaEc9a32D84f7a0990Be064482FD8E3b22Dd9");
    const token4 =  await ERC20.attach("0x9283F695Cd5ac9aC33f8C99e8208F864F91aCb89");
    const token5 =  await ERC20.attach("0xD2114bb17232644f572CF4E7d329F09B3Ec7363f");
    const token6 =  await ERC20.attach("0xac473048ac22d70d2f5838be037f405e4a9566e0");
    const token7 =  await ERC20.attach("0x19D4aB103eD6fd0D81E75427fa07EdCDDE8fcd89");
    const token8 =  await ERC20.attach("0x93A88114FD9e5bd25AB4b9017E7891DcC4B06d0c");
    const token9 =  await ERC20.attach("0xe7Fd4AbfcaF6323e77c5072d1c12947fE9A21b25");

    //checking the totalSupplyOfLPT
    const bal1= await token1.totalSupply();
    const bal2=   await token2.totalSupply();
    const bal3 = await token3.totalSupply();
    const bal4 =  await token4.totalSupply();
    const bal5 =await token5.totalSupply();
    const bal6 =  await token6.totalSupply();
    const bal7 =await token7.totalSupply();
    const bal8 = await token8.totalSupply();
    const bal9 = await token9.totalSupply();

console.log(bal1);
console.log(bal2);
console.log(bal3);
console.log(bal4);
console.log(bal5);
console.log(bal6);
console.log(bal7);
console.log(bal8);
console.log(bal9);

const faucet = await Faucet.deploy("0xDAa2031432cD9e07316A66d5c95B5A4434Ffc781");

   const developer = faucet.address;
    const tDAI =   await ERC20.deploy('Test DAI ','DAI', '18' , '100000000000000000000000000000', faucet.address);
   const tUSDT =   await ERC20.deploy('Test USDT ','USDC', '18' , '40000000000000000000000000000000', developer);
   const tUSDC =   await ERC20.deploy('Test USDC ','USDC', '18' , '40000000000000000000000000000000', developer);
   const tBNB =   await ERC20.deploy('Test BNB ','USDC', '18' , '400000000000000000000000000000000', developer);
   const tWETH =   await ERC20.deploy('Test WETH ','USDC', '18' , '4000000000000000000000000000000', developer);

    await faucet.addToken(tDAI.address,'10000000000000000');
    await faucet.addToken(tUSDT.address,'10000000000000000');
    await faucet.addToken(tUSDC.address,'10000000000000000');
    await faucet.addToken(tBNB.address,'10000000000000000');
    await faucet.addToken(tWETH.address,'10000000000000000');
console.log(bal1/100);
    await faucet.addToken(token1.address,bal1/10000);
    await faucet.addToken(token2.address,bal2/10000);
    await faucet.addToken(token3.address,bal3/10000);
    await faucet.addToken(token4.address,bal4/10000);
    await faucet.addToken(token5.address,bal5/10000);
    await faucet.addToken(token6.address,bal6/10000);
    await faucet.addToken(token7.address,bal7/10000);
    await faucet.addToken(token8.address,bal8/10000);
    await faucet.addToken(token9.address,bal9/10000);
    console.log(await faucet.totalTokens());
    await faucet.removeAllWithAmt('0x476646bb9593991cea12E53438862F9b9d437BB2','10000');
    // await faucet.addToken('0x138136E466A586ccfDb3B5a8510332C3D61c6d0b','100000');
     //await faucet.addToken('0xd810Ca81306Ec87c73ad935F7334b2C2F6ce0171','1000000000');
    // await faucet.addToken('0x138136E466A586ccfDb3B5a8510332C3D61c6d0b','100000');
    // await faucet.addToken('0x138136E466A586ccfDb3B5a8510332C3D61c6d0b','100000');
    // await faucet.addToken('0x138136E466A586ccfDb3B5a8510332C3D61c6d0b','100000');
  //   console.log(await faucet.totalTokens());
  //
  console.log ("✓ Contract Verification")
  // console.log ({
  //   Faucet: `npx hardhat verify --network ${network} ${faucet.address}`,
  //           // TDai:`tDai ${tDAI.address}`,
  //           // TUSDT:`tDai ${tUSDT.address}`,
  //           // TUSDC:`tDai ${tUSDC.address}`,
  //           // TWETH:`tDai ${tWETH.address}`,
  //           // TBNB:`tDai ${tBNB.address}`,
  //           // LPT:`tLPT ${tokenDeploy1.address}`
  // })
    }

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });
