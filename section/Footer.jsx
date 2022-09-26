import React from 'react'
import Text from '../components/Text'
import Box from '../components/Box'

export default function Footer() {
  return (
    <footer className='bg-red text-white flex flex-col justify-center text-center py-16'>
        <Box>
            <Text type={"title"} color="white">SEKRETARIAT</Text>
            <div className='pt-4 text-sm lg:text-base'>
                <p>Gedung Kreativitas Mahasiswa Lantai 2</p>
                <p>Fakultas Ilmu Komputer Universitas Brawijaya</p>
                <p>Jalan Veteran Nomor 8, Lowokwaru, Malang, Jawa Timur 65145</p>
            </div>
            <div className='pt-10'>
                <Text type={"title"} color="white">Follow us</Text>
                <div className="flex justify-center mt-2">
                    <a href="https://www.instagram.com/dpmfilkomub/" target={'_blank'} rel="noopener noreferrer" className="hover:scale-105">
                        <img src="/assets/icons/ig.svg" className='mx-2'/>
                    </a>
                    <a href="https://www.youtube.com/channel/UCgTkPWmWzN_RAvTgg1lDdIQ" target={'_blank'} rel="noopener noreferrer" className="hover:scale-105">
                        <img src="/assets/icons/yt.svg" className='mx-2'/>
                    </a>
                    <a href="https://twitter.com/dpmfilkomub" target={'_blank'} rel="noopener noreferrer" className="hover:scale-105">
                        <img src="/assets/icons/tw.svg" className='mx-2'/>
                    </a>
                    <a href="https://www.linkedin.com/company/dpm-filkom-ub/about/" target={'_blank'} rel="noopener noreferrer" className="hover:scale-105">
                        <img src="/assets/icons/lin.svg" className='mx-2'/>
                    </a>
                </div>
            </div>
            <p className='text-center pt-10 text-sm lg:text-base'>©2022 PIT DPM FILKOM</p>
        </Box>
    </footer>
  )
}
