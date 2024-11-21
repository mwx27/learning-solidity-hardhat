import "@nomicfoundation/hardhat-toolbox";
import { vars } from "hardhat/config";
import * as dotenv from "dotenv";
dotenv.config();

const ALCHEMY_API_KEY = vars.get("ALCHEMY_API_KEY", process.env.ALCHEMY_API_KEY);
const SEPOLIA_PRIVATE_KEY = vars.get("SEPOLIA_PRIVATE_KEY", process.env.SEPOLIA_PRIVATE_KEY);

module.exports = {
  solidity: "0.8.27",
  defaultNetwork: "sepolia",
  networks: {
    sepolia: {
      url: `https://arb-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [SEPOLIA_PRIVATE_KEY]
    }
  }
};