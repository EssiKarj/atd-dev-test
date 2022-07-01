import React, { useEffect, useState } from 'react'
import axios from 'axios'

//Components
import Product from './Product'

const Overview = () => {

  const [products, setProducts] = useState({})

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get('https://global.atdtravel.com/api/products?geo=en')
        setProducts(data.data)
      } catch (error) {
        console.log(error)
      }
    }

    getData()
  }, [])

  return (
    <div className='overview-container'>
      <h2>Travel Search</h2>
      {products.length ?
        products.map((product, index) => {
          return <Product key={index} title={product.title} image={product.img_sml} dest={product.dest} />
        })
        :
        <h2>Loading...</h2>
      }
    </div>
  )
}

export default Overview