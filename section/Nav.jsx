import Link from "next/link";
import Box from "../components/Box";
import { useEffect, useState } from "react";
import style from "./style.module.css";
import { useRouter } from 'next/router'

export default function Nav({activeNews}) {
    const [show,setShow] = useState(false);
    const [bg,setBg] = useState(false);
    const router = useRouter();

    useEffect(()=>{
        window.onscroll = () =>{
            if(window.scrollY > 20){
                setBg(true)
            }else{
                setBg(false)
            }
        }
    });

  return (
    <div>
        <Box className={`text-black fixed w-full z-50 ${bg ? 'bg-white' : 'bg-trans'}`}>
            <div className="py-2 lg:flex lg:justify-between lg:items-center">
                <div className="logo flex justify-between z-10 relative">
                    <img src="/assets/logo.png" className="h-16" />
                    <button type="button" className="lg:hidden" onClick={()=>{setShow(!show)}}>
                        <img src="/assets/icons/hamburger.svg" className="h-6 w-6 text-yellow"/>
                    </button>
                </div>
                <div className={`nav lg:bg-trans z- text-2xl h-screen lg:static fixed inset-0 bg-white flex flex-col lg:h-fit lg:flex-row lg:text-base lg:pt-0 items-center transition-all pt-24 ${!show ? "-top-[100%]" : ' '}`}>
                    <Link href={"/"}><a className={`my-3 lg:mx-6 relative ${router.pathname == '/' ? `${style.activeNav} font-medium` : style.nav}`}>Home</a></Link>
                    <Link href={"/about"}><a className={`my-3 lg:mx-6 relative ${router.pathname == '/about' ? ` ${style.activeNav} font-medium` : style.nav}`}>Tentang</a></Link>
                    <Link href={"/struktur"}><a className={`my-3 lg:mx-6 relative ${router.pathname == '/struktur' ? ` ${style.activeNav} font-medium` : style.nav}`}>Struktur</a></Link>
                    <Link href={"/news"}><a className={`my-3 lg:mx-6 relative ${router.pathname == '/news' || activeNews ? ` ${style.activeNav} font-medium` : style.nav}`}>Berita</a></Link>
                    <Link href={"/produk"}><a className={`my-3 lg:mx-6 relative ${router.pathname == '/produk' ? ` ${style.activeNav} font-medium` : style.nav}`}>Produk Hukum</a></Link>
                </div>
            </div>
        </Box>
    </div>
  )
}
