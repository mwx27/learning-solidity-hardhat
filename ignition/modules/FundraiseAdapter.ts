import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const FundraiseAdapterModule = buildModule("FundraiseAdapterModule", (m) => {

  const oldContractAddress = m.getParameter<string>(
    "oldContractAddress",
    "0x0000000000000000000000000000000000000000" 
    // Default value ^above^, to be replaced here or with CLI parameter: --parameter oldContractAddress=0x123...
  );

  // Deployment
  const fundraiseAdapter = m.contract("FundraiseAdapter", [oldContractAddress]);

  return { fundraiseAdapter };
});

export default FundraiseAdapterModule;
