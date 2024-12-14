import first from "./images/catalog/1.png";
import second from "./images/catalog/2.png";
import third from "./images/catalog/3.webp";
import fourth from "./images/catalog/4.png";
import fifth from "./images/catalog/5.png";
import sixth from "./images/catalog/6.png";
import seventh from "./images/catalog/7.png";
import eighth from "./images/catalog/8.png";
import ninth from "./images/catalog/9.png";
import tenth from "./images/catalog/10.png";
import eleventh from "./images/catalog/11.png";
import twelfth from "./images/catalog/12.png";
import Header from './Header';
import Footer from './Footer';
import { Link as RouterLink } from "react-router-dom";


const cardsData = [
  {
      id: "first",
      img: first,
      name: "Luxurious Elixir Rough",
      price: 20200

  },
  {
      id: "second",
      img: second,
      name: "The Golden Legacy",
      price: 16000

  },
  {
      id: "third",
      img: third,
      name: "Luxurious Elixir",
      price: 25000

  },
  {
      id: "fourth",
      img: fourth,
      name: "Luxurious Essence",
      price: 16000

  },
  {
      id: "fifth",
      img: fifth,
      name: "Aurum Aura",
      price: 24300

  },
  {
      id: "sixth",
      img: sixth,
      name: "Gleaming Gilt",
      price: 17500

  },
  {
      id: "seventh",
      img: seventh,
      name: "Gilded Elixir Rough",
      price: 24500

  },
  {
      id: "eighth",
      img: eighth,
      name: "Golden Luminary",
      price: 18500

  },
  {
      id: "ninth",
      img: ninth,
      name: "Decadent Opal",
      price: 28000

  },
  {
      id: "tenth",
      img: tenth,
      name: "Gilded Elixir",
      price: 19700

  },
  {
    id: "eleventh",
    img: eleventh,
    name: "Glamourous Gilt",
    price: 21000

  },
  {
    id: "twelfth",
    img: twelfth,
    name: "Luxury Enigma",
    price: 14000

  },
]

const formatter = new Intl.NumberFormat('ru-RU', {
  style: 'currency',
  currency: 'RUB',
});

function Catalog()
{
  return(
    <div className = "font-medium bg-black tracking-[.25rem]">
        <Header />
        <div className = "object-center-top px-52 md:px-64 lg:px-64 text-2xl text-mainOrange tracking-[.4rem] px-64 flex flex-row gap-x-9 mt-6 md:mt-6 lg:mt-0">
        <RouterLink to = '/'><p >Главная </p></RouterLink>
          <p > / </p>
          <RouterLink to = '/catalog'><p >Каталог</p></RouterLink>
        </div>
        <div className = "flex flex-col items-center py-[16px] pb-5 text-mainOrange">
        <p className = "text-mainOrange text-6xl tracking-[.4rem] border-b border-orange-800 rounded-sm w-5/6 text-center p-3 ">Каталог ароматов</p>
        </div>
        <div></div>

        <div>
          {catalogCards()}
        </div>
        <Footer />
    </div>
  );
  
}

function catalogCards()
{
    const catalogCardsJsx = cardsData.map((elem, i) => {
      return <Card card={elem} key={i} />
    });

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-7 md:gap-x-64 lg:gap-x-7  gap-y-7 md:gap-y-10 lg:gap-y-7 fade-out-siblings pb-5
         relative flex justify-items-center px- 0 md:px-40 lg:px-80">
            {catalogCardsJsx}
      </div>
    );
}

function Card({ card })
{
    return(
      <RouterLink to = '/product'>
        <div className = "flex flex-col items-center bg-[#101010] rounded-xl p-5 w-[260px] self-center">
            <img  src = {card.img} alt = "картиночки"/>
            <p className = "text-white text-center tracking-[.1rem]">{card.name}</p>
              <div className = "flex gap-2.5  justify-beetwen">
                <p className = "text-mainOrange tracking-[.1rem]">{formatter.format(card.price)}</p>
                <p className = "text-white tracking-[.1rem]">100ml</p>
            </div> 
        </div>
      </RouterLink>
    );
}

export default Catalog;