import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className='bg-cyan-900 text-center w-full text-sm'>
      copyright @ {currentYear} Get Me A Coffee - All rights reserved! 
    </div>
  )
}

export default Footer
