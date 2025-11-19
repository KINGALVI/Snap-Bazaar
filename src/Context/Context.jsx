/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from 'react';

const SnapBazaarContext = createContext();

export const SnapBazaarProvider = ({ children }) => {
    const [Coin, setCoin] = useState(5);
    const [coinPulse, setCoinPulse] = useState(false);
    const [AllSelectedProduct, setSelectedProduct] = useState([]);
    const [productStockMap, setProductStockMap] = useState({}); // ✅ Track confirmed purchases

    const handelSetcoin = () => setCoin(prev => prev + 1);
    const handelRemovecoin = () => setCoin(prev => (prev > 0 ? prev - 1 : 0));

    const triggerCoinPulse = () => {
        setCoinPulse(true);
        setTimeout(() => setCoinPulse(false), 1000);
    };

    const handelSelectedProduct = (product) => {
        const productWithId = { ...product, selection_id: crypto.randomUUID() };
        setSelectedProduct(prev => [...prev, productWithId]);
    };

    const handleRemoveProduct = (productToRemove) => {
        setSelectedProduct(prev =>
            prev.filter(p => p.selection_id !== productToRemove.selection_id)
        );
    };

    const handleRemoveAllProducts = () => {
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
                Coin,
                coinPulse,
                handelSetcoin,
                handelRemovecoin,
                triggerCoinPulse,
                AllSelectedProduct,
                handelSelectedProduct,
                handleRemoveProduct,
                handleRemoveAllProducts,
                handleConfirmOrder,
                productStockMap,
            }}
        >
            {children}
        </SnapBazaarContext.Provider>
    );
};

export const useSnapBazaar = () => useContext(SnapBazaarContext);