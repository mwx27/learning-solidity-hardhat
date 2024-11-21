import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const FundraiseAdapterModule = buildModule("FundraiseAdapterModule", (m) => {

  const oldContractAddress = m.getParameter<string>(
    "oldContractAddress",
    "0x0000000000000000000000000000000000000000" 
    // Default value ^above^, to be replaced
    // Important note: to deploy new contract with other address, journal.jsonl needs to be removed first
  );

  // Deployment
  const fundraiseAdapter = m.contract("FundraiseAdapter", [oldContractAddress]);

  return { fundraiseAdapter };
});

export default FundraiseAdapterModule;
