import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <div className='text-center'>
      <h2>Creator Not found</h2>
      <p>could not find requested resource</p>
      <Link href={"/"}>return Home</Link>
    </div>

  )
}

export default page
