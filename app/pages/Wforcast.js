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
    
    const filteredData = wdata.filter((val) => {
     
      return val.location_name.toLowerCase().includes(inputValue.toLowerCase());
    });

   
    const limitedData = filteredData.slice(0, 30);

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
      
      {data.map((val, index) => (
        <Card
          key={index}
          m={index}
          a={val.location_name}
          b={val.region}
          c={val.temperature_celsius}
          d={val.condition_text}
        //   e={val.last_updated}
        />
      ))}
      <div>
        <Wdata/>
      </div>
    </>
  );
};

export default Wforcast;
