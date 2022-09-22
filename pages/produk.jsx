import Header from '../section/Header'
import Nav from '../section/Nav'
import Box from '../components/Box'
import React, { useEffect, useState } from 'react'
import {dateToStr, sortDate} from "../utils/func"
import Search from '../components/Search'
import Arsip from '../components/Arsip'
import data from '../data/produk.json'
import Card from '../components/Card'
import Button from '../components/Button'
import Footer from '../section/Footer'

export default function Produk() {
    const [allData,setData] = useState([]);
    const [srch,setSrch] = useState("");
    const [dateSrch,setDateSrch] = useState("");
    const [show,setShow] = useState(6);

    console.log(dateSrch)

    useEffect(()=>{
        setData(sortDate(data,'desc'))
    },[])


  return (
    <>
        <Nav/>
        <Header
        title="Produk Hukum"
        type='second'
        sub="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, aperiam labore eos nemo non optio ducimus fuga et placeat id Lorem ipsum dolor sit amet."
        img="/assets/images/imgProduk.jpg"/>
        <section className="bg-white py-16">
            <Box className={"lg:flex"}>
                <aside className='p-4 rounded-lg lg:bg-s-white lg:w-1/5 lg:mr-4 lg:h-fit'>
                    <Search placeholder="testtt" setValue={(e)=>{setSrch(e)}}/>
                    <Arsip data={allData} className={"mt-4 lg:mt-10"} getActive={(e)=>{setDateSrch(e)}}/>
                </aside>
                <main className='lg:w-4/5 mt-6 lg:mt-0 relative'>
                <img src="/assets/decors/logo.png" className='absolute h-96 lg:h-[500px] opacity-80 bottom-0 right-0' />
                    <div className='md:flex md:flex-wrap relative'>
                        {allData.filter((e)=>{
                            return dateToStr(e.date).toLowerCase().match(dateSrch.toLowerCase());
                        }).filter((e)=>{
                            return e.name.toLowerCase().match(srch.toLowerCase());
                        }).map((e,i)=>{
                            if(i>=show){
                                return false
                            }else{
                                return (
                                    <div key={i} className="md:w-1/2 lg:w-1/3">
                                        <Card
                                        className={"mb-4 mx-2"}
                                        type="product"
                                        linkProduct={e.link}
                                        title={e.name}/>
                                    </div>

                                )
                            }
                        })}
                    </div>
                    <div className="flex justify-center">
                        <Button
                        className={`${show >= allData.length ? "hidden" : 'block'}`}
                        onClick={()=>{setShow(show+3)}}
                        type={"button"}
                        style="wideout"
                        color={"red"}>Load More</Button>
                    </div>
                </main>
            </Box>
        </section>
        <Footer/>
    </>
  )
}
