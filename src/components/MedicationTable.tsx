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
        presentation: '1 mg/ml',
        default: weight > 40 ? '1 mg dose adulto' : '0,01 mg/kg',
        dosage: weight > 40 ? '1 ml' : ((weight * 0.01 / 0.1).toFixed(1) + ' ml'), 
        dilution: weight > 40 ? 'Sem Diluir' : '1 ml + 9 ml AD',
        
      },

      { 
        name: 'ATROPINA',
        presentation: '0,25 mg/ml',
        default: weight<= 5 ? '0,1 mg mínimo' : weight > 20 ? '0,4 mg dose adulto':'0,02 mg/kg',
        dosage: ((weight*0.02<0.1? 0.1:weight*0.02)/0.25>1.6? 1.6 : (weight*0.02<0.1? 0.1 : weight*0.02) /0.25 )+ ' ml', 
        dilution: 'Sem Diluir',
        
      },

      { 
        name: 'BICA Na 8,4%',
        presentation: '1 mEq/ml',
        default: '1 mEq/ml',
        dosage: `${Math.round(weight * 2)} ml`, 
        dilution: `${Math.ceil(weight / 10) * 10} ml + ${Math.ceil(weight / 10) * 10} ml AD`,
        
      },

      { 
        name: 'LIDOCAÍNA 2%',
        presentation: '20 mg/ml',
        default: '1 mg/kg',
        dosage: (weight / 20).toFixed(1) + ' ml',
        dilution: 'Sem Diluir',
        
      },

      { 
        name: 'GLUCO Ca 10%',
        presentation: '100 mg/ml',
        default: weight> 10 ? '1 g dose adulto' : '100 mg/kg',
        dosage: (weight>10 ? 20 : weight * 2 )+ ' ml', 
        dilution: '10 ml + 10 ml AD',
        
      },

      { 
        name: 'GLICOSE',
        presentation: weight > 10 ? '50% - 500 mg/ml' : '10% - 100 mg/ml',
        default: weight > 20 ? '10 g dose adulto' : weight > 10 ? '500 mg/kg' : '200 mg/kg',
        dosage: (weight > 20 ? 40 : weight * 2).toFixed() + ' ml', 
        dilution: weight > 10 ? '20 ml + 20 ml AD' : 'SEM DILUIR',
        
      },
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
            <th className="border p-2">Apresentação</th>
            <th className="border p-2">Dose Padrão</th>
            <th className="border p-2">Diluição</th>
            <th className="border p-2">Dosagem</th>
          </tr>
        </thead>
        <tbody>
          {medications.map((med, index) => (
            <tr key={index}>
              <td className="border p-2">{med.name}</td>
              <td className="border p-2">{med.presentation}</td>
              <td className="border p-2">{med.default}</td>
              <td className="border p-2">{med.dilution}</td>
              <td className="border p-2">{med.dosage}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MedicationTable;
