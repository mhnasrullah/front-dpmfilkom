import React from 'react'
import Text from './Text'

export default function DetailNews({title,date,img,text}) {
  return (
    <div className='bg-white text-black shadow-[#10101022] shadow-lg py-12 px-4 rounded-lg relative'>
        <img src="/assets/decors/logo.png" className='absolute h-[500px] bottom-0 right-0' />
        <div className='md:flex md:justify-between md:items-end relative'>
            <Text type={"head"} color="yellow">{title}</Text>
            <p className='text-gold'>{date}</p>
        </div>
        <div className='mt-8 lg:flex relative'>
            <img src={img} className="w-full lg:mr-8 lg:w-1/3 rounded-lg" />
            <p className='mt-6 lg:w-2/3'>{text}</p>
        </div>
    </div>
  )
}
