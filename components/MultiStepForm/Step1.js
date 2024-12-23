const Step1 = ({ state, setState }) => (
    <div>
      <h2 className="text-lg font-bold mb-2">Step 1: Personal Information</h2>
      <label className="block mb-2">Name:
        <input
          type="text"
          className="w-full p-2 border rounded"
          value={state.name || ''}
          onChange={(e) => setState({ ...state, name: e.target.value })}
        />
      </label>
    </div>
  );
  
  export default Step1;