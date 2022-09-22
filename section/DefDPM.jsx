import React from 'react'
import Box from '../components/Box'
import Text from '../components/Text'
export default function DefDPM() {
  return (
    <section className='pt-[80px]'>
        <div className='bg-red py-16 text-white'>
            <Box>
                <Text type="head" className={"text-center"} color="yellow">MUTATIO FACTOREM</Text>
                <Text type="title" color={"white"} className="text-center mt-2 mb-10">Dewan Perwakilan Mahasiswa Fakultas Ilmu Komputer</Text>

                <p className='text-justify'>DPM FILKOM adalah badan perwakilan legislatif mahasiswa yang memiliki tugas untuk mengemban kedaulatan dan memberikan kebijakan yang mencerminkan keinginan mahasiswa FILKOM. Dengan kata lain, DPM FILKOM merupakan wakil mahasiswa yang akan mendengar seluruh kritik dan saran mahasiswa serta aktif dalam menuangkan pemikiran untuk menyusun suatu kebijakan yang akan diberlakukan dalam lingkungan mahasiswa.</p>
                <p className='text-justify mt-4 hidden md:block'>Di samping itu, badan legislatif mahasiswa juga dituntut untuk aktif mengawasi pelaksanaan dan mengevaluasi praktik–praktik penyelenggaraan sistem tersebut. Praktik–praktik penyelenggaraan dapat berupa kebijakan–kebijakan atau proses yang terjadi di dalam sistem tersebut. Hal ini bertujuan agar terjadi kontrol dan keseimbangan (check and balances) sehingga menghindarkan penumpukan kekuasaan yang berdampak pada absolutisme.</p>
                <p className='text-justify mt-4 hidden md:block'>DPM FILKOM merupakan wakil - wakil mahasiswa yang dipilih langsung oleh mahasiswa melalui pemilihan umum “PEMILWA FILKOM” dengan mekanisme yang telah ditetapkan. DPM FILKOM terdiri dari 5 anggota yang berasal dari 5 prodi yang berbeda yaitu Teknik Informatika, Teknik Komputer, Sistem Informasi, Pendidikan Teknologi Informasi, dan Teknologi Informasi.</p>
            </Box>
        </div>
    </section>
  )
}
