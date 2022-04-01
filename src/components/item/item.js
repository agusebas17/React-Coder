import React from 'react';
import ItemCount from '../itemCount/itemCount.js'
import './item.css';

export default function item({ data }) {
    const { title, price, size, id, stock, img } = data

    return (<div className="product-item" >
        <h2> {title} </h2>
        <p> Precio: $ {price} </p>
        <p> Tamaño: {size} </p>
        <img src={img}></img>

        <itemCount initial={1} stock={stock} />
    </div>
    )
}
