import Box from '../components/Box'
import Text from '../components/Text'
import {Swiper,SwiperSlide} from 'swiper/react'
import { Navigation } from 'swiper'
import React, { useEffect,useState } from 'react'

import 'swiper/css'
import 'swiper/css/pagination'
import Card from '../components/Card'
import Button from '../components/Button'
import { sortDate,dateToStr } from '../utils/func'
import newsData from "../data/news.json"
import Link from 'next/link'

export default function NewsHome() {

    const [news,setNews] = useState([]);

    useEffect(()=>{
        setNews(sortDate(newsData,"desc"));
    },[])


  return (
    <section className='py-16 bg-s-white'>
        <Box>
            <Text
            type={"head"}
            className="text-center mb-6"
            color={"gold"}
            >Latest News</Text>

            <Swiper
            spaceBetween={20}
            modules={[Navigation]}
            breakpoints={{
                768 : {
                    slidesPerView : 2
                },
                992 : {
                    slidesPerView : 3
                }
            }}
            navigation={{
                nextEl : '.nextEl',
                prevEl : '.prevEl'
            }}
            slidesPerView={1}>
                <div className="flex justify-center mt-2">
                    <button type='button' className='prevEl text-2xl p-3 transition-all hover:-translate-x-5'><img src="/assets/icons/arr.svg" className='w-16' /></button>
                    <button type='button' className='nextEl text-2xl p-3 transition-all hover:translate-x-5'><img src="/assets/icons/arr.svg" className='w-16 -scale-[1]' /></button>
                </div>


                {news.map((e,i)=>{
                    if(i>=6){
                        return false;
                    }else{
                        return(
                            <SwiperSlide key={i}>
                                <Link href={`/news/${e.slug}`}>
                                    <a>
                                        <Card
                                        title={e.title}
                                        date={dateToStr(e.date)}
                                        type={"news"}
                                        img={e.photo}/>
                                    </a>
                                </Link>
                            </SwiperSlide>
                        )
                    }
                })}

            </Swiper>
            <div className="flex justify-center">
                <Button
                href={"/news"}
                style="wideout"
                color="red"
                className={"mt-6"}
                type={"link"}
                >Semua Kabar</Button>
            </div>
        </Box>
    </section>
  )
}
