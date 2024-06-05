import React from 'react';

interface MedicationTableProps {
  age: number | null;
  weight: number | null;
  height: number | null;
}

interface Medication {
  name: string;
  presentation: string
  default: string
  dosage: number | string;
  dilution: string;
}

const MedicationTable: React.FC<MedicationTableProps> = ({ age, weight, height }) => {
  const calculateMedications = (): Medication[] => {
    if (!weight || !age) return [];

    const medications = [
      { 
        name: 'ADRENALINA',
        presentation: '1mg/ml',
        default: weight > 40 ? '1mg dose adulto' : '0,01mg/kg',
        dosage: weight > 40 ? '1ml' : weight > 40 ? '1ml' : `${Math.round(weight * 0.01 / 0.01)}ml`, 
        dilution: weight > 40 ? 'Sem Diluir' : '1ml + 9ml AD',
        
      },

      { 
        name: 'ATROPINA',
        presentation: '0,25mg/ml',
        default: weight<= 5 ? '0,1mg mínimo' : weight > 20 ? '0,4mg dose adulto':'0,02mg/kg',
        dosage: (weight*0.02<0.1? 0.1:0.02)/0.25>1.6? 1.6 : (weight*0.02<0.1? 0.1:0.02)/0.25 + 'ml', 
        dilution: 'Sem Diluir',
        
      }
    ];
    return medications;
  };

  const medications = calculateMedications();

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Medicações</h2>
      <table className="w-full border-collapse border border-gray-200">
        <thead>
          <tr>
            <th className="border p-2">Medicação</th>
            <th className="border p-2">Dosagem (mg)</th>
            <th className="border p-2">Diluição</th>
          </tr>
        </thead>
        <tbody>
          {medications.map((med, index) => (
            <tr key={index}>
              <td className="border p-2">{med.name}</td>
              <td className="border p-2">{med.dosage}</td>
              <td className="border p-2">{med.dilution}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MedicationTable;
