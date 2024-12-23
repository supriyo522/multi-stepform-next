// import Image from "next/image";

'use client'; 

import Navigation from '../components/MultiStepForm/Navigation';
import Step1 from '../components/MultiStepForm/Step1';
import Step2 from '../components/MultiStepForm/Step2';
import Step3 from '../components/MultiStepForm/Step3';
import Step4 from '../components/MultiStepForm/Step4';
import useFormStore from '../store/formStore';
import { useState } from 'react';

const steps = ['Personal Info', 'Address', 'Preferences', 'Review'];

const Home = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const { state, setState } = useFormStore();

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <Step1 state={state} setState={setState} />;
      case 1:
        return <Step2 state={state} setState={setState} />;
      case 2:
        return <Step3 state={state} setState={setState} />;
      case 3:
        return <Step4 state={state} setState={setState} />;
      default:
        return null;
    }
  };

  return (
    <div>
      <Navigation
        currentStep={currentStep}
        steps={steps}
        onStepChange={setCurrentStep}
      />
      {renderStep()}
    </div>
  );
};

export default Home;
