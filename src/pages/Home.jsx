import { Box, Center, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import About from "./About";
import Contact from "./Contact";
import GithubStats from "./GithubStats";
import "./home.css";
import Project from "./Project";
import Skill from "./Skills";
import Timeline from "./Timeline";

const Home = () => {
  return (
    <Box className="bg" bgColor={"#fcfcfc"}>
      <Center>
        <Flex
          mt={{ base: "0.5rem", sm: "1rem", md: "2rem", lg: "3rem" }}
          gap={{base:'5px',lg:"1rem"}}
        >
          <Heading fontSize={{ base: "1.5rem", md: "3rem", lg: "4rem" }}>
            Hi, I am
          </Heading>
          <Heading
            fontSize={{ base: "1.5rem", md: "3rem", lg: "4rem" }}
            color={"purple.400"}
          >
            Satyam Banwale
          </Heading>
        </Flex>
      </Center>
      <Center m={{ base: "0.5rem", sm: "1.1rem", md: "2rem", lg: "2.5rem" }}>
        <Heading
          fontSize={{ base: "15px", sm: "1.1rem", md: "2rem", lg: "3rem" }}
          className="mern"
          color={"purple.400"}
        >
          A MERN Stack Developer
        </Heading>
      </Center>

      <Box
        m={"auto"}
        fontSize={{ base: "11px", sm: "14px", md: "16px", lg: "21px" }}
        fontWeight="bold"
        width={"71%"}
        letterSpacing="1px"
      >
        A self-motivating, hard-working and ambitious Web Developer with
        Proficiency in React JS, Node JS. Problem solving mindset with the
        ability to perform well in collaboration. 1000+ hour of coding & hands
        on experience on making 3 fully functional websites. Looking forward to
        work as a full stack web developer or software engineer in any exciting
        tech company.
      </Box>
     

      <About />

     <Timeline/>
     
      <Skill />
      

      <Project />
     
      <br />
      <GithubStats/>

      <Contact />

      
    </Box>
  );
};

export default Home;
