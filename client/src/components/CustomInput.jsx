import React from 'react';
import s from '../styles';

const regex = /^[A-Za-z0-9]+$/;

const CustomInput = ({label, placeholder, value, handleValueChange}) => {
  return (
    <>
      <label htmlFor="name" className={s.label}>{label}</label>
      <input 
        className={s.input}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          if(e.target.value === '' || regex.test(e.target.value)) handleValueChange(e.target.value)
        }}
      />
    </>
  )
}

export default CustomInput
