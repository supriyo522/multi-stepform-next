import { create } from 'zustand';

const useFormStore = create((set) => ({
  state: {}, // Initial state
  setState: (newState) => set((prev) => ({
    state: { ...prev.state, ...newState }, // Update state immutably
  })),
}));

export default useFormStore;
