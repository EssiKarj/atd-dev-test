import React, { useState } from 'react'

//components
import Overview from "./components/Overview";
import SearchField from './components/SearchField';

const App = () => {
  const [products, setProducts] = useState({}) //stores all product data
  const [query, setQuery] = useState('') //stores user input from search field
  const [results, setResults] = useState('') //stores products that match users input

  return (
    <div className='main-container'>
      <div className='hero'>
        <h2>Travel Search</h2>
      </div>
      <SearchField
        query={query}
        setQuery={setQuery}
        setResults={setResults}
        products={products}
      />
      <Overview
        products={products}
        setProducts={setProducts}
        results={results}
      />
    </div>
  );
}

export default App;
