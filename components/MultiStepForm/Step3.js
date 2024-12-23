const Step3 = ({ state, setState }) => (
    <div>
      <h2 className="text-lg font-bold mb-2">Step 3: Preferences</h2>
      <label className="block mb-2">Favorite Color:
        <input
          type="text"
          className="w-full p-2 border rounded"
          value={state.favoriteColor || ''}
          onChange={(e) => setState({ ...state, favoriteColor: e.target.value })}
        />
      </label>
      <label className="block mb-2">Hobbies:
        <textarea
          className="w-full p-2 border rounded"
          value={state.hobbies || ''}
          onChange={(e) => setState({ ...state, hobbies: e.target.value })}
        />
      </label>
    </div>
  );
  
  export default Step3;
  