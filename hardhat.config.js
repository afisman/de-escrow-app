require('@nomicfoundation/hardhat-toolbox');
const dotenv = require("dotenv")

dotenv.config();

const { SEPOLIA_URL } = process.env;

module.exports = {
  solidity: "0.8.17",
  defaultNetwork: "sepolia",
  networks: {
    sepolia: {
      url: SEPOLIA_URL,
    }
  },
  paths: {
    artifacts: "./app/src/artifacts",
  },
};
