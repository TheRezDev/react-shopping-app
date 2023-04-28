import React from 'react'
import {PRODUCTS} from '../../products.js'
import { Product } from './product.jsx';
import './shop.css';

export const Shop = () => {
   return (
      <div className='shop'>
         <div className='shopTitle'>
            <h1>
               The.Rez.Dev shopping page
            </h1>
         </div>
         <div className='products'>
            {PRODUCTS.map((product) => (
               <Product data={product } />
            ))}
         </div>
      </div>
   );
};
