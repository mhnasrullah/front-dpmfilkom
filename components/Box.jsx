import React from 'react'

export default function Box({className,children}) {

    let cl = "md:px-10 lg:px-16 px-4 ";
    if(className){cl+=className};
  return (
    <div className={cl}>{children}</div>
  )
}
