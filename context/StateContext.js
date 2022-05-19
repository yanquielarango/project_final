import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';

const Context = createContext();

export const StateContext = ({ children }) => {
    const [showCart, setShowCart] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalQuantity, setTotalQuantity] = useState(0);
    const [qty, setQty] = useState(1);

    const addToCart = (product, quantity) => {
        const item = cartItems.find(item => item.id === product.id);
        if (item) {
            item.quantity += quantity;
            item.totalPrice = item.quantity * item.price;
        } else {
            const newItem = { ...product, quantity, totalPrice: quantity * product.price };
            setCartItems([...cartItems, newItem]);
        }
        setTotalPrice(totalPrice + (quantity * product.price));
        setTotalQuantity(totalQuantity + quantity);
        toast.success(`${product.name} added to cart!`);
    }

    const incQty = () => {
        setQty((prevQty) => prevQty + 1);
    }

    const decQty = () => {        
        if (qty > 1) {
            setQty((prevQty) => prevQty - 1);
        }
        
    }

    return (
        <Context.Provider value={{
            showCart,
            cartItems,
            totalPrice,
            totalQuantity,
            qty,
            incQty,
            decQty,
            addToCart
        }}>
            {children}
        </Context.Provider>
    )
}

export const useStateContext = () => useContext(Context);