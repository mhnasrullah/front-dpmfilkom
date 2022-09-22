import Box from '../components/Box'
import React from 'react'

export default function Tagline() {
  return (
    <section className='bg-white py-16 relative'>
        <img src="/assets/decors/logo.png" className='absolute h-96 lg:h-[800px] bottom-0 right-0' />
        <Box className={"relative"}>
            <img src="/assets/images/tagline.png" className='mx-auto w-full md:w-fit'/>
            <p className='text-justify lg:text-center mt-6 lg:w-1/2 lg:mx-auto'>Revolusi adalah perubahan yang berlangsung secara cepat dan menyangkut dasar dalam suatu bidang. Sinergi adalah membangun hubungan kerjasama yang produktif dan harmonis. Jadi, revolusi sinergi di sini adalah perubahan signifikan pada sistem DPM FILKOM yang bertujuan untuk menciptakan hubungan harmonis demi mencapai tujuan KBMFILKOM.</p>
        </Box>
    </section>
  )
}
