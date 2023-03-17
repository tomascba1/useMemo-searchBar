import React, { useEffect, useMemo, useState } from 'react';
import { MarkedItem } from './MarkedItem';

const Results = ({items, onItemSelected, query, onResultsCalculated}) => {

    const [results, setResults] = useState([])
    useMemo(() =>
        findMatch(items, query), [items, query]
    )

    useEffect(() => {
        onResultsCalculated(results)
    }, [results])

    function findMatch(items, query){
        const res = items.filter((i) => {
            return i.title.toLowerCase().indexOf(query) >= 0 && query.length > 0;
        })
        setResults(res)
        return res
    }

    return(
        <div className='resultContainer'>
            {query !== "" ? 
            (results.map((item) => <MarkedItem item={item} key={item.id} query={query} onClick={onItemSelected}/>))
             : " "}
        </div> 
    )
}

export { Results }