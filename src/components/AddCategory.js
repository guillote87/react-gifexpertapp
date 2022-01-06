import React,{useState} from 'react'
import PropTypes  from 'prop-types';
export const AddCategory = ({setCategories}) => {
    
const [inputValue, setInputValue] = useState("")

const handleInputChange =(e)=>{
    setInputValue(e.target.value)
}

const handleSubmit=(e)=>{
    e.preventDefault()

    if(inputValue.trim().length>2){
    //console.log("Submit hecho")
    setCategories( cat => [inputValue ,...cat ])
    setInputValue("")
    }
}
    return (
            <form onSubmit={handleSubmit}>
                <h2>Add Category</h2>
                <input onChange={handleInputChange} type="text" value ={inputValue}/>
            </form> 
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
 }

