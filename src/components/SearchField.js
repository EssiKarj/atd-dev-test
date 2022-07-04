import React, { useState } from 'react'

const SearchField = ({ query, setQuery, setResults, products }) => {
  const [noResults, setNoResults] = useState(false) //stores true/falsy value based on found results => no results = true

  //handles changes in search field and sets 'query' state accordingly
  const handleChange = (e) => {
    setNoResults(false)
    setQuery(e.target.value)
  }

  //handles search, executes when search form is submitted or search button is pressed
  //both title and user's input is then lowercased to compare match and used to filter products
  //filtered products are set to 'results' state or if no products are found 'noResult' state is set to true
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