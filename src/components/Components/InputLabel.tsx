import React from 'react';

type InputLabelProps = {
  name: string,
  placeholder:string,
  value: string,
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
};

function InputLabel({ name, placeholder, value, onChange }: InputLabelProps) {
  return (
    <div className="form_group">
      <label htmlFor={ name }></label>
      <input
        type="text"
        name={ name }
        placeholder= { placeholder }
        value={ value }
        onChange={ onChange}
      />
    </div>
  );
}

export default InputLabel;