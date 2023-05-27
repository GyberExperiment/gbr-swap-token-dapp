import React, { useState, useCallback, useEffect } from "react";
import Link from 'next/link'
import Image from 'next/image'
import RefreshButton from './refresh-button'
import useSwapToken from "@/hooks/useSwapToken";

import useKeepSWRDataLiveAsBlocksArrive from "@/hooks/useKeepSWRDataLiveAsBlocksArrive";
import useSwapTokenContract from "@/hooks/useSwapTokenContract";


export default function SwapMethod() {
  const startTime = Date.now()
  const duration = Date.now() - startTime

  const tokenAddress = "0x65f92c0b2c571C1D8eC8916763D0533e543F3994";
  const contract = useSwapTokenContract(tokenAddress);

  const [value, setValue] = useState('');
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    if (isSending) {
      contract!.swap(value)
        .then(data => {
          console.log(data);
          alert("Транзакция успешно завершена!");
        })
        .catch(error => {
          console.log(error)
        })

        setIsSending(false)
    }
  }, [isSending, setIsSending])

  return (
    <div className="bg-white/30 p-12 shadow-xl ring-1 ring-gray-900/5 rounded-lg backdrop-blur-lg max-w-xl mx-auto w-full">
      <div className="flex justify-between items-center mb-4">
        <div className="space-y-1">
          <h2 className="text-xl font-semibold">Swap</h2>
          <p className="text-sm text-gray-500">
            function in the this contract
          </p>
        </div>
        <RefreshButton />
      </div>
      <div className="divide-y divide-gray-900/5">
        <div
          key="swap"
          className="flex items-center justify-between py-3"
        >
          <div className="flex items-center space-x-4">
            <div className="space-y-1">
              <input value={value} placeholder="0 USDT" onChange={e => setValue(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
              <p className="text-sm text-gray-500">Exchange USDT to GBR</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <button disabled={isSending} onClick={_ => setIsSending(true)} className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            Swap Token
          </button>
        </div>
      </div>
    </div>
  )
}
