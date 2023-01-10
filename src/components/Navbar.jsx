import { Box } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const link = [
    { path: "/", text: "Home" },
    { path: "/about", text: "About" },
    { path: "/skills", text: "Skills" },
    { path: "/project", text: "Project" },
    { path: "/contact", text: "Contact" },
  ];

  return (
    <>
      <Box
        bgColor={"blue.300"}
        height="60px"
        display={"flex"}
        alignItems="center"
        justifyContent={"space-between"}
        position="sticky"
        top={"0"}
      >
      <Box color={'white'} fontWeight={'bold'} fontSize='20px' ml='1.5rem'>Satyam</Box>
      <Box  display='flex' gap='3rem' mr='2rem'>
      {link.map((el) => (
          <NavLink
            to={el.path}
            style={({ isActive }) => ({
              color: isActive ? "purple" : "white",
            })}
          >
            {el.text}
          </NavLink>
        ))}
      </Box>
       
      </Box>
    </>
  );
};

export default Navbar;
