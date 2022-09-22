import Aos from 'aos'
import "aos/dist/aos.css"
import "../styles/globals.css"
import { useEffect } from 'react'

const App = ({ Component, pageProps }) => {
    useEffect(()=>{
        Aos.init();
    },[])
    return (
        <Component {...pageProps} />
    )
}

export default App
