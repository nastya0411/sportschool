import { useContext } from "react";
import Header from './Header';
import Footer from './Footer';
import first from "./images/catalog/3.webp";

import { CartContext } from "./contexts/CartContextProvider";


const formatter = new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
  });
function Basket(){

    let { cart, cartSumm } = useContext(CartContext);
    
    let cartCardsJsx = [];

    for (let key of Object.keys(cart)) {
      cartCardsJsx.push(<CartProduct key={key} cartItem={cart[key]} />) ;
    }
    function alr(){
        alert("Ваш заказ оформлен!");
    }

    return(
        <div className = "font-medium bg-black tracking-[.25rem] grid text-white">
        <Header />
          <div className="flex flex-col py-8 ">
            {cartCardsJsx}
          </div>
            <div className="flex flex-col items-center pt-1"><p className='p-7 border-t border-mainOrange w-4/5 rounded-sm text-center font-extralight text-3xl'>
            Общая стоимость заказа: {formatter.format(cartSumm())}</p>
                            <div className=" text-center text-mainOrange text-4xl tracking-[.1rem] ">
                    <p className='text-white text-4xl tracking-[.1rem]'></p>
                </div>
            </div>
            <div className="">

                <div className="flex flex-col justify-center items-center gap-8">
                    <div>
                        <button onClick={alr} className="w-64 p-4 border border-solid border-black rounded-full
                            hover:bg-mainOrange hover:text-white hover:border-transparent hover:ease-in-out duration-300 text-2xl tracking-[.4rem] 
                            py-[15px] px-[30px] flex self-center justify-center rounded-xl text-4xl flex w-full place-self-center text-white tracking-[.25rem] mb-8">
                                Оформить заказ
                        </button>
                    </div>
                </div>
            </div>
  
        <Footer />
    </div>
    )
}

function CartProduct({ cartItem }) {

  let { cart, setCart } = useContext(CartContext);
  
  function clickMinus() {
    if (cartItem.count > 1) {
      cart[cartItem.id].count = cartItem.count - 1;
      setCart(structuredClone(cart));
    }
  }
  function clickPlus() {
    if (cartItem.count < 10) {
      cart[cartItem.id].count = cartItem.count + 1;
      setCart(structuredClone(cart));
    }
  }

  return (

    <div className="flex justify-space-around border-black border-b gap-28 my-16 justify-center items-center text-2xl px-1 h-44 py-5">
      <div className="flex justify-center">
          <img src={first} className="h-72 cursor-pointer" alt="x" />
      </div>
      <div className="text-center">{cartItem.title}</div>
      <div className="flex items-center place-self-center tracking-[.25rem] border-solid border-mainOrange border flex rounded-xl text-2xl ">
        <p className={'pl-6 py-3 pr-6 rounded-l-xl transition-all' + (cartItem.count <= 1 ? ' text-gray-600' : ' cursor-pointer hover:bg-mainOrange')} onClick={clickMinus}>-</p>
        <p className='px-4 py-3'>{cartItem.count}</p>
        <p className={'pl-6 py-3 pr-6 rounded-r-xl transition-all' + (cartItem.count >= 10 ? ' text-gray-600' : ' cursor-pointer hover:bg-mainOrange')} onClick={clickPlus}>+</p>
      </div>
      <div>
      <p className='text-white text-4xl tracking-[.1rem]'>{formatter.format(cartItem.price * cartItem.count)}</p>
      </div>
    </div>

    
  );
}

export default Basket;