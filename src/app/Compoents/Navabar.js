import Link from 'next/link'
import React from 'react'

const Navabar = () => {
  return (
    <>
    <div>Logo</div>
    <div>
        <Link href="/services">Services</Link>
        <Link href="/ourmission">Our Mission</Link>
        <Link href="/careers">Careers</Link>
        <Link href="/aboutus">About Us</Link>
        <Link href="/contacus">Contact Us</Link>
        
    </div>
    </>
  )
}

export default Navabar