import Text from '../components/Text'
import React from 'react'
import style from './style.module.css'

export default function Header({type = "main",title,sub,img}) {
    if(type == "main"){
        return (
          <section className='bg-white pt-[80px] pb-16 md:pb-10 relative'>
              <img src="/assets/decors/signal.svg" className={`${style.animatedScale} absolute h-40 lg:h-96 top-0 left-0 -scale-[1]`}/>
              <img src="/assets/decors/signal.svg" className={`${style.animatedScale} absolute h-40 lg:h-96 bottom-0 right-0`}/>
              <div className='flex flex-col-reverse md:flex-row relative md:items-center'>
                <div className='mx-4 md:pl-10 lg:pl-16 md:-mr-24 lg:-mr-72'>
                    <h1 className={`text-6xl md:text-7xl lg:text-9xl ${style.headerText} text-yellow font-bold -mt-10 relative`} data-aos="fade-up">MUTATIO FACTOREM</h1>
                    <p className='mt-10 font-medium text-black lg:text-2xl'>#DPMFILKOM</p>
                    <p className='font-medium text-black lg:text-2xl'>#RevolusiSinergi</p>
                </div>
                <img src="/assets/images/header.png" className='w-full'/>
              </div>
          </section>
        )
    }

    if(type == "second"){
        return(
            <section className='bg-s-white text-black pt-[80px] flex flex-col-reverse lg:flex-row lg:items-center relative pb-10'>
                <img src="/assets/decors/signal.svg" className={`bottom-0 absolute -scale-x-[1] h-52 ${style.animatedScale}`}/>
                <div className='mx-4 mt-10 md:pl-10 relative lg:mr-32 lg:w-1/2'>
                    <Text type="head" color="gold">{title}</Text>
                    <p className='lg:pl-10 mt-3 leading-7'>{sub}</p>
                </div>
                <img src={img} className='w-full h-52 lg:rounded-l-3xl md:h-72 lg:h-80 object-cover relative object-right-top'/>
            </section>
        )
    }
}
