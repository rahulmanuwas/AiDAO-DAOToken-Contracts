module.exports = {
    networks: {
      development: {
        host: "localhost",
        port: 8545,
        network_id: "*" // Match any network id
      },
      rinkeby: {
        host: "localhost", // Connect to geth on the specified
        port: 8545,
        from: "0x2c1f5c34276ca05515154618e6294c30af773dd5", // default address to use for any transaction Truffle makes during migrations
        network_id: 4,
        gas: 4612388 // Gas limit used for deploys
      },
      live: {
        host: "localhost", // Connect to geth on the specified
        port: 8545,
        from: "0x2c1f5c34276ca05515154618e6294c30af773dd5", // default address to use for any transaction Truffle makes during migrations
        network_id: 1,
        gas: 6677200// Gas limit used for deploys
      }
    }
  };

