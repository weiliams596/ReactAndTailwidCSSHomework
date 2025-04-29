import React, { useContext, useState } from 'react';

import SearchContext from './SearchContext';


export default function Searcher() {
    const [searchTerm, setSearchTerm] = useState('');
    const {dispatch} = useContext(SearchContext);
  return (
    <div>
        <input type="search" placeholder="Search" onChange={(e) => {setSearchTerm(e.target.value);dispatch({type: 'SET_SEARCH', payload: e.target.value})}}/>
    </div>
  )
}