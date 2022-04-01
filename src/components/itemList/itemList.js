import React, { useEffect, useState } from 'react';
import item from '../item/item';
import { productList } from '../../data/data.js'

import './itemList.css'

import { useParams } from 'react-router-dom'

const ItemList = ({children}) => {
    const { Id } = useParams()

    const [products, setProducts] = useState([])

    const getProducts = () => {
        return new Promise((resolve, reject) => {
            return resolve(productList)
        })
    } 

    useEffect( () => {
        setProducts([])
        getProducts().then( (productos) => {
            filterProductById(productos, Id)
        })
    }, [Id])


    const filterProductById = (array , category) => {
        return array.map( (product, i) => {
            if(product.Id === Id) {
                return setProducts(products => [...products, product]);
            }
        })
    }

    return(
        <div className="container-cards">
            {console.log("products: ", products)}
            {products.map( ( product ) =>  <item data={product} key={product.id}/>)}
        </div>
    ) 
}

export default ItemList;