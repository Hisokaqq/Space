import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loader from './Loader';
import usePlanetStore from '../helpers/SelectedPlanetStore';

const Sidebar = ({ open }) => {
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
      {loading ? (
        <Loader />
      ) : planetInfo ? (
        <div className="flex flex-col m-5 w-full ">
          {/* Display the planet information here */}
          <h2 className="mx-auto text-gray-200 text-3xl my-10 italic font-bold" >{planetInfo.name}</h2>
          <div className=" h-full flex justify-center  flex-col ml-5 gap-5">
          <div className= "gap-2 ">
            <p className="text-gray-300 text-lg">Mass: <span className="text-sm text-gray-400 ">{planetInfo.mass}</span></p>
          </div>
          <div className= "gap-2 ">
            <p className="text-gray-300 text-lg">Radius: <span className="text-sm text-gray-400">{planetInfo.radius}</span></p>
          </div>
          <div className= "gap-2 ">
            <p className="text-gray-300 text-lg">Period: <span className="text-sm text-gray-400">{planetInfo.period}</span></p>
          </div>
          <div className= "gap-2 ">
            <p className="text-gray-300 text-lg">Semi major axis: <span className="text-sm text-gray-400">{planetInfo.semi_major_axis}</span></p>
          </div>
          <div className= "gap-2 ">
            <p className="text-gray-300 text-lg">Temperature: <span className="text-sm text-gray-400">{planetInfo.temperature}</span></p>
          </div>
          <div className= "gap-2 ">
            <p className="text-gray-300 text-lg">Distance light year: <span className="text-sm text-gray-400">{planetInfo.distance_light_year}</span></p>
          </div>
          <div className= "gap-2 ">
            <p className="text-gray-300 text-lg">Host star mass: <span className="text-sm text-gray-400">{planetInfo.host_star_mass}</span></p>
          </div>
          <div className= "gap-2 ">
            <p className="text-gray-300 text-lg">Host star temperature: <span className="text-sm text-gray-400">{planetInfo.host_star_temperature}</span></p>
          </div>
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
