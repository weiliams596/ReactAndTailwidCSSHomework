import React, { useContext } from 'react';
import SearchContext from './SearchContext';


export default function UsersFilterShower() {
    const {state} = useContext(SearchContext);
  return (
    <div className="users-filter-shower">
        {state.filterList.length>0 && state.filterList.map((item, index) => {
            return <div key={index}>
                <h3>{item}</h3>
            </div>
        })}
    </div>
  )
}