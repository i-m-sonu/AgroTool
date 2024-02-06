import Link from "next/link";
// import head from "../css/navbar.module.css";
import "../globals.css";


const Navbar = () => {
  return (
    <>
     <header class="header">
        <a href="" class="logo">AgroTool</a>
        <input class="menu-btn" type="checkbox" id="menu-btn" />
        <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
        <ul class="menu">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/Tools">Tools</Link></li>
          <li><Link href="/Crop">Crop</Link></li>
          <li><Link href="/Price">Price</Link></li>
          <li><Link href="/Weather">Weather</Link></li>
          <li><Link href="/About">About</Link></li>
          
        </ul>
    </header>
    </>
  );
};

export default Navbar;
