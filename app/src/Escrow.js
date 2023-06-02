import { Button, Td, Tr } from "@chakra-ui/react";
import useContract from "./useContract";

export default function Escrow({
  address,
  account,
  depositor,
  arbiter,
  beneficiary,
  isApproved,
  value,
}) {

  const canApprove = arbiter.toString().toLoweCase() === account.account.toString().toLowerCase();

  const { getContractByAddress, provider } = useContract();

  const approve = async () => {
    if (!canApprove) return;

    const escrowContract = getContractByAddress(address);
    const signer = provider.getSigner();
    const approveTxn = await escrowContract.connect(signer).approve();
    await approveTxn.wait();
  }


  return (
    <Tr>
      <Td>{depositor}</Td>
      <Td>{arbiter}</Td>
      <Td>{beneficiary}</Td>
      <Td>{value} ETH</Td>
      <Td>
        {isApproved ? (
          "Approved"
        ) : isAllowedToApprove ? (
          <Button onClick={() => approve()}>Approve</Button>
        ) : (
          "Pending Approval"
        )}
      </Td>
    </Tr>
  );
}
