import React from 'react';
import Image from 'next/image';

import Shoe1 from './assets/big-shoe1.png';
import logo from './assets/header-logo.svg';

type ProductCardProps = {
    title: string;
    price: number;
    rating?: 1 | 2 | 3 | 4 | 5 ;
}

const ProductCard = ({ title, price, rating }: ProductCardProps) => {
  return (
      <div style={{
        borderRadius: '15px', fontFamily: 'sans-serif', backgroundColor: '#b43885', boxShadow: '2px 2px 10px #b43885',
      }}>
        <div style={{ 
          padding: '10px',
          position: 'relative',
          left: '35px',
        }}>
          <Image src={Shoe1} alt={title} height={150} width={150}/>

          <Image 
            style={{background: 'white', borderRadius: '3px', padding: '5px', position: 'absolute', left: '-30px'}}
            src={logo} alt={title} height={10} width={50}
          />
        </div>

        <div style={{
          background: 'white',
          borderBottomLeftRadius: '15px',
          borderBottomRightRadius: '15px',
          padding: '5px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
          <h3 style={{
            padding: '5px 10px',
            color: '#a0703a',
            borderRadius: '8px', 
            display: 'flex',
            justifyContent: 'center',
            fontWeight: 'bolder'
          }}>{title}</h3>

          <p style={{
            padding: '5px 10px',
            background: '#241d21',
            color: 'white',
            position: 'relative',
            left: '70px',
            top: '-25px',
            borderRadius: '8px', 
            display: 'flex',
            justifyContent: 'center'
          }}>${price}</p>

          {rating && (
          <div style={{
            padding: '5px 10px',
            background: '#b43885',
            color: 'white',
            borderRadius: '8px', 
            display: 'flex',
            justifyContent: 'center',
            fontWeight: 'bolder'
          }}>
            {/* <i className="fas fa-star"></i> */}
            <span>{rating} star rating</span>
          </div>
          )}
        </div>
      </div>
  )
}

export default ProductCard

