import { Link } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';

function Authorization(){
    return(
        <div className = "font-medium bg-black tracking-[.25rem] grid gap-y-10 text-white">
        <Header />
        <enter className="flex flex-col justify-center items-center py-10 gap-2">
            <div className="text-mainOrange font-bold text-4xl tracking-[.4rem] px-[825px]">
                РЕГИСТРАЦИЯ
            </div>
            <div className="gap-6 flex justify-center items-center">
                <form className="flex flex-col gap-6">
                    <div className="flex flex-row gap-2">
                        <input type="text" className="p-4 w-[250px] bg-gray-900 rounded-lg tracking-[.2rem] font-semibold" placeholder="Имя" />
                        <input type="text" className="p-4 w-[250px] bg-gray-900 rounded-lg tracking-[.2rem] font-semibold" placeholder="Фамилия" />
                    </div>
                    <input type="email" className="p-4 w-[508px] bg-gray-900 rounded-lg tracking-[.2rem] font-semibold" placeholder="Электронный адрес" />
                    <input type="password" className="p-4 w-[508px] bg-gray-900 rounded-lg tracking-[.2rem] font-semibold" placeholder="Пароль" />
                        <div className="flex justify-start text-lg px-1 text-center  tracking-[.4rem]">
                            Пароль должен состоять хотя бы <br /> из 6 символов
                        </div>
                    <input type="password" className="p-4 w-[508px] bg-gray-900 rounded-lg tracking-[.2rem] font-semibold" placeholder="Повторите пароль" />
                </form>
            </div>
            <div className="flex flex-col justify-center items-center tracking-[.4rem]  px-1 text-lg gap-2  pt-6">
                Регистрируясь, Вы соглашаетесь с
                <div className="flex flex-row gap-5">
                    <input type="checkbox" className="p-" placeholder="Условиями и Политикой конфиденциальности"/>
                        <Link to="/">Условиями</Link>и<Link to="/">Политикой конфиденциальности.</Link>
                </div>
            </div>
            <div className="flex justify-center py-6">
                <button className="w-84 p-4 border hover:bg-mainOrange hover:text-white hover:border-transparent hover:ease-in-out duration-300 rounded-xl text-2xl tracking-[.25rem] ">
                    <Link to="/">
                        Зарегистрироваться
                    </Link>
                </button>
            </div>
            <div className="flex flex-col justify-center items-center px-1  text-center text-lg tracking-[.4rem] ">
                Уже зарегистрированны?
                <div className="text-mainOrange underline underline-offset-8 cursor-pointer tracking-[.4rem] px-1 py-6 text-center text-2xl font-semibold">
                    <Link to="/enter">
                        Войти
                    </Link>
                </div>
            </div>
        </enter>
        <Footer />
    </div>
    )
}



export default Authorization;