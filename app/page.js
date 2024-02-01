"use client";
import React, { useEffect, useState } from "react";
import Navbar from "./pages/Navbar";
import file from "../public/data/weather.json";
import Card from "./pages/Card";
import { ButtonBase, TextField } from "@mui/material";
import Button from '@mui/material/Button';

const Page = () => {
  const [inputValue, setInputValue] = useState("");
  const [displayValue, setDisplayValue] = useState("");
  const [data, setData] = useState([]);
  const [dataNotFound, setDataNotFound] = useState(false);

  const fetchData = () => {
    try {
      setData(file);
      setDataNotFound(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setDataNotFound(true);
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

  const top3Data = sortedData.slice(0, 6);

  return (
    <>
      <Navbar />
      <TextField value={inputValue} onChange={handleInputChange}/>
      <div>

      <Button  variant="contained" onClick={handleButtonClick}>Search</Button>
      </div>
      

      {displayValue &&
        (top3Data.length > 0 ? (
          top3Data.map((item, index) => (
            <Card
              key={index}
              m={index+1}
              a={item.State}
              b={item.District}
              c={item.Crop}
              e={item.Season}
              f={item.Area}
              g={item.Production}
              h={item.Yield}
            />
          ))
        ) : (
          <div>INVALID INPUT</div>
        ))}
    </>
  );
};

export default Page;
