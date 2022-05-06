import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({setCategorias}) => {

    const [inputValue, setInputValue] = useState('');
    const handleInputCHange = (e)=>{
        setInputValue(e.target.value);
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        if (inputValue.trim().length>2) {
            
        }
        setCategorias(cats => [...cats,inputValue]);

    }
    
  return (
    <>
        <form onSubmit={handleSubmit}>

            <input 
            type="text"
            value={inputValue}
            onChange={handleInputCHange}
            />
        </form>
    </>
  )
}

AddCategory.prototypes = {
    setCategorias: PropTypes.func.isRequired
}