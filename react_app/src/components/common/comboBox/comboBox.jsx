import React, { useState } from 'react';
import './comboBox.css'; // Importe o CSS

function ComboBox({ onSelectChange }) {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (event) => {
    const value = event.target.value;
    setSelectedOption(value);
    onSelectChange(value); // Pass selected value to parent component
  };

  return (
    <div>
      <h1>Fluido</h1>
      <select value={selectedOption} onChange={handleSelectChange}>
        <option value="">Selecione uma opção</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
    </div>
  );
}

export default ComboBox;
