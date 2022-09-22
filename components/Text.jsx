import React from 'react'
import style from './style.module.css'

export default function Text({type,children,color,className}) {

    let textCol;

    if (color == "red"){
        textCol = "text-red"
    }else if (color == "gold"){
        textCol ="text-gold"
    }else if (color == "yellow"){
        textCol ="text-yellow"
    }else if (color == "white"){
        textCol ="text-white"
    }else{
        textCol = "text-black"
    }

    if(type == "title"){
        return (
          <h5 className={`${textCol} ${className} font-medium text-xl lg:text-2xl`}>{children}</h5>
        )
    }

    if(type == "headOut"){
        return (
            <h5 className={`${textCol} ${className} ${style.textStroke} font-bold text-4xl lg:text-5xl`} data-aos="fade-up">{children}</h5>
          )
    }

    if(type == "head"){
        return (
            <h5 className={`${textCol} ${className} font-bold text-4xl lg:text-5xl`}>{children}</h5>
          )
    }
}
