import { useState } from "react";
import logo from "../assets/logo.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const styles = {
  links: `my-3 md:my-0 md:text-gray-200 hover:underline hover:text-lg transition duration-500 ease-out hover:ease-in hover:text-red-500 xl:mx-4 xl:text-xl`,
};
const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle((prevToggle) => !prevToggle);
  };

  return (
    <nav className="p-4 md:flex  md:items-center md:justify-between">
      {" "}
      <div className="flex justify-between items-center">
        <img src={logo} alt="logo" className="w-14 h-14" />
        {!toggle && <span onClick={handleToggle}>
           
            <AiOutlineMenu size={48} color={"white"} className="md:hidden" />
          
        </span>}
      </div>
      <ul
        className={`bg-white grid place-items-center top-0 gap-4 z-[1] w-full left-0 py-4 pl-7 absolute animate-slide-out duration-2000 ease-in-out ${
          toggle ? "h-screen" : "hidden"
        } md:flex   md:w-auto md:py-0 md:opacity-100 md:z-auto md:pl-0 md:items-center md:static md:bg-transparent`}
      >
       {toggle && <li><span onClick={handleToggle}> <AiOutlineClose
              size={48}
              color={"black"}
              className="md:hidden "
            /></span></li>}
        <li className={styles.links}>
          <NavLink to="/">HOME</NavLink>
        </li>
        <li className={styles.links}>
          <NavLink to="/Trade">TRADE</NavLink>
        </li>
        <li className={styles.links}>
          <NavLink to="/About">ABOUT</NavLink>
        </li>
        <li className={styles.links}>
          <NavLink to="/Contact">CONTACT US</NavLink>
        </li>

        <li className={styles.links}>
          <NavLink to="/Services">SERVICES</NavLink>
        </li>
      </ul>
      <h6 className="hidden md:block text-white text-lg">Log in</h6>
    </nav>
  );
};

export default Navbar;
