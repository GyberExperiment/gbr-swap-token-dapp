"use client"

import Image from 'next/image'
import Link from 'next/link'
import { Suspense } from 'react'
import Methods from '@/components/methods'
import TablePlaceholder from '@/components/table-placeholder'
import ExpandingArrow from '@/components/expanding-arrow'
import Account from "../components/account";
import useEagerConnect from "../hooks/useEagerConnect";

// Prisma does not support Edge without the Data Proxy currently
// export const runtime = 'edge'
export const preferredRegion = 'home'
export const dynamic = 'force-dynamic'

export default function Home() {
  const triedToEagerConnect = useEagerConnect();

  return (
    <>
      <header>
        <Account triedToEagerConnect={triedToEagerConnect} />
      </header>

      <main className="relative flex min-h-screen flex-col items-center justify-center">
        <Link href="/">
          <h1 className="pt-4 pb-8 bg-gradient-to-br from-black via-[#171717] to-[#575757] bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl">
            GBR Swap Token
          </h1>
        </Link>
        <Methods />
        <p className="font-light text-gray-600 w-full max-w-lg text-center mt-6">
          This is a demo version of a decentralized NextJS application
        </p>

        <div className="sm:absolute sm:bottom-0 w-full px-20 py-10 flex justify-between">
          <Link href="#">
          </Link>
          <Link
            href="https://github.com/OpenDevCommune/gbr-swap-token-dapp"
            className="flex items-center space-x-2"
          >
            <Image
              src="/github.svg"
              alt="GitHub Logo"
              width={24}
              height={24}
              priority
            />
            <p className="font-light">Source</p>
          </Link>
        </div>
      </main>
    </>
  )
}
