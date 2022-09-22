import React, { useState } from 'react'

export default function Search({placeholder,setValue}) {
    const [focus,setFocus] = useState(false)
  return (
    <div className={`py-2 px-3 rounded-lg ${focus ? 'border-2 border-red' : 'border-2 border-trans border-b-[#10101011]'}  flex`}>
        <img src="/assets/icons/search.svg" className='w-[20px]'/>
        <input placeholder={placeholder} type="text" className='relative rounded-none w-full bg-trans border-0 focus-visible:outline-none focus:outline-none focus:shadow-none focus:ring-0 ml-4' onChange={(e)=>{setValue(e.target.value)}} onFocus={()=>{setFocus(true)}} onBlur={()=>{setFocus(false)}}/>
    </div>
  )
}
