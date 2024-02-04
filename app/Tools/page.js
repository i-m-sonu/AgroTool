import Navbar from "../pages/Navbar";
import tool from "../css/tools.module.css";
import { Button } from "@mui/material";
const page = () => {
  return (
    <>
      <Navbar />
      <div className={tool.bg}>
        <h1 className={tool.head}>
          Welcome to <span className={tool.strong}>Tools page</span>,
        </h1>
        <h1><u>Most suitable Crop</u></h1>
        <br />
        <p>
          Discovering the most suitable crop for a particular region is made
          effortless through our integrated data feature. Leveraging
          comprehensive datasets, our website analyzes factors such as climate,
          soil composition, and historical yield trends. This invaluable
          information empowers farmers and agricultural enthusiasts to make
          informed decisions about crop selection, optimizing yield and
          sustainability. By harnessing the power of data-driven insights, our
          platform provides tailored recommendations, ensuring that crops chosen
          are well-suited to the unique conditions of each region. Stay ahead in
          agriculture with our cutting-edge technology, enhancing productivity
          and fostering a more resilient and prosperous farming community.
        </p>
        <br />
        <div className={tool.flex}>
          <h3><u>Check most profitable crop of your region</u></h3>
          <Button className={tool.btn} variant="contained">Click Here</Button>
        </div>
        <br />
        <br />
        <h1><u>Crop with maximum profits</u></h1><br />
        <p>
          Unlock the potential for maximum profitability in your agriculture
          endeavors with our innovative feature that identifies the most
          lucrative crop for your specific region. Through meticulous data
          comparison and analysis, we pinpoint the crop with the highest profit
          margins based on market trends, input costs, and regional demand.
          Empower your farming decisions by harnessing insights that transcend
          traditional practices. Our platform equips you with a competitive
          advantage, ensuring that you invest your efforts and resources in
          cultivating crops that yield optimal financial returns. Stay ahead of
          the curve and cultivate success with our precision-driven technology,
          redefining the landscape of profitable farming.
        </p>
        <br />
        <div className={tool.flex}>
          <h3><u>To Check the price comparison of crop</u></h3>
          <br />
          <Button className={tool.btn} variant="contained">Click Here</Button>  </div><br />
          <h1><u>Weather forcast</u></h1>
          <br />
      
        <p>
          Stay one step ahead of the elements with our cutting-edge weather
          feature, offering real-time forecasts and daily updates. Seamlessly
          integrated into our website, this tool provides a comprehensive
          overview of current weather conditions and precise forecasts tailored
          to your location. Whether you're planning outdoor activities, managing
          agricultural schedules, or simply staying informed, our weather
          feature keeps you in the loop. With user-friendly visuals and reliable
          data sources, it's your go-to resource for making weather-related
          decisions. Embrace the convenience of staying weather-ready and
          informed, ensuring you're prepared for whatever nature has in store.
          Welcome a new era of weather intelligence.
        </p><br />
        <div className={tool.flex}>
          <h3><u>To Check weather condition or weather forcast</u></h3>
          <Button className={tool.btn} variant="contained">Click Here</Button>
        </div>
      </div>
    </>
  );
};

export default page;
