import React from 'react'

const SearchComponent = ({placeholder,handelChange,search}) => {
    return (
        <div>
            <input 
            className='search' 
            type='search' 
            placeholder={placeholder} 
            onChange = {handelChange}
            value={search}
            />
    </div>
    )
}

export default SearchComponent
