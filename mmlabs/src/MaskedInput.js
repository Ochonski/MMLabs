import React from "react";
import InputMask from 'react-input-mask';
import './App.css';

const onlyNumbers= (str) => str.replace(/[^0-9]/g, "")

const maskinput = ({ value, onChange, name, mask }) => {

    function handleChange(event) {
        onChange({
            ...event,
            target:{
                ...event.target,
                name,
                value: onlyNumbers(event.target.value),
            }
        })
    }

    return (
        <InputMask className="register--input"
          name="telefone"
          mask={mask}
          value={value} 
          onChange={handleChange}
        />
    );
};



export default maskinput;