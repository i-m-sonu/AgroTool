"use client"
import React from "react";

const WeatherContainer = ({ data }) => {
  if (data.length === 0) {
    return <p>No data available for the entered location.</p>;
  }
  

  // Calculate average temperature and find the most frequently occurring condition
  const avgTemperature = Math.floor(data.reduce((sum, val) => sum + val.temperature_celsius, 0) / data.length);

  const conditionCounts = data.reduce((counts, val) => {
    counts[val.condition_text] = (counts[val.condition_text] || 0) + 1;
    return counts;
  }, {});

  const mostFrequentCondition = Object.keys(conditionCounts).reduce((a, b) =>
    conditionCounts[a] > conditionCounts[b] ? a : b
  );

  return (
    <div>
      <p>Location: {data[0].location_name}</p>
      <p>Temperature Forcast: {avgTemperature}</p>
      <p>Frequent Condition Forcast: {mostFrequentCondition}</p>
    </div>
  );
};

export default WeatherContainer;
