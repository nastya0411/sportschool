import logo from "./images/logo.png"
import vk from "./images/socialmedia/vk.png"
import tg from "./images/socialmedia/tg.png"
import mail from "./images/socialmedia/mail.png"
import whatsapp from "./images/socialmedia/whatsapp.png"
import { Link as RouterLink } from "react-router-dom";
import ScrollToTop from "./ScrollToTop"

function alr(){
    alert("Вы подписались на нашу расссылку новостей!");
  }

function Footer() {
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
    return(
        <div className = "w-full bg-cover bg-center bg-[url(images/footer.png)] pt-8 ">  
            <div  className=" px-20 md:px-20 lg:px-40 flex flex-col gap-7">
            <ScrollToTop />
            <RouterLink to = '/#top'><img className = "w-48 flex flex-col" src = {logo} alt = "лого"/></RouterLink>
                <p className = "text-2xl text-left text-white tracking-[.4rem]">Подпишитесь на нашу рассылку новостей:</p>
                <div className="flex flex-col">
                    <div>
                        <form className="flex mt-1">
                            <label className="block w-full">
                                <input  type="email" name="email" className="focus-visible:outline-none px-3 py-2 bg-gray-900 block w-full h-12 rounded-l-lg 
                                text-sm text-white tracking-[.2rem] font-semibold" placeholder="Введите вашу почту"/>
                            </label>
                            <button onClick={alr} type = "button" className = "bg-mainOrange px-3 py-2 h-12 rounded-r-lg text-lg text-white tracking-[.25rem]">Отправить</button>
                        </form>  
                    </div>
                    <div className = "flex justify-center gap-4 py-4 ">
                        <img className="h-16 w-100" src = {vk} alt = "вконтакте"/>
                        <img className="h-16 w-100" src = {tg} alt = "тг"/>
                        <img className="h-16 w-100" src = {mail} alt = "мэйл"/>
                        <img className="h-16 w-100" src = {whatsapp} alt = "вотсап"/>
                    </div>
                    <div className = "flex justify-center items-center pb-3 ">
                        <nav className = "flex flex-col text-lg text-center text-white tracking-[.4rem] gap-7">
                            {links.map((elem, i) => { return <Link text={elem.text} url={elem.url} key={i} /> })}
                        </nav>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center "><p className='p-7 border-t border-gray-500 text-white w-4/5 rounded-sm text-center 
            text-base '>2024 Mon Parfum. Все права защищены </p></div>
        </div>
    );
 



function Link({text, url}) {
    return(
        <a className = "text-white" href = {url}>{text}</a>
    );
}
}
export default Footer;