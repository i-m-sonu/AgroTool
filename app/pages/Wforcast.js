"use client";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import wdata from "../../public/data/wforcast.json";
import { useEffect, useState } from "react";
import Card from "./Card";

import "../../app/globals.css";
import WeatherContainer from "./WeatherContainer";
const Wforcast = () => {
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

    const limitedData = filteredData.slice(0, 30);

    setData(limitedData);
  };

  useEffect(() => {
    fetchData();
  }, [inputValue]);

  return (
    <>
      <div className="all">
        <h1>Weather forcast,</h1>
        <div className="search">
          <div className="input">
            <TextField
              label="Enter Commodity"
              variant="outlined"
              value={inputValue}
              onChange={handleInputChange}
            />
          </div>
          <div className="btn">
            <Button variant="contained" onClick={handleButtonClick}>
              Search
            </Button>
          </div>
        </div>
        <div>
          <WeatherContainer data={data} />
        </div>
        <h1>Weather Status in past</h1>
        <div className="card">
          {data.map((val, index) => (
            <Card
              key={index}
              // m={index}
              loc={"Location: "}
              a={val.location_name}
              temp={"Region: "}
              b={val.region}
              weather={"Temp(°C): "}
              c={val.temperature_celsius}
              season={"Condition: "}
              e={val.condition_text}
              //   e={val.last_updated}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Wforcast;
