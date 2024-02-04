"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../pages/Navbar";
import file from "../../public/data/test.json";
import Card from "../pages/Card";
import { Button, TextField } from "@mui/material";
import "../globals.css";
import Footer from "../pages/Footer";

const Page = () => {
  const [inputValue, setInputValue] = useState("seed");
  const [displayValue, setDisplayValue] = useState("seed");
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

  const filteredData = data.filter((item) =>
    item.commodity_name.toLowerCase().includes(displayValue.toLowerCase())
  );

  const uniqueCommodities = Array.from(
    new Set(filteredData.map((item) => item.commodity_name))
  );

  return (
    <>
      <Navbar />
      <div className="all">
        <h1>Crop with maximum profits,</h1>
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
        <div className="card">
          {uniqueCommodities.map((commodity, index) => {
            const commodityData = filteredData.find(
              (item) => item.commodity_name === commodity
            );
            return (
              <Card
                key={index}
                loc={"Commodity: "}
                a={commodityData.commodity_name}
                temp={"Min Price (in Quintal): "}
                b={commodityData.min_price_rs_quintal}
                weather={"Max Price (in Quintal): "}
                c={commodityData.max_price_rs_quintal}
                season={"Price Pridiction (in Quintal): "}
                e={commodityData.modal_price_rs_quintal}
              />
            );
          })}
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Page;
