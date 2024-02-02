"use client"
import React from "react";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import wdata from "../../public/data/wforcast.json";
import { useEffect, useState } from "react";
import WeatherContainer from "./WeatherContainer"; // New component
import Card from "./Card";

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
    // Filter data based on the entered value
    const filteredData = wdata.filter((val) => {
      // Assuming 'location_name' is the property to filter on
      return val.location_name.toLowerCase().includes(inputValue.toLowerCase());
    });

    // Limit the filtered data to the first 100 items
    const limitedData = filteredData.slice(0, 100);

    setData(limitedData);
  };

  useEffect(() => {
    // fetchData();
  }, [inputValue]);

  return (
    <>
      <TextField value={inputValue} onChange={handleInputChange} />
      <Button variant="contained" onClick={handleButtonClick}>
        Search
      </Button>
      {/* <p>You entered: {displayValue}</p> */}
      <WeatherContainer data={data} />
    </>
  );
};

export default Wdata;
