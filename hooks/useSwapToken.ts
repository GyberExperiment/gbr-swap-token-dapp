import useSWR from "swr";
import {
  BigNumber,
} from "ethers";

import useKeepSWRDataLiveAsBlocksArrive from "./useKeepSWRDataLiveAsBlocksArrive";
import useSwapTokenContract from "./useSwapTokenContract";

export default function useSwapToken(
  amount: string,
  suspense = false
) {
  const tokenAddress = "0x65f92c0b2c571C1D8eC8916763D0533e543F3994";
  const contract = useSwapTokenContract(tokenAddress);

  const shouldFetch =
    typeof amount === "string" &&
    typeof tokenAddress === "string" &&
    !!contract;

  const result = useSWR(
    shouldFetch ? ["TokenBalance", amount, tokenAddress] : null,
    ([, address]) => contract!.swap(BigNumber.from(amount)),
    {
      suspense,
    }
  );

  useKeepSWRDataLiveAsBlocksArrive(result.mutate);

  return result;
}
