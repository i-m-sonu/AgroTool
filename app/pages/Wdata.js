"use client"
import React from "react";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import wdata from "../../public/data/wforcast.json";
import { useEffect, useState } from "react";
import WeatherContainer from "./WeatherContainer"; 


const Wdata = () => {
  const [inputValue, setInputValue] = useState("Chandigarh");
  const [displayValue, setDisplayValue] = useState("Chandigarh");
  const [data, setData] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleButtonClick = () => {
    setDisplayValue(inputValue);
    fetchData();
  };

  const fetchData = () => {
   
    const filteredData = wdata.filter((val) => {
      
      return val.location_name.toLowerCase().includes(inputValue.toLowerCase());
    });

    
    const limitedData = filteredData.slice(0, 100);

    setData(limitedData);
  };

//   useEffect(() => {
//     // fetchData();
//   }, [inputValue]);

  return (
    <>
      <TextField value={inputValue} onChange={handleInputChange} />
      <Button variant="contained" onClick={handleButtonClick}>
        Search
      </Button>
     
      <WeatherContainer data={data} />
    </>
  );
};

export default Wdata;
