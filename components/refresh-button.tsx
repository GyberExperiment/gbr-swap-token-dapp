'use client'

import type { Web3Provider } from "@ethersproject/providers";
import { useRouter } from 'next/navigation'
import { useTransition } from 'react'
import { useWeb3React } from "@web3-react/core";
import { parseBalance } from "../lib/utils";
import useTokenBalance from "../hooks/useTokenBalance";

export default function RefreshButton() {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()

  const USDT_TOKEN_ADDRESS = "0x55d398326f99059fF775485246999027B3197955";

  const { account } = useWeb3React<Web3Provider>();
  const { data } = useTokenBalance(account!, USDT_TOKEN_ADDRESS);

  return (
    <button
      className={`${
        isPending ? 'cursor-not-allowed text-gray-400' : ''
      } text-sm text-gray-500 hover:text-gray-900`}
      disabled={isPending}
      onClick={() => {
        startTransition(() => {
          router.refresh()
        })
      }}
    >
      {isPending ? 'Refreshing...' : `${parseBalance(data ?? 0)} USDT`}
    </button>
  )
}
