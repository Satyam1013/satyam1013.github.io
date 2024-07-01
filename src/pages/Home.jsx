import { Box, Center, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import About from "./About";
import Contact from "./Contact";
import GithubStats from "../components/GithubStats";
import "../styles/home.css";
import Project from "./Project";
import Skill from "./Skills";
import Timeline from "../components/Timeline";
import { motion, spring } from "framer-motion";

const Home = () => {
  return (
    <Box className="bg">
      <Center>
        <motion.div
          animate={{ x: 1 }}
          initial={{ x: "50vw" }}
          transition={{ duration: 3, type: spring, bounce: 0.4 }}
        >
          <Flex
            mt={{ base: "0.5rem", sm: "1rem", md: "2rem", lg: "3rem" }}
            gap={{ base: "5px", lg: "1rem" }}
          >
            <Heading fontSize={{ base: "1.5rem", md: "3rem", lg: "4rem" }}>
              Hi, I am
            </Heading>
            <Heading
              fontSize={{ base: "1.5rem", md: "3rem", lg: "4rem" }}
              color={"#03ddf0"}
              id="name"
            >
              Satyam Banwale
            </Heading>
          </Flex>
        </motion.div>
      </Center>
      <Center m={{ base: "0.5rem", sm: "1.1rem", md: "2rem", lg: "2.5rem" }}>
        <motion.div
          animate={{ x: 1 }}
          initial={{ x: "-50vw" }}
          transition={{ duration: 3, type: spring, bounce: 0.4 }}
        >
          <Heading
            fontSize={{ base: "13px", sm: "1.1rem", md: "1.5rem", lg: "2rem" }}
            id="role"
            m={{ base: "10px" }}
            color={"#03ddf0"}
          >
            A MERN Stack Developer
          </Heading>
        </motion.div>
      </Center>

      <Box
        m={"auto"}
        fontSize={{ base: "11px", sm: "14px", md: "16px", lg: "21px" }}
        fontWeight="bold"
        width={"71%"}
        letterSpacing="1px"
      >
        <motion.div
          animate={{ x: 1 }}
          initial={{ x: "50vw" }}
          transition={{ duration: 3, type: spring, bounce: 0.4 }}
        >
          A self-motivating, hard-working, and ambitious Web Developer with
          Proficiency in MERN Stack. Problem-solving mindset with the
          ability to perform well in collaboration. 2000+ hour of coding & hands
          on experience on making 50+ mini projects & 7+ fully functional
          websites. 200+ problems solved in DSA. Looking forward to working as a full-stack web developer or software engineer in any exciting tech company.
        </motion.div>
      </Box>

      <motion.div
        animate={{ x: 1 }}
        initial={{ x: "-50vw" }}
        transition={{ duration: 3, type: spring, bounce: 0.4 }}
      >
        <About />
      </motion.div>

      <Timeline />

      <Skill />

      <Project />
      <br />

      <GithubStats />

      <Contact />
      <Box height={"80px"}>
        <Heading
          fontFamily={"sans-serif"}
          fontSize={{ base: "20px", md: "30px" }}
          color={"#03ddf0"}
        >
          Made with 💗 by Satyam Banwale
        </Heading>
      </Box>
    </Box>
  );
};

export default Home;
