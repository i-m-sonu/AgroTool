"use client"
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import wdata from "../../public/data/wforcast.json";
import { useEffect, useState } from "react";
import Card from "./Card";
import Wdata from "./Wdata";

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
    // Filter data based on the entered value
    const filteredData = wdata.filter((val) => {
      // Assuming 'location_name' is the property to filter on
      return val.location_name.toLowerCase().includes(inputValue.toLowerCase());
    });

    // Limit the filtered data to the first 100 items
    const limitedData = filteredData.slice(0, 10);

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
      {data.map((val, index) => (
        <Card
          key={index}
          m={index}
          a={val.location_name}
          b={val.region}
          c={val.temperature_celsius}
          d={val.condition_text}
          e={val.last_updated}
        />
      ))}
      <div>
        <Wdata/>
      </div>
    </>
  );
};

export default Wforcast;
