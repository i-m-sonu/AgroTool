import Link from "next/link";
import head from "../css/navbar.module.css";


const Navbar = () => {
  return (
    <>
      <div className={head.head}>
        <h3>AgroTool</h3>
        <div className={head.nav}>
          <Link className={head.rm} href="/">
            <strong className={head.res}>Home</strong>
          </Link>
          <Link className={head.rm} href="/Tools">
            <strong className={head.res}>Tools</strong>
          </Link>
        
          <Link className={head.rm} href="/Crop">
            <strong className={head.res}>Crop</strong>
          </Link>
          <Link className={head.rm} href="/Price">
            <strong className={head.res}>Price</strong>
          </Link>
          <Link className={head.rm} href="/Weather"> 
          <strong className={head.res}>Weather</strong>
          </Link>
          <Link className={head.rm} href="/About">
            <strong className={head.res}>About</strong>
          </Link>
      
        </div>
       
      </div>
    </>
  );
};

export default Navbar;
