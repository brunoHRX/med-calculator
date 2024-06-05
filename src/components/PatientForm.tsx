import React from 'react';
interface PatientFormProps {
  age: number | null;
  setAge: React.Dispatch<React.SetStateAction<number | null>>;
  weight: number | null;
  setWeight: React.Dispatch<React.SetStateAction<number | null>>;
  height: number | null;
  setHeight: React.Dispatch<React.SetStateAction<number | null>>;
}

const generateNumbersArray = (start: number, end: number) => {
  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
};

const PatientForm: React.FC<PatientFormProps> = ({ age, setAge, weight, setWeight, height, setHeight }) => {
  const ages = generateNumbersArray(1, 100);
  const weights = generateNumbersArray(1, 150);
  const heights = generateNumbersArray(1, 250);

  return (
    <div className="p-4 border rounded-lg shadow-md">
      <div className="mb-4">
        <label className="block mb-2">Idade</label>
        <select
          value={age || ''}
          onChange={(e) => setAge(Number(e.target.value))}
          className="block w-full p-2 border rounded"
        >
          <option value="">Selecione a Idade</option>
          {ages.map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-2">Peso (kg)</label>
        <select
          value={weight || ''}
          onChange={(e) => setWeight(Number(e.target.value))}
          className="block w-full p-2 border rounded"
        >
          <option value="">Selecione o Peso</option>
          {weights.map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-2">Altura (cm)</label>
        <select
          value={height || ''}
          onChange={(e) => setHeight(Number(e.target.value))}
          className="block w-full p-2 border rounded"
        >
          <option value="">Selecione a Altura</option>
          {heights.map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default PatientForm;