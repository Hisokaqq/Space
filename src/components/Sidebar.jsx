import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loader from './Loader';
import usePlanetStore from '../helpers/SelectedPlanetStore';

const PlanetInfo = ({ label, value }) => (
  <div className="gap-1 flex items-center w-[95%] lg:w-[90%]  xl:w-[90%]">
    <p className="text-gray-300 text-lg">{label}:</p>
    <div className="bg-white h-0.5 flex-1 self-end mb-2"></div>
    <span className="text-sm text-gray-400">{value}</span>
  </div>
);

const Sidebar = ({ open, setOpen }) => {
  const [planetInfo, setPlanetInfo] = useState(null);
  const [loading, setLoading] = useState(false); // Track loading state
  const planetName = usePlanetStore((state) => state.planet);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://api.api-ninjas.com/v1/planets',
          {
            params: { name: planetName },
            headers: {
              'X-Api-Key': 'Yxg0YETMNY4GPZ0fjzXTMA==YwxuDAjstko66OFx',
            },
          }
        );
        setPlanetInfo(response.data[0]);
        setLoading(false); // Set loading to false after data is fetched
        console.log(response.data[0]);
      } catch (error) {
        setLoading(false); // Set loading to false if there's an error
        console.error('Error: ', error);
      }
    };
    if (planetName) {
      setLoading(true); // Set loading to true before starting the API request
      fetchData();
    }
  }, [planetName]);

  return (
    <div className={`sidebar ${open ? 'sidebar-open' : ''}`}>
      <div className='svg' onClick={()=>setOpen(false)}>
        <img src="./assets/left.svg" alt="Your SVG" className="w-full"/>
      </div>
      {loading ? (
        <Loader />
      ) : planetInfo ? (
        <div className="flex flex-col m-5 w-full ">
          {/* Display the planet information here */}
          <h1 className="mx-auto text-gray-200 text-3xl my-10 italic font-bold" >{planetInfo.name}</h1>
          <div className=" h-full flex justify-center  items-start flex-col ml-5 gap-5">
          <PlanetInfo label="Mass" value={planetInfo.mass} />
      <PlanetInfo label="Radius" value={planetInfo.radius} />
      <PlanetInfo label="Period" value={planetInfo.period} />
      <PlanetInfo label="Semi major axis" value={planetInfo.semi_major_axis} />
      <PlanetInfo label="Temperature" value={planetInfo.temperature} />
      <PlanetInfo label="Distance light year" value={planetInfo.distance_light_year} />
      <PlanetInfo label="Host star mass" value={planetInfo.host_star_mass} />
      <PlanetInfo label="Host star temperature" value={planetInfo.host_star_temperature} />
          </div>
        </div>
      ) : (
        <div className="flex h-full w-full justify-center items-center">
          <p className="h-10">No planet information available.</p>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
