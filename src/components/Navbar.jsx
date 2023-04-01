import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Stack,
  Heading,
  Link,
} from "@chakra-ui/react";
import "../styles/navbar.css";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import * as React from "react";
import { NavLink } from "react-router-dom";
// import { transform } from "framer-motion";

const Links = [
  { id: 1, to: "/", text: "Home" },
  { id: 2, to: "/#about", text: "About" },
  { id: 3, to: "/#skill", text: "Skills" },
  { id: 4, to: "/#project", text: "Projects" },
  { id: 5, to: "/#contact", text: "Contact" },
];

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        px={4}
        position="sticky"
        top="0"
        bgImage={
          "https://media1.giphy.com/media/l0Iy0WGm1oN84idbO/giphy.gif?cid=ecf05e47jcmi4v46kgd540hlthhfwf2hhd2uqth6t5aziwx8&rid=giphy.gif&ct=g"
        }
        boxShadow= {"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        zIndex="1"
        opacity={0.9}
      >
        <Flex
          h={16}
          alignItems={"center"}
          justifyContent={{ base: "space-between", lg: "space-around" }}
        >
          <Flex alignItems={"center"}>
           <div className="title">
           <Heading id="naam" fontSize={{base:'15px',lg:'35px'}}> Satyam Banwale</Heading>
           
           </div>
          </Flex>
          <HStack spacing={8} alignItems={"center"}>
            <HStack
              as={"nav"}
              spacing={6}
              color={"#03ddf0"}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <NavLink to={link.to} key={link.id}>
                  <Box
                    className="hover-underline-animation"
                    _hover={{
                      color: "#03ddf0",
                      transform: "scale(1.2)",
                      transition: "transform .9s",
                    }}
                  >
                    {link.text}
                  </Box>
                </NavLink>
              ))}
              <Box>
                <Link color={"#03ddf0"} href="/satyamCV.pdf" download>
                  Resume
                </Link>
              </Box>
            </HStack>
          </HStack>
          <IconButton
            size={"sm"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            bgColor="transparent"
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={3}>
              {Links.map((link) => (
                <NavLink to={link.to} key={link.id}>
                  {link.text}
                </NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
