import React from 'react';


export default function Searcher({setIsSearching,setSearchText,setShowSearchList}) {

  return (
    <div>
        <h1>Movie Search App</h1>
        <div className="searcher-div">
            <input type="text" placeholder="Search Movie" id='search-input' onChange={(e) => setSearchText(e.target.value)} onKeyDown={(e) => {if(e.key === 'Enter') {setIsSearching(true);setShowSearchList(true)}}}/>
            <button onClick={() => {setIsSearching(true);setShowSearchList(true)}}>Search</button>
        </div>
    </div>
  )
}
