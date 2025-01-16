import './FormInputAu.css'
import React, { useState } from 'react';

function FormInputAu(props) {
    const [focused, setFocused] = useState(false);
    const handleFocus = (e) => {
        setFocused(true);
    }
    const { errorMessage, onChange, id, ...inputProps } = props;
    return (
        <div className='formInputs'>
            <input {...inputProps} onChange={onChange} required onBlur={handleFocus} focused={focused.toString()} />
            <span>{errorMessage}</span>
        </div>
    );
}

export default FormInputAu;