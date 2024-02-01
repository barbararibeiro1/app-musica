import React from 'react';

type InputLabelProps = {
  name: string,
  placeholder:string,
  value: string,
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
};

function InputLabel({ 'data-testid': dataTestId, name,
  placeholder, value, onChange }: InputLabelProps) {
  return (
    <div className="form_group">
      <label htmlFor={ name } className="visually-hidden">
        { placeholder }
      </label>
      <input
        data-testid={ dataTestId }
        type="text"
        name={ name }
        placeholder={ placeholder }
        value={ value }
        onChange={ onChange }
      />
    </div>
  );
}

export default InputLabel;
