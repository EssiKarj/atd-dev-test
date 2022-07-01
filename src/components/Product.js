import React from 'react'

const Product = ({ title, image, dest }) => {

  return (
    <div className='product-container'>
      <div className='product-image'>
        <img src={image} alt='' />
      </div>

      <div className='product-info'>
        <h2>{title}</h2>
        <h3>{dest}</h3>
      </div>
    </div>
  )
}

export default Product