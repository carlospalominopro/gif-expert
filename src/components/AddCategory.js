import React, { useState } from "react"
import PropTypes from 'prop-types'

export const AddCategory = ( { setQuery } ) => {
    
    const [inputValue, setinputValue] = useState('')
    
    const handleInputChange = (e) => {
        setinputValue(e.target.value)
    }
    
    const handleSubmit = (e) => {
        
        e.preventDefault();

        if(inputValue.trim().length > 2){
            setQuery(inputValue)    
            setinputValue('')
        }

    }


    return(
        <>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={inputValue}
                    onChange={handleInputChange}
                    
                />
            </form>
        </>
    )
}

AddCategory.propTypes = {
    setQuery : PropTypes.func.isRequired
}
