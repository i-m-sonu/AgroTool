"use client";

import Card from "./Card";

import '../../app/globals.css'


const WeatherContainer = ({ data }) => {
  if (!data || data.length === 0) {
    return null;
  }
  const avgTemperature = Math.floor(
    data.reduce((sum, val) => sum + val.temperature_celsius, 0) / data.length
  );

  const conditionCounts = data.reduce((counts, val) => {
    counts[val.condition_text] = (counts[val.condition_text] || 0) + 1;
    return counts;
  }, {});

  const mostFrequentCondition = Object.keys(conditionCounts).reduce((a, b) => {
    return conditionCounts[a] > conditionCounts[b] ? a : b;
  });
  

  return (
    <>
    <h1>Weather prediction</h1>
    <div className="card">

    <Card loc={"Location: "} a={data[0].location_name} temp={"Average temperature: "} b={avgTemperature} weather={"Weather Status: "} c={mostFrequentCondition} />
    </div>
    
    </>
  );
};

export default WeatherContainer;
