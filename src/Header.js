import logo from "./images/logo.png"
import profile from "./images/profile.svg"
import busket from "./images/busket.svg"
import { Link as RouterLink } from "react-router-dom";
import { CartContext } from "./contexts/CartContextProvider";
import { useContext } from "react";
import React from 'react';
import BurgerMenu from './BurgerMenu';


function Header()
{

    const links = [
        {
            text: "Каталог",
            url: "/catalog",
        },
        {
            text: "О нас",
            url: "/about",
        },
        {
            text: "Подборки",
            url: "/podbor",
        },
    ];
    let { cart } = useContext(CartContext);
    
    return(
        <>
            <header className = "bg-black flex justify-around items-center h-32 md:h-28 lg:h-28 fixed w-full z-10 text-center ">
                <RouterLink to = '/'><img className = "w-48 pl-8" src = {logo} alt = "лого"/></RouterLink>
                <div className="hidden md:block">
                    <nav className = "flex gap-[80px] text-2xl px-0 md:px-0 lg:px-96">
                        {links.map((elem, i) => { return <Link text={elem.text} url={elem.url} key={i} /> })}
                    </nav>
                </div>
                    <div className="flex sm:inline-flex md:hidden lg:hidden -ms-12">
                        <BurgerMenu />
                    </div>
                <div className = "flex gap-4">
                <RouterLink to = '/enter'><img src = {profile} alt = "профиль"/></RouterLink>
                <RouterLink to = '/basket'><img src = {busket} alt = "корзина"/></RouterLink>
                <p className="text-white py-1 font-semibold">{Object.keys(cart).length}</p>
                </div>
            </header>
            <div className="pt-28" id="top" />
        </> 
    );
}

function Link({text, url}) {
  return(
    <RouterLink className="text-white" to={url}>{text}</RouterLink>
  );
}




export default Header;