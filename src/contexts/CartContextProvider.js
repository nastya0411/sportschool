import { createContext, useState } from "react";
export let CartContext = createContext();

function CartContextProvider({ children }) {
    let [cart, setCart] = useState({
        "5": {
            id: 5,
            title: "Luxurious Elixir",
            description: "Окунитесь в мир непревзойденной роскоши с Luxurious Elixir, изысканным ароматом, который сплетает чарующую симфонию золота и роскоши. Этот позолоченный эликсир - это праздник изысканности, созданный с использованием лучших эссенций и наполненный очарованием драгоценных золотых оттенков.",
            price: 15000,
            count: 1,
        }
    });
    function cartSumm() {
        let result = 0;
        for (const key of Object.keys(cart)) {
            const elem = cart[key];
            console.log(cart, Object.keys(cart));
            result += elem.price * elem.count;
        }
        return result;
    }
    return (
        <CartContext.Provider value={{cart, setCart, cartSumm}}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider