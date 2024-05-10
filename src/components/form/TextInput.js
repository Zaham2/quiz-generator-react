import React from 'react'

const TextInput = (props) => {
    return (
        <label className='form-group label'>
            {props.label}:
            <input className='button' type="text" name={props.name} value={props.value} onChange={props.onChange} />
        </label>
    )
}

export default TextInput