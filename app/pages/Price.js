"use client";
import React, { useEffect, useState } from "react";

import file from "../../public/data/weather.json";
import Card from "./Card";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import "../../app/globals.css";
const Price = () => {
  const [inputValue, setInputValue] = useState("Chandigarh");
  const [displayValue, setDisplayValue] = useState("Chandigarh");
  const [data, setData] = useState([]);

  const fetchData = () => {
    try {
      setData(file);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleButtonClick = () => {
    setDisplayValue(inputValue);
    fetchData();
  };

  const filteredData = data.filter(
    (item) =>
      item.State.toLowerCase() === inputValue.toLowerCase() ||
      item.District.toLowerCase() === inputValue.toLowerCase()
  );

  // Group data by crop and find the entry with the highest yield for each crop
  const groupedData = Object.values(
    filteredData.reduce((acc, item) => {
      const cropKey = item.Crop;
      if (
        !acc[cropKey] ||
        parseFloat(item.Yield) > parseFloat(acc[cropKey].Yield)
      ) {
        acc[cropKey] = item;
      }
      return acc;
    }, {})
  );

  const sortedData = groupedData.sort(
    (a, b) => parseFloat(b.Yield) - parseFloat(a.Yield)
  );

  const top3Data = sortedData.slice(0, 9);

  return (
    <>
      <div className="all">
        <h1>Most suitable Crop,</h1>
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
        <h2 className="centre">Top 9 most profitable crops</h2>
        <div className="card">
          {top3Data.map((item, index) => (
            <Card
              key={index}
              // m={index + 1}
              loc="State: "
              a={item.State}
              temp={"District: "}
              b={item.District}
              weather={"Crop: "}
              c={item.Crop}
              season={"Season: "}
              e={item.Season}
              // area={"Area: "}
              // f={item.Area}
              pro={"Production: "}
              g={item.Production}
              yield={"Yield: "}
              h={item.Yield}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Price;
