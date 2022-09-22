import React, { useEffect, useState } from 'react'
import {mappingArsip} from '../utils/func'
import Button from './Button';
import Text from './Text'

export default function Arsip({className,data,getActive}) {
    const [show,setShow] = useState(false);
    const dataAr = mappingArsip(data);
    const [act,setAct] = useState(null);


  return (
    <div className={className ? className : ' '}>
        <div className="lg:hidden">
            <button
            className='flex justify-between items-center w-full'
            onClick={()=>{setShow(!show)}}>
            <p className='text-gold font-medium text-lg'>Arsip</p>
            <img src="/assets/icons/drop.svg" className='h-[10px]'/>
            </button>
        </div>

        <div className="hidden lg:block">
            <p className='text-gold font-medium text-lg'>Arsip</p>
        </div>

        <div className={`${show ? 'block' : 'hidden lg:block'} mt-3 border-2 border-trans border-b-[#10101011]`}>
            <ul className='ml-6'>
                {dataAr.year.map((e,i)=>(
                    <li key={i} className='list-disc mb-2'>
                        <Button
                        type="down"
                        downText={e}>
                            <ul className='border-l-2 border-l-red pl-6 mt-2'>
                                {dataAr.monthYear.filter((d)=>{
                                    return d.year == e
                                }).map((d,i)=>(
                                    <li
                                    key={i}
                                    className='mb-1 font-normal'>
                                        <button
                                        className={`${d.month+' '+d.year == act ? 'font-semibold' : 'font-normal'}`}
                                        onClick={()=>{
                                            setAct(`${d.month} ${d.year}`);
                                            getActive(`${d.month} ${d.year}`);
                                        }}
                                        onBlur={()=>{
                                            setAct(null);
                                            getActive('');
                                        }}>
                                        {d.month}</button></li>
                                ))}
                            </ul>
                        </Button>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  )
}
