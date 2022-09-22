import Footer from '../section/Footer'
import Header from '../section/Header'
import Nav from '../section/Nav'
import NewsHome from '../section/NewsHome'
import SamKoor from '../section/SamKoor'
import VIsiMIsion from '../section/VIsiMIsion'

export default function index() {

    return (
        <div>
            <Nav/>
            <Header/>
            <SamKoor/>
            <VIsiMIsion/>
            <NewsHome/>
            <Footer/>
        </div>
    )
}
