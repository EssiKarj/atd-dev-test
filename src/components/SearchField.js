import React, { useState } from 'react'

const SearchField = ({ query, setQuery, results, setResults, products }) => {
  const [noResults, setNoResults] = useState(false)

  const handleChange = (e) => {
    setNoResults(false)
    setQuery(e.target.value)
  }

  const handleSearch = (e) => {
    e.preventDefault()
    const searchResult = products.filter(product => {
      return product.title.toLowerCase().includes(query.toLowerCase())
    })
    if (!searchResult.length) setNoResults(true)
    setResults(searchResult)
  }

  return (
    <div className='search-container'>
      <form onSubmit={handleSearch}>
        <input
          placeholder='Search by title'
          defaultValue={query}
          onChange={handleChange}
        />
        <button onClick={handleSearch}>Search</button>
      </form>
      {!!noResults && <h3>Your search didn't match any travels.</h3>}
    </div>
  )
}

export default SearchField