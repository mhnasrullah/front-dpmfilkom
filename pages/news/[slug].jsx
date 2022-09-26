import Nav from '../../section/Nav';
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import dataNews from '../../data/news.json'
import Box from '../../components/Box';
import DetailNews from '../../components/DetailNews';
import Text from '../../components/Text';
import Link from 'next/link';
import Card from '../../components/Card';
import { dateToStr,sortDate } from '../../utils/func';
import { Swiper,SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import "swiper/css"
import "swiper/css/navigation"
import Footer from '../../section/Footer';

export default function DetailNewsletter() {
    const router = useRouter();
    const {slug} = router.query;
    const [data,setData] = useState({});
    const [recNews,setRecNews] = useState([]);

    useEffect(()=>{
        const news = dataNews.filter(({slug : slugi})=>{
            return slugi == slug;
        })[0];
        setData(news);
        setRecNews(sortDate(dataNews,'desc'));
    });

    return (
    <div>
        <Nav activeNews/>
        <main className='bg-white'>
            <Box className={"pt-[80px] pb-5"}>
                <DetailNews
                title={data?.title}
                date={data?.date ? dateToStr(data.date) : data?.date}
                img={data?.photo}
                text={data?.content}
                />
            </Box>
        </main>
        <section className='py-16 bg-white'>
            <Box>
                <Text type={"title"} color="red">Another News</Text>
                <Swiper
                    className='mt-4'
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


                        {recNews.filter((e)=>{
                            return e.slug != slug
                        }).map((e,i)=>{
                            if(i>=3){
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
            </Box>
        </section>
        <Footer/>
    </div>
  )
}
