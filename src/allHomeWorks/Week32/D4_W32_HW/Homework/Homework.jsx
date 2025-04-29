import React, { useReducer, useState } from 'react';

import SearchContext from './Components/SearchContext';
import Searcher from './Components/Searcher';
import UsersFilterShower from './Components/UsersFilterShower';

const initialState = {
    users: [],
    filterList: [],
    search: ''
};

function reducer(state, action) {
    console.log(action.payload);
    switch (action.type) {
        case 'SET_SEARCH':
            console.log(state.filterList);
            return {
                ...state,
                search: action.payload,
                filterList: state.users.filter(user => user.toLowerCase().includes(action.payload.toLowerCase()))
            };
        case 'ADD_USER':
            console.log(state.filterList);
            const newData = {
                ...state,
                users: [...state.users, action.payload],
                filterList: [...state.filterList, action.payload]};
                return reducer(state, {type: 'SET_SEARCH', payload: action.payload}),newData;
        default:
            return state;
    }
}

export default function Homework() {
    const [user, setUser] = useState('');
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div className="homework">
            <SearchContext.Provider value={{ state, dispatch }}>
                <h1>Users list</h1>
                <div>
                    <input type="text" onChange={e => setUser(e.target.value)} id='new_user'/>
                    <button onClick={() => {dispatch({ type: 'ADD_USER', payload: user });document.getElementById('new_user').value = '';}}>Add user</button>
                </div>
                <Searcher />
                <UsersFilterShower />
            </SearchContext.Provider>
        </div>
    )
}