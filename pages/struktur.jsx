import Box from '../components/Box'
import Text from '../components/Text'
import Footer from '../section/Footer'
import Nav from '../section/Nav'
import React from 'react'

export default function struktur() {
  return (
    <>
        <Nav/>
        <section className='pt-40 bg-white'>
            <Box className={"min-h-screen pb-20"}>
                <Text type='headOut' color={"white"} className="text-center">STRUKTUR<br />DEWAN PERWAKILAN MAHASISWA</Text>
                <div className='pt-16'>
                    <img src="/assets/images/struktur.png"  className='w-full'/>
                </div>
            </Box>
        </section>
        <Footer/>
    </>
  )
}
