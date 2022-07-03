import React, { useState } from 'react'

//components
import Overview from "./components/Overview";
import SearchField from './components/SearchField';

const App = () => {
  const [products, setProducts] = useState({})
  const [query, setQuery] = useState('')
  const [results, setResults] = useState('')

  return (
    <div>
      <SearchField
        query={query}
        setQuery={setQuery}
        results={results}
        setResults={setResults}
        products={products}
      />
      <Overview
        products={products}
        setProducts={setProducts}
        results={results}
        query={query}
      />
    </div>
  );
}

export default App;
