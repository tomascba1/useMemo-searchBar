import React, { useState } from 'react';
import { Results } from './Results';
import './Components.css'

const SearchBar = ({items, onItemsSelected}) => {

    const [query, setQuery] = useState('')
    const [results, setResults] = useState([])

    function handleChange(e){
        e.preventDefault()
        const value = e.target.value
        setQuery(value.toLowerCase())
    }

    function handleResults(items){
        setResults(items)
    }


    return(
        <div  className='col-6 col-md-4 text-md-center'>
            {results && <div>Results: {results.length}</div>}
            <input className='inputStyle' onChange={handleChange} type="text" value={query} />
            <Results items={items} onItemSelected={onItemsSelected} query={query} onResultsCalculated={handleResults} />
        </div>
    )
}

export { SearchBar }