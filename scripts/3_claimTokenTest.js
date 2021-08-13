async function main() {

  let faucetAddress = "0xc296a61E4dde6E5F954A44B92cD538cAa83F3c07"
  const developer = "0x2a40b9E03fa0BF9E9f2AC931D9dE27C7D8E17166"

  const faucet = await ethers.getContractAt("Faucet", faucetAddress);

  let tx = await faucet.releaseAll(developer, {gasLimit: 1000000})
  console.log("Transaction sent: " + tx.hash)
  
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
