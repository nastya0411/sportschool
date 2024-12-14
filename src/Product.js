import Header from './Header';
import Footer from './Footer';
import fourth from "./images/catalog/4.png";
import './Rating.css';
import { useState } from 'react';
import fruits from './images/notes/fruits.png'
import roses from './images/notes/roses.png'
import amber from './images/notes/amber.png'
import jackline from './images/socialmedia/jackline.png'
import andry from './images/socialmedia/andry.png'
import { useContext } from "react";
import { CartContext } from "./contexts/CartContextProvider";
import { Link as RouterLink } from "react-router-dom";

const formatter = new Intl.NumberFormat('ru-RU', {
  style: 'currency',
  currency: 'RUB',
});

function Product() {
  const [count, setCount] = useState(1);

  let item = {
    id: 3,
    img: fourth,
    title: "Luxurious Elixir",
    description: "Окунитесь в мир непревзойденной роскоши с Luxurious Elixir, изысканным ароматом, который сплетает чарующую симфонию золота и роскоши. Этот позолоченный эликсир - это праздник изысканности, созданный с использованием лучших эссенций и наполненный очарованием драгоценных золотых оттенков.",
    price: 25000,
    count: count,
  }

  let { cart, setCart } = useContext(CartContext);

  function handleClick() {
    cart[item.id] = item;
    setCart(structuredClone(cart));
  }

  function clickMinus() {
    if (count > 1) {
      setCount(count - 1);
    }
  }

  function clickPlus(){
    if (count < 10) {
      setCount(count + 1);
    }
  }

  return(
    <div className = "font-medium bg-black tracking-[.25rem]">
        <Header />
        <div className = "object-left-top text-2xl text-mainOrange tracking-[.4rem] px-20 md:px-64 lg:px-64 flex flex-row gap-x-9 pt-5" >
          <RouterLink to = '/'><p>Главная </p></RouterLink>
          <p > / </p>
          <RouterLink to = '/catalog'><p>Каталог</p></RouterLink>
          <p > / </p>
          <RouterLink to = '/product'><p >Товар</p></RouterLink>
        </div>
        <div className='flex'>
          <div className='object-contain -mt-2 ps-2 md:ps-20 lg:ps-72'>
            <img className = "w-[750px] md:w-[850px] lg:w-[550px] " src = {fourth} alt = "продукт"/>
          </div>
          <div className='flex flex-col justify-items-start w-[700px] gap-10 tracking-[.2rem] pt-20 '>
              <p className = 'text-white text-4xl font-semibold'>{item.title}</p>
              <p className = 'text-white text-xl'>{item.description}</p>
              <div className="rating-result flex items-center">
                      <span className="active"></span>
                      <span className="active"></span>    
                      <span className="active"></span>  
                      <span className="active"></span>
                      <span className="active"></span>
                      <p className = 'text-white text-sm px-2 '>(90) Отзывов и оценок</p>
              </div>
              <p className='text-mainOrange text-4xl tracking-[.1rem]'>{formatter.format(item.price)}</p>
              <div className="flex items-cente">                  
                <p className = 'text-white pr-10 text-lg py-5 font-semibold'>Количество</p>
                <div className="flex items-center place-self-center text-white tracking-[.25rem] border-solid border-orange-800 border flex rounded-xl text-2xl ">
                  <p className={'pl-6 py-3 pr-6 rounded-l-xl transition-all' + (count <= 1 ? ' text-gray-600' : ' cursor-pointer hover:bg-orange-800')} onClick={clickMinus}>-</p>
                  <p className='px-4 py-3'>{count}</p>
                  <p className={'pl-6 py-3 pr-6 rounded-r-xl transition-all' + (count >= 10 ? ' text-gray-600' : ' cursor-pointer hover:bg-orange-800')} onClick={clickPlus}>+</p>
                </div>
              </div>
                  <button onClick={handleClick}  type = "button" className = "bg-white py-[15px]  px-[70px] md:px-[30px] lg:px-[70px] flex self-center rounded-xl text-3xl">
                    <p className = "flex w-full text-mainOrange tracking-[.25rem] font-semibold ">В корзину</p>
                  </button>
              </div>
              
        </div>
          <div className = 'text-white flex items-start pt-8 flex-col gap-10'>
            <p className = 'text-3xl font-semibold px-32 md:px-60 lg:px-60 '>Информация о продукте</p>
            <p className = ' text-xl pl-16 md:pl-16 lg:pl-60'>Этот эликсир открывается великолепным аккордом сияющих цитрусовых и поцелованных<br /> солнцем фруктов, напоминающим о золотых лучах, выражающих 
            ваши чувства. <br />Восхитительный аромат раскрывается букетом бархатистых роз и редких цветов,<br /> их эссенция излучается очарованием позолоченных лепестков. 
             Когда парфюм оседает,<br /> роскошная смесь теплой амбры, сливочной ванили и мягкого сандалового дерева вызывает <br />ощущение абсолютной роскоши и утонченности.</p>
             <p className = 'text-3xl font-semibold px-56 md:px-80 lg:px-60'>Ноты аромата</p>
              <div className='grid grid-cols-3 text-center px-0 md:px-16 lg:px-60 gap-x-7 md:gap-x-4 lg:gap-x-0'>
                <div className='flex flex-col justify-between items-center'>
                  <p className = 'text-3xl'>Верхние ноты</p>
                  <p className = 'text-2xl'>Апельсин, виноград, яблоко</p>
                  <img className = "h-64"src = {fruits} alt = "фрукты"/>
                </div>
                <div className='flex flex-col justify-between items-center'>
                  <p className = 'text-3xl'>Средние ноты</p>
                  <p className = 'text-2xl'>Белые розы, жасмин</p>
                  <img className = "h-64"src = {roses} alt = "розы"/>
                </div>
                <div className='flex flex-col justify-between items-center'>
                  <p className = 'text-3xl'>Базовые ноты</p>
                  <p className = 'text-2xl'>Амбра, ваниль, сандаловое дерево</p>
                  <img className = "h-64"src = {amber} alt = "амбра"/>
                </div>
              </div>
          </div>
          <div className=' justify-between items-center pt-10 md:pt-10 lg:pt-40'>
            <p className = 'text-mainOrange text-4xl font-semibold text-center'>Отзывы</p>
          </div>
            <div className='text-white flex  px-10 md:px-16 lg:px-60 flex flex-col pb-5'>
              <div className='flex items-left '>
              <img className = "h-10 w-10"src = {andry} alt = "андрей"/>
                <div className="rating-result py-3 pl-5 ">
                          <span className="active"></span>
                          <span className="active"></span>    
                          <span className="active"></span>  
                          <span className="active"></span>
                          <span className="active"></span></div>
                </div>
                <p className = ' text-xl'>Очень приятный аромат. Рекомендую тем, кто ищет сочетание сладости и элегантности в парфюмерии.<br />
                Мне нравятся цветочные духи, а этот аромат прекрасен. Я доволен покупкой. Отличный подарок <br /> для моей девушки.</p>
                <div className='flex gap-20'>
                  <p className = 'text-base pt-5'>Андрей Петров</p>
                  <p className = 'text-base pt-5'>05 Января, 2023</p>
                </div>
              </div>
              <div className='text-white flex  px-10 md:px-16 lg:px-60 flex flex-col pb-20'>
              <div className='flex items-left '>
              <img className = "h-10 w-10"src = {jackline} alt = "жаклин"/>
                <div className="rating-result py-3 pl-5 ">
                          <span className="active"></span>
                          <span className="active"></span>    
                          <span className="active"></span>  
                          <span className="active"></span>
                          <span className="active"></span></div>
                </div>
                <p className = ' text-xl'>Обожаю легкие ароматы, а этот просто прелесть, он не навязчивый. Приятный аромат. Пользуюсь<br /> каждый день.</p>
                <div className='flex gap-20'>
                  <p className = 'text-base pt-5'>Жаклин Ширак</p>
                  <p className = 'text-base pt-5'>03 Июля, 2023</p>
                </div>
              </div>
        <Footer />
    </div>
  );
  
}

export default Product;

