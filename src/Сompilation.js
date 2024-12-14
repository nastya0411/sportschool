import Header from './Header';
import Footer from './Footer';
import first from "./images/catalog/1.png";
import second from "./images/catalog/2.png";
import third from "./images/catalog/3.webp";
import { Link } from 'react-router-dom';
import { Link as RouterLink } from "react-router-dom";

const formatter = new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
  });

function Сompilation(){
    return(
        <div className = "font-medium bg-black tracking-[.25rem] grid gap-y-10  text-white">
        <Header />
        <div className = "object-left-top text-2xl text-mainOrange tracking-[.4rem] px-64 flex flex-row gap-x-9" >
          <RouterLink to = '/'><p>Главная </p></RouterLink>
          <p > / </p>
          <RouterLink to = '/podbor'><p>Подборки</p></RouterLink>
          <p > / </p>
          <RouterLink to = '/compilation'><p>Ароматы для неё</p></RouterLink>
        </div>
            <div className = "flex flex-col items-center py-[16px] pb-5">
                <p className = "text-mainOrange text-6xl tracking-[.4rem] p-3 border-b border-orange-800 rounded-sm w-5/6 text-center">Подборки ароматов</p>
            </div>
                <div className="flex justify-space-around gap-28 justify-center items-center px-64 h-44 py-5 ">
                    <div className="flex justify-center ">
                        <img src={first} className="h-52 cursor-pointer" alt="x" />
                    </div>
                    <div className='flex flex-col text-left mt-5 text-lg'>
                        <p>Верхние ноты: Апельсин, виноград, яблоко</p>
                        <p>Средние ноты: Белые розы, жасмин</p>
                        <p>Базовые ноты: Амбра, ваниль, сандаловое дерево</p>
                    </div>
                    <div><p className='text-mainOrange text-4xl tracking-[.1rem]'>{formatter.format(25000)}</p></div>
                    <div><Link  to = '/product' type = "button" className = "bg-mainOrange py-[15px] px-[30px] flex self-center justify-center rounded-xl text-2xl">
                        <p className = "flex w-full place-self-center text-white tracking-[.25rem]">Подробнее</p></Link>
                    </div>
                </div>
                <div className="flex justify-space-around gap-28 justify-center items-center px-64 h-44 py-5 ">
                    <div className="flex justify-center">
                        <img src={second} className="h-52 cursor-pointer" alt="x" />
                    </div>
                    <div className='flex flex-col text-left mt-5 text-lg'>
                        <p>Верхние ноты: Гречишный чай</p>
                        <p>Средние ноты: Цветок сакуры, абсолю туберозы</p>
                        <p>Базовые ноты: Амбра, ваниль, сандаловое дерево</p>
                    </div>
                    <div><p className='text-mainOrange text-4xl tracking-[.1rem]'>{formatter.format(27500)}</p></div>
                    <div><Link  to = '/product' type = "button" className = "bg-mainOrange py-[15px] px-[30px] flex self-center justify-center rounded-xl text-2xl">
                        <p className = "flex w-full place-self-center text-white tracking-[.25rem]">Подробнее</p></Link>
                    </div>
                </div>
                <div className="flex justify-space-around gap-28 justify-center items-center px-64 h-44 py-5">
                    <div className="flex justify-center">
                        <img src={third} className="h-52 cursor-pointer" alt="x" />
                    </div>
                    <div className='flex flex-col text-left mt-5 text-lg'>
                        <p>Верхние ноты: Бергамот, ваниль</p>
                        <p>Средние ноты: Пион, маргаритка</p>
                        <p>Базовые ноты: Ваниль, ветивер, ваниль, кардамон</p>
                    </div>
                    <div><p className='text-mainOrange text-4xl tracking-[.1rem]'>{formatter.format(22700)}</p></div>
                    <div><Link  to = '/product' type = "button" className = "bg-mainOrange py-[15px] px-[30px] flex self-center justify-center rounded-xl text-2xl">
                        <p className = "flex w-full place-self-center text-white tracking-[.25rem]">Подробнее</p></Link>
                    </div>
                </div>
        <Footer />
        </div>
    )
}

export default Сompilation;