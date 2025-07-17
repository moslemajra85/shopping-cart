
import { createContext, useState, useEffect } from "react";
import HttpClient from "../http/httpClient";
// 1- create context Object 
export const ProductContext = createContext();



// Provider
export function ProductProvider({ children }) {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('')

    const fetchProducts = () => {
        HttpClient.get("/products")
            .then((response) => {

                setProducts(response.data)
                setLoading(false)

            })
            .catch((error) => {
                setError(error.message)
                setLoading(false)
            }

            );
    };



    useEffect(() => {
        fetchProducts();
    }, []);





    return <ProductContext.Provider value={{ products, loading, error }} >

        {
            children
        }
    </ProductContext.Provider>




}