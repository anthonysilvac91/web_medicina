import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import { Link } from "react-router-dom";
import { menuItems } from "../Utils/menuItems";
import logo from "../assets/logo2.png"

const Nav = () => {
  return (
    <Navbar fluid className=" !bg-bg-secondary padding-general md:py-8">
      
      <NavbarBrand href="#">
         <img src={logo} className="w-[200px]" alt="Flowbite React Logo" />
        {/* <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">NOMBRE WEB</span> */}
      </NavbarBrand>

      <NavbarToggle />

      <NavbarCollapse >
         {menuItems.map(({ text, route }) => (
    <NavbarLink className="!text-text-primary text-[20px]" key={route} as={Link} to={route}>
      {text}
    </NavbarLink>
  ))}
      </NavbarCollapse>
    </Navbar>
  );
};

export default Nav;