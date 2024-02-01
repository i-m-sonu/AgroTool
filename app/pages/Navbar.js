import Link from "next/link";
import head from "../css/navbar.module.css";


const Navbar = () => {
  return (
    <>
      <div className={head.head}>
        <h3>AgroTool</h3>
        <div className={head.nav}>
          <Link href="/">
            <strong className={head.res}>Home</strong>
          </Link>

        
          <Link href="/components/Resume">
            <strong className={head.res}>Tools</strong>
          </Link>
          <Link href="/components/Project">
            <strong className={head.res}>About</strong>
          </Link>
      
        </div>
       
      </div>
    </>
  );
};

export default Navbar;
