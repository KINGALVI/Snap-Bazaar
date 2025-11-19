/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from 'react';

const SnapBazaarContext = createContext();

export const SnapBazaarProvider = ({ children }) => {
    const [Dollar, setDollar] = useState(0);
    const [dollarPulse, setDollarPulse] = useState(false);
    const [AllSelectedProduct, setSelectedProduct] = useState([]);
    const [productStockMap, setProductStockMap] = useState({});
    const [isLoggedIn, setIsLoggedIn] = useState(false); // ✅ Login state

    const addDollar = (amount) => {
        setDollar(prev => prev + amount);
    };

    const deductDollar = (amount) => {
        setDollar(prev => Math.max(prev - amount, 0));
    };

    const triggerDollarPulse = () => {
        setDollarPulse(true);
        setTimeout(() => setDollarPulse(false), 1000);
    };

    const loginUser = (name, password) => {
        if (
            name === "Devoloper ALVI" &&
            password === "devoloper alvi"
        ) {
            setIsLoggedIn(true);
            return true;
        }
        return false;
    };

    const handelSelectedProduct = (product) => {
        const productWithId = { ...product, selection_id: crypto.randomUUID() };
        setSelectedProduct(prev => [...prev, productWithId]);
    };

    const handleRemoveProduct = (productToRemove) => {
        setSelectedProduct(prev =>
            prev.filter(p => p.selection_id !== productToRemove.selection_id)
        );
        setDollar(prev => prev + productToRemove.price * (1 - productToRemove.discount / 100));
    };

    const handleRemoveAllProducts = () => {
        const refundAmount = AllSelectedProduct.reduce((sum, product) => {
            return sum + product.price * (1 - product.discount / 100);
        }, 0);
        setDollar(prev => prev + refundAmount);
        setSelectedProduct([]);
    };

    const handleConfirmOrder = () => {
        const updatedMap = { ...productStockMap };

        AllSelectedProduct.forEach(product => {
            const id = product.id;
            updatedMap[id] = (updatedMap[id] || 0) + 1;
        });

        setProductStockMap(updatedMap);
        setSelectedProduct([]);
    };

    return (
        <SnapBazaarContext.Provider
            value={{
                Dollar,
                addDollar,
                deductDollar,
                dollarPulse,
                triggerDollarPulse,
                AllSelectedProduct,
                handelSelectedProduct,
                handleRemoveProduct,
                handleRemoveAllProducts,
                handleConfirmOrder,
                productStockMap,
                isLoggedIn,           // ✅ exposed
                loginUser,            // ✅ exposed
            }}
        >
            {children}
        </SnapBazaarContext.Provider>
    );
};

export const useSnapBazaar = () => useContext(SnapBazaarContext);