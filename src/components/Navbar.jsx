import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  Stack,
  Image,
  Heading,
  Center,
  Link,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import * as React from "react";
import { NavLink } from "react-router-dom";

const Links = [
  { id: 1, to: "/", text: "Home" },
  { id: 2, to: "/#about", text: "About" },
  { id: 3, to: "/#skill", text: "Skills" },
  { id: 4, to: "/#project", text: "Projects" },
  { id: 5, to: "/#contact", text: "Contact" },
];

export default function Navbar() {
  // let activeStyle = {
  //   textDecoration: "none",
  //   color: "red",
  //   fontWeight: "bolder",
  //   fontSize: "18px",
  // };
  // let normalStyle = {
  //   textDecoration: "none",
  //   color: "#red",
  //   fontSize: "16px",
  // };
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        px={4}
        position="sticky"
        top="0"
        bgImage={
          "https://images.pexels.com/photos/4871011/pexels-photo-4871011.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        zIndex="1"
      >
        <Flex
          h={16}
          alignItems={"center"}
          justifyContent={{ base: "space-between", lg: "space-around" }}
        >
          <Flex alignItems={"center"}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Heading
                  fontFamily="sans-serif"
                  fontSize={{ sm: "24px", md: "30px" }}
                >
                  Satyam Banwale
                </Heading>
              </MenuButton>
              <MenuList>
                <Center>
                  <Image
                    size={"sm"}
                    width="100px"
                    borderRadius={"50%"}
                    src={
                      "https://avatars.githubusercontent.com/u/101392309?v=4"
                    }
                  />
                </Center>
                <MenuItem>Full Stack Web Developer</MenuItem>

                <MenuDivider />
              </MenuList>
            </Menu>
          </Flex>
          <HStack spacing={8} alignItems={"center"}>
            <HStack
              as={"nav"}
              spacing={6}
              color={"purple.100"}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <NavLink to={link.to} key={link.id}>
                  {link.text}
                </NavLink>
              ))}
              <Box>
               
                  <Link color={"purple.100"} href="/satyamCV.pdf" download>
                    Resume
                  </Link>
             
              </Box>
            </HStack>
          </HStack>
          <IconButton
            size={"sm"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            bgColor='transparent'
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
