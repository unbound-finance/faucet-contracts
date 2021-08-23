// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");
const { ethers } = require("hardhat");
const { constants } = require("ethers");

async function main() {
  console.log("adding tokens");

  const network = "kovan";

  const owner = "0x22CB224F9FA487dCE907135B57C779F1f32251D4";
  const faucetAddress = "0x1ED16E8Fb5FbEbf753DACA76B7B8ECf166868540";

  const faucet = await ethers.getContractAt("Faucet", faucetAddress);

  const tokens = [
    // {
    //   name: "ETH",
    //   address: "0x5cf4cfafe9ef13b96cd6c8de1723595653af4b64",
    //   amountToGive: "1000000000000000000",
    // },
    // {
    //   name: "DAI",
    //   address: "0xBc1975906ACb85F31d57E125877a1bD1d09a329a",
    //   amountToGive: "1000000000000000000000",
    // },
    // {
    //   name: "USDC",
    //   address: "0x78299cff6dCd659DD038E0a0C01f8795ED9f74e7",
    //   amountToGive: "1000000000",
    // },
    // {
    //   name: "USDT",
    //   address: "0xD105fABf3db502525b3277F24572A26204912CaF",
    //   amountToGive: "1000000000000000000000",
    // },
    // {
    //   name: "BNB",
    //   address: "0x1D6e6b7b6cCC2548EF8a0fA3C8c05D2371A2d13C",
    //   amountToGive: "1000000000000000000",
    // },
    // {
    //   name: "BUSD",
    //   address: "0xa9088BD7ED3050De193f1219AC2cBAA8277f65A8",
    //   amountToGive: "1000000000000000000000",
    // },
    {
      name: "BUSD_USDC_LP",
      address: "0x138136E466A586ccfDb3B5a8510332C3D61c6d0b",
      amountToGive: "5000000000000000000",
    },
    {
      name: "BUSD_USDT_LP",
      address: "0xd810Ca81306Ec87c73ad935F7334b2C2F6ce0171",
      amountToGive: "5000000000000000000",
    },
    {
      name: "BNB_DAI_LP",
      address: "0x19D4aB103eD6fd0D81E75427fa07EdCDDE8fcd89",
      amountToGive: "5000000000000000000",
    },
    {
      name: "ETH_DAI_LP",
      address: "0xac473048ac22d70d2f5838be037f405e4a9566e0",
      amountToGive: "1000000000000000000",
    },
    {
      name: "BUSD_DAI_LP",
      address: "0xf47aaEc9a32D84f7a0990Be064482FD8E3b22Dd9",
      amountToGive: "5000000000000000000",
    },
    {
      name: "USDC_USDT_LP",
      address: "0xD2114bb17232644f572CF4E7d329F09B3Ec7363f",
      amountToGive: "10000000000000000",
    },
    {
      name: "USDC_DAI_LP",
      address: "0x9283F695Cd5ac9aC33f8C99e8208F864F91aCb89",
      amountToGive: "10000000000000000",
    },
  ];

  // await faucet.removeAll(owner);

  for (let i = 0; i < tokens.length; i++) {
    console.log(`⌛ Adding ${tokens[i].name}`);

    // console.log(await faucet.tokens[i]);

    // // approve tokens
    const token = await ethers.getContractAt("ERC20", tokens[i].address);
    await token.approve(faucet.address, await token.balanceOf(owner));

    // console.log(" ✅ Approved");
    // add 50% of the owner balance to faucet contract
    const balance = await token.balanceOf(owner);
    let totalToAdd = parseInt(balance) / 2;

    let amountToGive = (totalToAdd * 0.0001).toFixed(5);

    console.log({ amountToGive });
    amountToGive = amountToGive.toLocaleString("fullwide", {
      useGrouping: false,
    });

    totalToAdd = totalToAdd.toLocaleString("fullwide", {
      useGrouping: false,
    });

    console.log({
      amountToGive: parseInt(amountToGive).toString(),
      totalToAdd,
    });

    // if (totalToAdd < tokens[i].amountToGive) {
    //   console.log(
    //     ` 🚫 amount is less for ${tokens[i].name}, amount should be less than ${totalToAdd}`
    //   );
    // }

    // add to the faucet
    await faucet.addToken(
      tokens[i].address,
      parseInt(amountToGive).toString(),
      totalToAdd
    );

    console.log(` ✅ Added ${tokens[i].name} to Faucet`);
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
