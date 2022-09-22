import Box from '../components/Box'
import Text from '../components/Text'
import React from 'react'

export default function ViMiAbout({type}) {

    if(type=="visi"){
        return (
          <section className='bg-s-white py-16 lg:w-1/3'>
            <Box>
                <Text type={"headOut"} color="white" className={"text-center"}>VISI</Text>
                <p className='mt-6 text-justify'>Mewujudkan DPM FILKOM UB yang bekerja secara profesional dan kekeluargaan, edukatif, berintegritas, aspiratif, serta menjalin relasi yang harmonis dan kontributif dengan berbagai sivitas akademika di FILKOM UB.</p>
            </Box>
          </section>
        )
    }

    if(type=="misi"){
        return (
          <section className='bg-white py-16 lg:w-2/3'>
            <Box>
                <Text type={"headOut"} color="white" className={"text-center mb-6"} >MISI</Text>
                <ul className='list-disc ml-4 text-justify relative z-10'>
                    <li>Membangun sistem koordinasi yang sinergis pada internal dan eksternal DPM FILKOM.</li>
                    <li>Meningkatkan branding dan mengedukasi mahasiswa FILKOM UB mengenai DPM FILKOM UB dan produk hukumnya dengan cara yang menarik dan mudah dipahami.</li>
                    <li>Menjalankan prinsip transparansi agar mahasiswa FILKOM UB dapat mengetahui kinerja dan alokasi dana kelembagaan di lingkup FILKOM UB</li>
                    <li>Menjadikan DPM FILKOM sebagai rumah aspirasi yang responsif bagi mahasiswa FILKOM.</li>
                    <li>Menyempurnakan produk hukum sesuai kebutuhan dan cita-cita KBMFILKOM.</li>
                </ul>
            </Box>
          </section>
        )
    }
}
