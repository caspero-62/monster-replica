import React from 'react';

import './searchbox.style.css';

const SearchBox = (props) => (
    <input className='search-box'  type='search' placeholder ='search monsters' onChange={props.handleChange}/>
);

export default SearchBox;