import Header from './Header';
import Footer from './Footer';
import Gallery from './Gallery';
import { Link as RouterLink } from "react-router-dom";


function Podbor(){
    return(
        <div className = "font-medium bg-black tracking-[.25rem] grid gap-y-5 text-white">
        <Header />
        <div className = "object-left-top text-2xl text-mainOrange tracking-[.4rem] px-64 flex flex-row gap-x-9" >
          <RouterLink to = '/'><p>Главная </p></RouterLink>
          <p > / </p>
          <RouterLink to = '/podbor'><p>Подборки</p></RouterLink>
        </div>
        <div className = "bg-black flex flex-col items-center ">
          <p className = "text-mainOrange text-6xl tracking-[.4rem] border-b border-orange-800 rounded-sm w-5/6 text-center p-3">Подборки ароматов</p>
          <div className='w-[1750px] py-[25px]'>
            <Gallery />
          </div>
        </div>
        <Footer />
        </div>
    )
}

export default Podbor;