import React, { useEffect } from 'react'
import axios from 'axios'

//Components
import Product from './Product'

const Overview = ({ products, setProducts, results, query }) => {

  useEffect(() => {
    const getData = async () => {
      if (!!products.length) return
      try {
        const { data } = await axios.get('https://global.atdtravel.com/api/products?geo=en')
        setProducts(data.data)
      } catch (error) {
        console.log(error)
      }
    }

    getData()
  }, [products, setProducts])

  return (
    <div className='overview-container'>
      {results.length ?
        results.map((result, index) => {
          return <Product key={index} title={result.title} image={result.img_sml} dest={result.dest} />
        })
        : products.length ?
          products.map((product, index) => {
            return <Product key={index} title={product.title} image={product.img_sml} dest={product.dest} />
          })
          :
          <h2 className='loading'>Loading...</h2>
      }
    </div>
  )
}

export default Overview