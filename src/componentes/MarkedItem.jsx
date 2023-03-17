import React, { useMemo } from 'react';
import './Components.css'

const MarkedItem = ({item, query, onClick}) => {

    const {prev, next, center} = useMemo(()=>
        getPosition(item, query), [item, query]
    )


    function getPosition(item, query){
        const index = item.title.toLowerCase().indexOf(query)
        const prev = item.title.slice(0, index)
        const next = item.title.slice(index + query.length)
        const center = item.title.slice(index, index + query.length)

        return {prev, next, center}
    }

    function handleClick(){
        onClick(item)
    }

    return(
        <div className='itemContainer'>
            <a href='#' className='mb-1 styledItem' onClick={handleClick}>{prev}<span style={{backgroundColor: "yellow", fontWeight: "bold"}}>{center}</span>{next}</a>
            </div>
    )
}

export { MarkedItem }