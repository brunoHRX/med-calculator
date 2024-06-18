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
  tag: object;
}

const MedicationTable: React.FC<MedicationTableProps> = ({ age, weight, height }) => {
  const calculateMedications = (): Medication[] => {
    if (!weight || !age) return [];

    const medications = [
      { 
        name: 'ADRENALINA',
        presentation: '1 mg/ml',
        default: weight > 40 ? '1 mg dose adulto' : '0,01 mg/kg',
        dilution: weight > 40 ? 'Sem Diluir' : '1 ml + 9 ml AD',
        dosage: weight > 40 ? '1 ml' : ((weight * 0.01 / 0.1).toFixed(1) + ' ml'), 
        tag: ['PCR'],
        
      },

      { 
        name: 'ATROPINA',
        presentation: '0,25 mg/ml',
        default: weight<= 5 ? '0,1 mg mínimo' : weight > 20 ? '0,4 mg dose adulto':'0,02 mg/kg',
        dilution: 'Sem Diluir',
        dosage: ((weight*0.02<0.1? 0.1:weight*0.02)/0.25>1.6? 1.6 : (weight*0.02<0.1? 0.1 : weight*0.02) /0.25 )+ ' ml', 
        tag: ['PCR'],
        
      },

      { 
        name: 'BICA Na 8,4%',
        presentation: '1 mEq/ml',
        default: '1 mEq/ml',
        dilution: `${Math.ceil(weight / 10) * 10} ml + ${Math.ceil(weight / 10) * 10} ml AD`,
        dosage: `${Math.round(weight * 2)} ml`, 
        tag: ['PCR'],
      },

      { 
        name: 'LIDOCAÍNA 2%',
        presentation: '20 mg/ml',
        default: '1 mg/kg',
        dilution: 'Sem Diluir',
        dosage: (weight / 20).toFixed(1) + ' ml',
        tag: ['PCR'],
        
      },

      { 
        name: 'GLUCO Ca 10%',
        presentation: '100 mg/ml',
        default: weight> 10 ? '1 g dose adulto' : '100 mg/kg',
        dilution: '10 ml + 10 ml AD',
        dosage: (weight>10 ? 20 : weight * 2 )+ ' ml', 
        tag: ['PCR'],
        
      },

      { 
        name: 'GLICOSE',
        presentation: weight > 10 ? '50% - 500 mg/ml' : '10% - 100 mg/ml',
        default: weight > 20 ? '10 g dose adulto' : weight > 10 ? '500 mg/kg' : '200 mg/kg',
        dilution: weight > 10 ? '20 ml + 20 ml AD' : 'Sem Diluir',
        dosage: (weight > 20 ? 40 : weight * 2).toFixed() + ' ml', 
        tag: ['PCR'],
        
      },
      
      { 
        name: 'FENTANIL',
        presentation: '50 mcg/ml',
        default: '2 mcg/kg',
        dilution: 'Sem Diluir', 
        dosage: (weight * 2 / 50).toFixed(1) + ' ml',
        tag: ['SED', 'ANALG', 'BLOQ'],
        
      },

      { 
        name: 'MIDAZOLAM',
        presentation: '5 mg/ml',
        default: weight < 25 ? '0,2 mg/kg' : '5 mg - dose adulto',
        dilution: 'Sem Diluir', 
        dosage: (weight * 0.1 > 2) ?  '2 ml' : (weight * 0.1).toFixed(1) + ' ml',
        tag: ['SED', 'ANALG', 'BLOQ'],
        
      },

      { 
        name: 'DIAZEPAM',
        presentation: '10 mg/2 ml',
        default: weight > 20 ? '20 mg dose adulto' : '0,5 mg/kg',
        dilution: 'Sem Diluir', 
        dosage: weight < 25 ? (weight * 0.2 / 5).toFixed(1) + ' ml' : '1 ml',
        tag: ['SED', 'ANALG', 'BLOQ'],
        
      },

      { 
        name: 'MEPERIDINA',
        presentation: '100 mg/2ml',
        default: weight > 100 ? '100 mg máximo' : '1 mg/kg',
        dilution: '2 ml + 8 ml AD', 
        dosage:(weight / 10) > 10 ? '10 ml' : (weight / 10).toFixed(1) + ' ml' ,
        tag: ['SED', 'ANALG', 'BLOQ'],
        
      },

      { 
        name: 'MORFINA',
        presentation: '10 mg/ml',
        default: weight > 100 ? '10 mg máximo' : '0,1 mg/kg',
        dilution: '1 ml + 9 ml AD', 
        dosage:(weight / 10) > 10 ? '10 ml' : (weight / 10).toFixed(1) + ' ml' ,
        tag: ['SED', 'ANALG', 'BLOQ'],
        
      },

      { 
        name: 'QUETAMINA',
        presentation: '50 mg/ml',
        default: '1 mg/kg',
        dilution: 'Sem Diluir', 
        dosage: (weight / 50).toFixed(1) + ' ml' ,
        tag: ['SED', 'ANALG', 'BLOQ'],
        
      },

      { 
        name: 'PANCURÔNIO',
        presentation: '2 mg/ml',
        default: weight < 40 ? '0,1 mg/kg' : '4 mg - dose adulto',
        dilution: 'Sem Diluir', 
        dosage: weight < 40 ? (weight * 0.1 / 2).toFixed(1) + ' ml': '2 ml',
        tag: ['SED', 'ANALG', 'BLOQ'],
        
      },

      { 
        name: 'SUCCINILCOLINA',
        presentation: '100 mg/frasco',
        default: '1 mg/kg',
        dilution: '1 frasco + 5 ml AD', 
        dosage: (weight / 20).toFixed(1) + ' ml' ,
        tag: ['SED', 'ANALG', 'BLOQ'],
        
      },

      { 
        name: 'THIOPENTAL',
        presentation: '500 mg/frasco',
        default: weight > 25 ? '25 mg dose adulto' : '1 mg/kg',
        dilution: '1 frasco + 20 ml AD', 
        dosage:  weight > 25 ? '1 ml' : (weight / 25).toFixed(1) + ' ml',
        tag: ['SED', 'ANALG', 'BLOQ'],
        
      },

      { 
        name: 'FENOBARBITAL',
        presentation: '100 mg/ml',
        default: '5 mg/kg',
        dilution: 'Sem Diluir', 
        dosage:  (weight * 5  /  100).toFixed(1) + ' ml',
        tag: ['ANTICONV'],
        
      },

      { 
        name: 'FENITOÍNA',
        presentation: '50 mg/ml',
        default: '15 mg/kg',
        dilution: 'Sem Diluir', 
        dosage:  (weight * 15  / 50).toFixed(1) + ' ml',
        tag: ['ANTICONV'],
        
      },

      { 
        name: 'NALOXONE',
        presentation: '0,4 mg/ml',
        default: weight > 20 ? '2 mg dose adulto' : '0,1 mg/kg',
        dilution: 'Sem Diluir',
        dosage:  weight > 20 ? '5 ml' : (weight * 0.1 / 0.4).toFixed(1) + ' ml',
        tag: ['ANTÍDOTOS'],
        
      },

      { 
        name: 'FLUMAZENIL',
        presentation: '0,1 mg/ml',
        default: weight > 20 ? '0,2 mg dose adulto' : '0,01 mg/kg',
        dilution: 'Sem Diluir',
        dosage:  weight > 20 ? '2 ml' : (weight * 0.01 / 0.1).toFixed(1) + ' ml',
        tag: ['ANTÍDOTOS'],
        
      },

      { 
        name: 'DOPAMINA',
        presentation: '-',
        default: '10 mcg/kg/min',
        dilution: (weight < 11 ? 10 : (weight < 21 ? 20 : (weight < 31 ? 30 : 40))) + ' ml + ' + (50 - (weight < 11 ? 10 : (weight < 21 ? 20 : (weight < 31 ? 30 : 40)))) + ' ml SF',
        dosage:  (weight * (weight < 11 ? 0.6 : (weight < 21 ? 0.3 : (weight < 31 ? 0.2 : 0.15)))).toFixed(2) + ' ml/h',
        tag: ['CONTÍNUAS'],
        
      },

      { 
        name: 'NORADRENALINA',
        presentation: '-',
        default: '0,1 mcg/kg/min',
        dilution: (weight < 11 ? 4 : (weight < 21 ? 8 : (weight < 31 ? 12 : 16))) + ' ml + ' + (50 - (weight < 11 ? 4 : (weight < 21 ? 8 : (weight < 31 ? 12 : 16)))) + ' ml SF',
        dosage:  (weight * (weight < 11 ? 0.08 : (weight < 21 ? 0.04 : (weight < 31 ? 0.03 : 0.02))) + 0.05).toFixed(1) + ' ml/h',
        tag: ['CONTÍNUAS'],
        
      },

      { 
        name: 'DOBUTAMINA',
        presentation: '-',
        default: weight > 20 ? '0,2 mg dose adulto' : '0,01 mg/kg',
        dilution: (weight < 11 ? 10 : (weight < 21 ? 20 : (weight < 31 ? 30 : 40))) + ' ml + ' + (50 - (weight < 11 ? 10 : (weight < 21 ? 20 : (weight < 31 ? 30 : 40)))) + ' ml SF',
        dosage:  (weight * (weight < 11 ? 0.6 : (weight < 21 ? 0.3 : (weight < 31 ? 0.2 : 0.15))) + 0.05).toFixed(1) + ' ml/h',
        tag: ['CONTÍNUAS'],
        
      },

      { 
        name: 'ADRENALINA',
        presentation: '-',
        default: weight > 20 ? '0,2 mg dose adulto' : '0,01 mg/kg',
        dilution: (weight < 11 ? 10 : (weight < 21 ? 20 : (weight < 31 ? 30 : 40))) + ' ml + ' + (50 - (weight < 11 ? 10 : (weight < 21 ? 20 : (weight < 31 ? 30 : 40)))) + ' ml SF',
        dosage:  (weight * (weight < 11 ? 0.6 : (weight < 21 ? 0.3 : (weight < 31 ? 0.2 : 0.15))) + 0.05).toFixed(1) + ' ml/h',
        tag: ['CONTÍNUAS'],
        
      },

      { 
        name: 'LIDOCAÍNA 2%',
        presentation: '-',
        default: weight > 20 ? '0,2 mg dose adulto' : '0,01 mg/kg',
        dilution: 'Sem Diluir',
        dosage:  weight > 20 ? '2 ml' : (weight * 0.01 / 0.1).toFixed(1) + ' ml',
        tag: ['CONTÍNUAS'],
        
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
        <tbody className='text-center'>
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
