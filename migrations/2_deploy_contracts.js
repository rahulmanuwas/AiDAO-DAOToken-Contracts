//var ConvertLib = artifacts.require("./ConvertLib.sol");
var DAOToken = artifacts.require("./DAOToken.sol");

module.exports = function(deployer) {
  deployer.deploy(DAOToken);
  //deployer.link(ConvertLib, MetaCoin);
  //deployer.deploy(MetaCoin);
};
