import Box from '../components/Box'
import Text from '../components/Text'

export default function SamKoor() {
  return (
    <section className='bg-s-white'>
        <Box className="py-16 md:flex md:items-end">
            <div className={`relative before:bg-gold before:absolute before:inset-0 before:rounded-lg md:w-6/12 md:rounded-br-none lg:w-4/12`}>
                <img src="/assets/images/koor.jpg" className=' w-full h-[550px] md:h-80 lg:h-[450px] object-cover object-top rounded-lg md:rounded-br-none' data-aos="fade-up"/>
            </div>
            <div className='bg-white pb-4 px-4 pt-8 mx-4 md:m-0 rounded-lg -mt-72 lg:p-16 relative md:w-full md:h-fit md:rounded-l-none'>
                <p className='text-black md:text-sm lg:text-base lg:leading-8 md:max-h-40 lg:max-h-48 md:overflow-y-scroll'>Assalamualaikum Wr. Wb., Shalom, Om Swastiastu, Namo Buddhaya, Salam kebajikan. <br /><br />
                DPM FILKOM UB 2022 Kabinet Mutatio Factorem sebagai lembaga legislatif juga wakil mahasiswa FILKOM UB, turut serta untuk melakukan pengawasan terhadap kinerja BEM FILKOM agar adanya transparansi bagi mahasiswa, membentuk produk - produk hukum sebagai dasar kemahasiswaan FILKOM yang disesuaikan dengan kebutuhan mahasiswa juga lembaga mahasiswa di FILKOM, dan mendengarkan serta menyalurkan aspirasi dari mahasiswa FILKOM.b <br /><br />
                Dengan penerapan revolusi sinergi yang merupakan perubahan signifikan pada sistem DPM FILKOM yang bertujuan untuk menciptakan hubungan harmonis demi mencapai tujuan KBMFILKOM. <br /><br />
                Salam Hangat, Kabinet Mutatio Factorem.</p>
                <Text type="title" color="yellow" className="mt-8" >Aflah Fadhlurrahman</Text>
                <p className='text-sm lg:mt-1 text-gold'>Koordinator DPM FILKOM 2022</p>
                <img src="/assets/icons/say.svg" className='h-8 absolute -top-3 -right-3 lg:-top-6 lg:-right-6 lg:h-16'/>
            </div>
        </Box>
    </section>
  )
}
