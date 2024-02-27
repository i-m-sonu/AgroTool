import Image from "next/image";
import img from "../../public/images/iot-in-agriculture.jpg";
import { Button } from "@mui/material";
import Link from "next/link";
import home from "../css/homepage.module.css";
import Footer from "./Footer";
import Tools from "./Tools";

const Homepage = () => {
  return (
    <>
      <div className={home.all}>
        <div>
          <Link className={home.link} href="/Tools">
            <Image className={home.img} src={img} />
          </Link>
        </div>

        <div className={home.content}>
          <h1>AgroTool</h1>
          <br />
          <p>
            The heart of our project lies in the application of artificial
            intelligence to analyze statistical data relevant to agriculture. By
            predicting atmospheric variations during sowing seasons and
            providing real-time insights into market price fluctuations, our
            tools aim to empower farmers with informed decision-making
            capabilities. "We envision a future where farmers can harness the
            power of AI to make strategic decisions about crop cultivation,
            optimize resource usage, and navigate market uncertainties."
          </p>
          <br />
          <Button className={home.link} variant="contained">
            <a className={home.link} href="/Tools">
              <strong>Explore Tools</strong>
            </a>
          </Button>
        </div>
      </div>
      <Tools />
      <Footer />
    </>
  );
};

export default Homepage;
