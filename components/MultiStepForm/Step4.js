const Step4 = ({ state }) => (
    <div>
      <h2 className="text-lg font-bold mb-2">Step 4: Review Your Information</h2>
      <div className="mb-2">
        <strong>Name:</strong> {state.name || 'Not provided'}
      </div>
      <div className="mb-2">
        <strong>Address:</strong> {state.address || 'Not provided'}
      </div>
      <div className="mb-2">
        <strong>City:</strong> {state.city || 'Not provided'}
      </div>
      <div className="mb-2">
        <strong>Favorite Color:</strong> {state.favoriteColor || 'Not provided'}
      </div>
      <div className="mb-2">
        <strong>Hobbies:</strong> {state.hobbies || 'Not provided'}
      </div>
    </div>
  );
  
  export default Step4;
  