import Link from 'next/link'
import Image from 'next/image'
import RefreshButton from './refresh-button'

export default function Methods() {
  const startTime = Date.now()
  const duration = Date.now() - startTime

  return (
    <div className="bg-white/30 p-12 shadow-xl ring-1 ring-gray-900/5 rounded-lg backdrop-blur-lg max-w-xl mx-auto w-full">
      <div className="flex justify-between items-center mb-4">
        <div className="space-y-1">
          <h2 className="text-xl font-semibold">Methods</h2>
          <p className="text-sm text-gray-500">
            in the this contract
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
            
            <Image
              src="https://p7.hiclipart.com/preview/950/62/368/computer-icons-winnie-palmer-hospital-for-women-babies-desktop-wallpaper-swap-sync.jpg"
              alt="swap"
              width={45}
              height={45}
              className="ring-1 ring-gray-900/5"
            />
            <div className="space-y-1">
              <Link href="/swap">
                <p className="font-medium leading-none">swap</p>
                <p className="text-sm text-gray-500">Exchange USDT to GBR</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
