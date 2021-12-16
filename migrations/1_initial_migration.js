const Contract = artifacts.require('RubberduckFactory')

module.exports = function (deployer) {
  deployer.deploy(Contract, '0xf690f097cfddf66ea35af29a207b3445a104856f')
}
