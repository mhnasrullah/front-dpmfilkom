import Nav from '../section/Nav'
import React from 'react'
import DefDPM from '../section/DefDPM'
import ViMiAbout from '../section/ViMiAbout'
import Tagline from '../section/Tagline'
import Footer from '../section/Footer'

export default function About() {
  return (
    <div className='bg-white text-black'>
        <Nav/>
        <DefDPM/>
        <div className="md:flex">
            <ViMiAbout type="visi"/>
            <ViMiAbout type="misi"/>
        </div>
        <Tagline/>
        <Footer/>
    </div>
  )
}
