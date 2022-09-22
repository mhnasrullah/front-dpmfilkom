import Box from '../components/Box'
import Card from '../components/Card'
import style from './style.module.css'
import React from 'react'

export default function VIsiMIsion() {
  return (
    <section className='bg-white py-16 relative'>
        <img src="/assets/decors/signal.svg" className={`absolute bottom-0 h-40 lg:h-96 -scale-x-[1] ${style.animatedScale}`} />
        <Box className="lg:flex relative">
            <Card type="vimi" title="VISI" className="w-full">
            <p>Mewujudkan DPM FILKOM UB yang bekerja secara profesional dan kekeluargaan, edukatif, berintegritas, aspiratif, serta menjalin relasi yang harmonis dan kontributif dengan berbagai sivitas akademika di FILKOM UB.</p>
            </Card>
            <img src="/assets/images/logoBig.png" data-aos="fade-up" className='mx-auto h-20 my-8 lg:h-96 lg:mx-20' />
            <Card type="vimi" title="MISI" className="w-full">
                <ul className='list-disc ml-4'>
                    <li>Membangun sistem koordinasi yang sinergis pada internal dan eksternal DPM FILKOM.</li>
                    <li>Meningkatkan branding dan mengedukasi mahasiswa FILKOM UB mengenai DPM FILKOM UB dan produk hukumnya dengan cara yang menarik dan mudah dipahami.</li>
                    <li>Menjalankan prinsip transparansi agar mahasiswa FILKOM UB dapat mengetahui kinerja dan alokasi dana kelembagaan di lingkup FILKOM UB</li>
                    <li>Menjadikan DPM FILKOM sebagai rumah aspirasi yang responsif bagi mahasiswa FILKOM.</li>
                    <li>Menyempurnakan produk hukum sesuai kebutuhan dan cita-cita KBMFILKOM.</li>
                </ul>
            </Card>
        </Box>
    </section>
  )
}
