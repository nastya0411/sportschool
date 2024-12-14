import { Link } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';


function LogIn(){
    return(
        <div className = "font-medium bg-black tracking-[.25rem] grid gap-y-16 text-white">
        <Header />
        <enter className="flex flex-col justify-center items-center py-32 px-20 gap-5">
            <div className="text-mainOrange font-bold text-4xl tracking-[.4rem] px-[850px]">
                ВХОД
            </div>
            <div className="gap-6">
                <form className="flex flex-col gap-6">
                    <input type="email" className="p-4 w-[508px] bg-gray-900 rounded-lg tracking-[.2rem] font-semibold" placeholder="Электронный адрес" />
                    <input type="password" className="p-4 w-[508px] bg-gray-900 rounded-lg tracking-[.2rem] font-semibold" placeholder="Пароль" />
                </form>
                <div className="flex text-black underline underline-offset-2 cursor-pointer justify-end">
                    <Link to="/zatrolen_loh">
                        Забыли пароль?
                    </Link>
                </div>
            </div>
            <div className="flex justify-center pb-4 ">
                <button className=" py-[15px] px-[30px] w-84 border hover:bg-mainOrange hover:text-white hover:border-transparent hover:ease-in-out duration-300 rounded-xl text-2xl tracking-[.25rem]">
                    <Link to="/">
                        Войти
                    </Link>
                </button>
            </div>
            <div className="flex flex-col justify-center items-center px-1  text-center text-lg tracking-[.4rem]">
                Нет аккаунта?
                <div className="text-mainOrange underline underline-offset-8 cursor-pointer tracking-[.4rem] px-1 py-6 text-center text-2xl font-semiboldr">
                    <Link to="/authorization">
                        Создать
                    </Link>
                </div>
            </div>
        </enter>
        
        <Footer />
    </div>
    )
}

export default LogIn;