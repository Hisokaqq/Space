import create from 'zustand';

const usePlanetStore = create((set) => ({
  planet: '',

  setPlanet: (newPlanet) => {
    set({ planet: newPlanet });
    console.log('Updated planet:', newPlanet);
  },
}));

export default usePlanetStore;
