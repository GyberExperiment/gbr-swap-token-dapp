import TOKEN_SWAP_ABI from "../contracts/TokenSwap.json";
import type { TokenSwap } from "../contracts/types";
import useContract from "./useContract";

export default function useSwapTokenContract(tokenAddress: string) {
  return useContract<TokenSwap>(tokenAddress, TOKEN_SWAP_ABI);
}
