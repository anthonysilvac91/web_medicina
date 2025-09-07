import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";

import { menuItems } from "../Utils/menuItems";
import logo from "../assets/logo2.png"

const Nav = () => {
  return (
    <Navbar fluid className=" !bg-bg-primary padding-general md:py-8">
      
      <NavbarBrand href="#">
         <img src={logo} className="w-[200px]" alt="Flowbite React Logo" />
        {/* <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">NOMBRE WEB</span> */}
      </NavbarBrand>

      <NavbarToggle />

      <NavbarCollapse >
         {menuItems.map(({ text, href }) => (
    <NavbarLink className="!text-text-primary text-[20px]" key={href} href={href}>
      {text}
    </NavbarLink>
  ))}
      </NavbarCollapse>
    </Navbar>
  );
};

export default Nav;