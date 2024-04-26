import React from 'react';
import '../styles/CustomInput.css'

const CustomInput = ({ initialValue, type, placeholderText }) => {
  return (
    <input
      type={type}
      defaultValue={initialValue}
      placeholder={placeholderText}
      className="custom-input"
    />
  );
};

export default CustomInput;