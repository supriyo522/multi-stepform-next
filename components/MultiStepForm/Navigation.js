const Navigation = ({ currentStep, steps, onStepChange }) => (
    <div className="flex justify-between mb-4">
      {steps.map((step, index) => (
        <button
          key={step}
          className={`p-2 ${
            index === currentStep
              ? 'font-bold underline'
              : 'text-gray-500 dark:text-gray-400'
          }`}
          onClick={() => onStepChange(index)}
        >
          {step}
        </button>
      ))}
    </div>
  );
  
  export default Navigation;