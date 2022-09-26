import Box from '../components/Box'
import Card from '../components/Card'
import Search from '../components/Search'
import Header from '../section/Header'
import Nav from '../section/Nav'
import dataNews from "../data/news.json"
import Button from '../components/Button'
import { sortDate,dateToStr } from '../utils/func'
import { useEffect,useState } from 'react'
import Link from 'next/link'
import Footer from '../section/Footer'

export default function News() {

    const [data,setData] = useState([]);
    const [srch,setSrch] = useState("");
    const [show,setShow] = useState(6);

    useEffect(()=>{
        setData(sortDate(dataNews,'desc'));
    },[]);

  return (
    <>
        <Nav/>
        <Header
        type='second'
        img="/assets/images/imgBerita.jpg"
        title="Kabar Berita"
        sub={"Temukan semua kabar berita dan informasi terkini dari DPM FILKOM"}
        />
        <main className='bg-white'>
            <Box className={"py-16"}>
                <div className='lg:w-2/3 mx-auto'>
                    <Search placeholder={"cari kabar berita"} setValue={(e)=>{setSrch(e)}}/>
                </div>
                <section className='md:flex md:flex-wrap mt-10'>
                    {data.filter((e)=>{
                        return e.title.toLowerCase().match(srch.toLowerCase());
                    }).map((e,i)=>{
                        if(i >= show){
                            return false
                        }{
                            return(
                                <div key={i}
                                className="px-2 pb-4 md:w-1/2 lg:w-1/3"
                                >
                                    <Link href={`/news/${e.slug}`}>
                                        <a>
                                            <Card
                                            type={"news"}
                                            title={e.title}
                                            img={e.photo}
                                            date={dateToStr(e.date)}
                                            />
                                        </a>
                                    </Link>
                                </div>
                            )
                        }
                    })}
                </section>
                <div className="flex justify-center">
                        <Button
                        className={`${show >= data.length ? "hidden" : 'block'}`}
                        onClick={()=>{setShow(show+3)}}
                        type={"button"}
                        style="wideout"
                        color={"red"}>Load More</Button>
                    </div>
            </Box>
        </main>

        <Footer/>
    </>
  )
}
