module.exports = async (hre) => {
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  const { address } = await deploy("Greeter", {
    from: deployer,
    args: ["hello world"],
    log: true,
  });


  console.log("Greeter uploaded at address:", address);
}

module.exports.tags = ['Greeter'];

