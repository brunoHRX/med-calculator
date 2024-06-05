import { useState } from 'react';
import PatientForm from '../components/PatientForm';
import MedicationTable from '../components/MedicationTable';

const Home = () => {
  const [age, setAge] = useState<number | null>(null);
  const [weight, setWeight] = useState<number | null>(null);2
  const [height, setHeight] = useState<number | null>(null);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Calculadora de Medicação</h1>
      <PatientForm
        age={age}
        setAge={setAge}
        weight={weight}
        setWeight={setWeight}
        height={height}
        setHeight={setHeight}
      />
      <MedicationTable age={age} weight={weight} height={height} />
    </div>
  );
};

export default Home;
