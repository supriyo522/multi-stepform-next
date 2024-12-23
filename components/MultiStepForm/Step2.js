const Step2 = ({ state, setState }) => (
    <div>
      <h2 className="text-lg font-bold mb-2">Step 2: Address Information</h2>
      <label className="block mb-2">Address:
        <input
          type="text"
          className="w-full p-2 border rounded"
          value={state.address || ''}
          onChange={(e) => setState({ ...state, address: e.target.value })}
        />
      </label>
      <label className="block mb-2">City:
        <input
          type="text"
          className="w-full p-2 border rounded"
          value={state.city || ''}
          onChange={(e) => setState({ ...state, city: e.target.value })}
        />
      </label>
    </div>
  );
  
  export default Step2;
  