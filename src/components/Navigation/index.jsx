import logo from "../../logo-shein.png";
import { AiOutlineGlobal } from "react-icons/ai";
import { BiSupport } from "react-icons/bi";

import { CiHeart, CiShoppingCart } from "react-icons/ci";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <div className="main-nav">

      <div className="nav-first">
        <img src={logo} width="100px" style={{ float: "left" }} />
        <a href="#erty" className="right-nav">
          <AiOutlineGlobal />
        </a>
        <a href="#qwe" className="right-nav">
          <CiHeart />
        </a>
        <a href="#qwe" className="right-nav">
          <CiShoppingCart />
        </a>
        <a href="#qwe" className="right-nav">
          <BiSupport />
        </a>
        <input className="right-nav" placeholder="searchbar" />
      </div>

      <div className="nav-second">
        <Link to='/'  >Categories</Link>


      </div>
    

    </div>
  );
}
