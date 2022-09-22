import React from 'react'
import Text from './Text'
import style from './style.module.css'
import Button from './Button'

export default function Card({type,title,children,className,img,date,linkProduct}) {
    if(type=="vimi"){
        return (
          <div className={className}>
            <div className="before:absolute before:w-full before:h-8 before:bg-red before:-bottom-1 before:rounded-full relative">
                <Text type="headOut" color="white" className={"relative"} >{title}</Text>
            </div>
            <div className="bg-s-white rounded-b-lg -mt-4 pt-14 px-4 pb-10 lg:min-h-[400px]">
                {children}
            </div>
          </div>
        )
    }

    if(type=="news"){
        return(
            <div className={`relative before:absolute h-96 lg:h-[500px] before:inset-0 before:rounded-lg ${style.cardNews} hover:-translate-y-5 transition-all`}>
                <img src={img} alt="" className='h-96 lg:h-[500px] object-cover object-center rounded-lg'/>
                <div className='w-full absolute bottom-0 text-white p-4'>
                    <Text type="title" color="white">{title}</Text>
                    <p className='text-gold mt-2'>{date}</p>
                </div>
            </div>
        )
    }

    if(type=='product'){
        return (
            <div className={`bg-s-white p-4 rounded-lg ${className? className : ' '}`}>
                <div className="flex items-center">
                    <img src="/assets/icons/bookProduct.svg" />
                    <Text type={"title"} className="ml-4">{title}</Text>
                </div>
                <Button _for={"product"} type="anchor" style="wide" className="mt-4 w-full bg-gold" href={linkProduct}>Lihat</Button>
            </div>
        )
    }

    // return "card"
}
