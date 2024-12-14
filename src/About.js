import Header from './Header';
import Footer from './Footer';
import personal from "./images/about/personal.png";
import custom from "./images/about/custom.png";
import natural from "./images/about/natural.png";
import eco from "./images/about/eco.png";
import { Link as RouterLink } from "react-router-dom";

function About()
{
  return(
    <div className = "font-medium bg-black tracking-[.25rem]">
        <Header />
        <div className = "object-left-top text-2xl text-mainOrange tracking-[.4rem] px-64 flex flex-row gap-x-9 mb-5">
        <RouterLink to = '/'><p >Главная </p></RouterLink>
          <p > / </p>
          <RouterLink to = '/about'><p >О нас</p></RouterLink>
        </div>
        <div className=' flex flex-col items-center gap-14 w-full  bg-cover bg-center bg-[url(images/about/about1.png)] py-[165px] px-[300px] text-center text-white'>
            <p className = 'text-6xl'>О нас </p>
            <p className = 'text-xl tracking-[.2rem] indent-24'>В Mon Parfum убеждены, что парфюмерия - это нечто большее, чем просто ароматы, 
            это выражение индивидуальности и стиля человека. Наша страсть к изысканным ароматам привела нас к созданию коллекции, которая отражает сущность 
            самых разных личностей и дарит вам непревзойденные обонятельные ощущения.</p>
        </div>
        <div className='grid grid-cols-9 px-72'>
          <div className='flex flex-col pe-10 col-span-4'>
            <p className='text-mainOrange text-6xl tracking-[.4rem] object-contain mt-20 '>01.</p>
            <p className='text-white text-4xl text-white tracking-[.4rem]  object-contain mt-10 '>Персональные консультации по ароматам</p>
            <p className='text-white  text-white tracking-[.2rem]  object-contain mt-10 '>Выбор подходящего аромата может быть достаточно личным делом.
             Наша команда опытных парфюмерных экспертов готова помочь вам в этом процессе. Ищете ли вы фирменный аромат, подарок для любимого человека или вам нужна помощь
              в изучении новых семейств ароматов, наши консультанты уделят время тому, чтобы понять ваши предпочтения и предложить идеальный вариант.</p>
          </div>
          <div className='object-contain mt-20 col-span-5'>            
            <img className = "w-full" src = {personal} alt = "персонал"/>
          </div>
        </div>
        <div className='grid grid-cols-9 px-72'>
          <div className='object-contain mt-20 col-span-5'>            
            <img className = "w-full" src = {custom} alt = "создание"/>
          </div>
          <div className='flex flex-col ps-10 col-span-4'>
            <p className='text-mainOrange text-6xl tracking-[.4rem] object-contain mt-20 '>02.</p>
            <p className='text-white text-4xl text-white tracking-[.4rem]  object-contain mt-10 '>Создание аромата на заказ</p>
            <p className='text-white  text-white tracking-[.2rem]  object-contain mt-10 '>Сотрудничайте с нашими опытными парфюмерами, чтобы создать аромат, который будет уникальным для вас.
             От выбора отдельных нот до смешивания их в гармоничную симфонию, мы поможем вам воплотить в жизнь ваше видение аромата. Будь то особый случай, подарок дорогому человеку или просто 
             способ позволить себе роскошь, духи, созданные на заказ, - это незабываемые впечатления.</p>
          </div>
        </div>
        <div className='grid grid-cols-9 px-72'>
          <div className='flex flex-col pe-10 col-span-4'>
            <p className='text-mainOrange text-6xl tracking-[.4rem] object-contain mt-20 '>03.</p>
            <p className='text-white text-4xl text-white tracking-[.4rem]  object-contain mt-10 '>Использование натуральных масел и эфиров</p>
            <p className='text-white  text-white tracking-[.2rem]  object-contain mt-10 '>Мы производим наши ароматы исключительно из натуральных компанентов.
             Нам вожно, чтобы наши духи отличались не только приятным ароматом, но и отличной стойкостью, которую можно получить только благодаря природным ингридиентам.</p>
          </div>
          <div className='object-contain mt-20 col-span-5'>            
            <img className = "w-full" src = {natural} alt = "натуральные"/>
          </div>
        </div>
        <div className='grid grid-cols-9 px-72 pb-20'>
          <div className='object-contain mt-20 col-span-5'>            
            <img className = "w-full" src = {eco} alt = "экологичность"/>
          </div>
          <div className='flex flex-col ps-10 col-span-4'>
            <p className='text-mainOrange text-6xl tracking-[.4rem] object-contain mt-20 '>04.</p>
            <p className='text-white text-4xl text-white tracking-[.4rem]  object-contain mt-10 '>Производство без вреда для природы</p>
            <p className='text-white  text-white tracking-[.2rem]  object-contain mt-10 '>В Mon parfum мы придерживаемся принципов устойчивого развития и бережного отношения к 
            окружающей среде. Мы сотрудничаем с брендами, которые разделяют наши ценности и стремятся оказывать положительное влияние на планету.</p>
          </div>
        </div>
        <Footer />
    </div>
  );
  
}

export default About;