import Link from 'next/link'
import React, { useState } from 'react'

export default function Button({type,style,children,color,href,className,downText,onClick,_for,...props}) {
    let stl;


    const [openD,setOpen] = useState(false);

    if(style=='wideout'){
        const border = `border-${color}`;
        const text = `text-${color}`
        stl = `bg-trans w-full border-2 font-semibold md:w-1/2 lg:w-1/3 inline-block text-center rounded-full py-1 ${border} ${text}`
    }

    if(style=="wide"){
        const bg = `bg-${color}`
        stl = `w-full border-2 font-semibold md:w-1/2 lg:w-1/3 inline-block text-center rounded-full py-1 ${bg} text-white`
    }

    if(type=="anchor"){
        if(style=="wide" && _for=="product"){
            const bg = `bg-${color}`
            stl = `w-full border-2 font-semibold inline-block text-center rounded-full py-1 ${bg} text-white`
        }
        return(
            <a className={`${stl} ${className ? className : ' '} hover:scale-105 transition-all`} href={href} target="_blank" rel="noopener noreferrer">
                {children}
            </a>
        )
    }

    if(type=="link"){
        return (
          <Link href={href}><a className={`${stl} ${className ? className : ' '} hover:scale-105 transition-all`}>{children}</a></Link>
        )
    }

    if(type=="down"){
        return(
            <div className={openD ? "font-semibold" : "font-normal"}>
                <button type='button' onClick={()=>{setOpen(!openD)}}>{downText}</button>
                <div className={`${openD ? ' ' : 'hidden'}`}>
                    {children}
                </div>
            </div>
        )
    }

    if(type=="button"){
        return(
            <button className={`${stl} ${className? className : ' '} hover:scale-105 transition-all`} type="button" onClick={onClick}>{children}</button>
        )
    }
}
