import french from "./images/gallery/frenchFart.png";
import gift from "./images/gallery/gift.png";
import wood from "./images/gallery/woodCum.png";
import season from "./images/gallery/season.png";
import limit from "./images/gallery/limited.png";
import daily from "./images/gallery/everyday.png";
import woman from "./images/gallery/woman.jpg";
import man from "./images/gallery/man.jpg";
import './Gallery.css';
import { Link as RouterLink } from "react-router-dom";

const parfumCards = [
    {
        title: "Французские ароматы",
        src: french
    },
    {
        title: "Подарочные наборы",
        src: gift
    },
    {
        title: "Ароматы для неё",
        src: woman
    },
    {
        title: "Древесные ароматы",
        src: wood
    },
    {
        title: "Сезонные ароматы",
        src: season
    },
    {
        title: "Ароматы для него",
        src: man
    },
    {
        title: "Новые ароматы",
        src: limit
    },
    {
        title: "На каждый день",
        src: daily
    },
];

function Gallery()
{
    const parfumCardsJsx = parfumCards.map((elem, i) => {
        return <ParfumCard title={elem.title} src={elem.src} key={i} />
    });

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-14 fade-out-siblings">
            {parfumCardsJsx}
      </div>
    );
}



function ParfumCard({ title, src }) {
    return (
        <RouterLink to = '/compilation'>
        <div className="relative">
            <img className="object-cover" src={src} alt="бутылка из галереи"/>
            <div className = "bg-[#00000044] w-full pt-1 absolute bottom-0 ">
                <p className="text-white text-2xl tracking-[.2rem] my-1.5">{title}</p>
            </div>          
        </div>
        </RouterLink>
    );
}


export default Gallery;