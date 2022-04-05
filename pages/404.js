
import Link from 'next/link'
import React from 'react'

export default function PageNotFound() {
  return (
    <div className="absolute opacity-40 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
        <h1 className='text-9xl  font-black '>404</h1>
        <p className='text-3xl font-bold'>Page Not Found</p>
        <Link href="/">
            <span className='block font-semibold mt-5 px-5 py-2 cursor-pointer
              rounded bg-gray-700 hover:bg-gray-600'>
              Back to Home
              </span>
        </Link>
    </div>
  )
}
