import React, { useState } from 'react'; import { Link as RouterLink } from "react-router-dom"; import './BurgerMenu.css';

const BurgerMenu = () => { const [isOpen, setIsOpen] = useState(false);

return (

<div className={`burger-menu ${isOpen ? 'burger-menu_open' : ''}`}> <button className="burger-menu__button" onClick={() => setIsOpen(!isOpen)}>
   <span className={`burger-menu__line ${isOpen ? 'burger-menu__line_open' : ''}`}></span> <span className={`burger-menu__line ${isOpen ? 'burger-menu__line_open' : ''}`}>
    </span> <span className={`burger-menu__line ${isOpen ? 'burger-menu__line_open' : ''}`}></span> </button>
     <div className="burger-menu__nav"> <RouterLink to = '/#top'><p className = "burger-menu__item" >Главная</p>
     </RouterLink> <RouterLink to = '/catalog'><p className = "burger-menu__item" >Каталог</p></RouterLink> 
     <RouterLink to = '/about'><p className = "burger-menu__item" >О нас</p></RouterLink> <RouterLink to = '/podbor'>
      <p className = "burger-menu__item" >Подборки</p></RouterLink> </div> </div> ); };
export default BurgerMenu;