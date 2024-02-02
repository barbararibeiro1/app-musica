import React from 'react';

type InputLabelProps = {
  id: string,
  name: string,
  placeholder:string,
  value: string,
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
};

function InputLabel({ 'data-testid': dataTestId, id, name,
  placeholder, value, onChange }: InputLabelProps) {
  return (
    <div className="form_group">
      <label htmlFor={ id } className="visually-hidden">
        { placeholder }
      </label>
      <input
        id={ id }
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
