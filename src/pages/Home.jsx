import { Box, Center, Flex, Heading } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import About from "./About";
import Contact from "./Contact";
import GithubStats from "../components/GithubStats";
import "../styles/home.css";
import Project from "./Project";
import Skill from "./Skills";
import Timeline from "../components/Timeline";
import { useInView } from "react-intersection-observer";
import { motion, spring } from "framer-motion";

const Home = () => {
  const { ref, inView } = useInView();
  // const animation = useAnimation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      setVisible(true);
    } else {
      setVisible(false);
    }
    // console.log(inView);
  }, [inView]);


  return (
    <Box className="bg">
     
      <Center ref={ref}>
        <motion.div
          animate={{ x: visible ? 0 : 1 }}
          initial={{ x: visible ? 0 : "100vw" }}
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
              color={"purple.400"}
              id="name"
            >
              Satyam Banwale
            </Heading>
          </Flex>
        </motion.div>
      </Center>
      <Center
        ref={ref}
        m={{ base: "0.5rem", sm: "1.1rem", md: "2rem", lg: "2.5rem" }}
      >
        <motion.div
          animate={{ x: visible ? 0 : 1 }}
          initial={{ x: visible ? 0 : "-100vw" }}
          transition={{ duration: 3, type: spring, bounce: 0.4 }}
        >
          <Heading
            fontSize={{ base: "13px", sm: "1.1rem", md: "2rem", lg: "3rem" }}
            id="role"
            m={{base:'10px'}}
            color={"purple.400"}
          >
            A MERN Stack Developer
          </Heading>
        </motion.div>
      </Center>

      <Box
        ref={ref}
        m={"auto"}
        fontSize={{ base: "11px", sm: "14px", md: "16px", lg: "21px" }}
        fontWeight="bold"
        width={"71%"}
        letterSpacing="1px"
      >
        <motion.div
          animate={{ x: visible ? 0 : 1 }}
          initial={{ x: visible ? 0 : "100vw" }}
          transition={{ duration: 3, type: spring, bounce: 0.4 }}
        >
          A self-motivating, hard-working and ambitious Web Developer with
          Proficiency in React JS, Node JS. Problem solving mindset with the
          ability to perform well in collaboration. 1000+ hour of coding & hands
          on experience on making 3 fully functional websites. Looking forward
          to work as a full stack web developer or software engineer in any
          exciting tech company.
        </motion.div>
      </Box>

      <motion.div
        animate={{ x: visible ? 0 : 1 }}
        initial={{ x: visible ? 0 : "-100vw" }}
        transition={{ duration: 3, type: spring, bounce: 0.4 }}
      >
        <About />
      </motion.div>

      <motion.div
        animate={{ x: visible ? 0 : 1 }}
        initial={{ x: visible ? 0 : "100vw" }}
        transition={{ duration: 3, type: spring, bounce: 0.4 }}
      >
        <Timeline />
      </motion.div>

      <motion.div
        animate={{ x: visible ? 0 : 1 }}
        initial={{ x: visible ? 0 : "-100vw" }}
        transition={{ duration: 3, type: spring, bounce: 0.4 }}
      >
        <Skill />
      </motion.div>

      <motion.div
        animate={{ x: visible ? 0 : 1 }}
        initial={{ x: visible ? 0 : "100vw" }}
        transition={{ duration: 3, type: spring, bounce: 0.4 }}
      >
        <Project />
      </motion.div>
      <br />
      <motion.div
        animate={{ x: visible ? 0 : 1 }}
        initial={{ x: visible ? 0 : "-100vw" }}
        transition={{ duration: 3, type: spring, bounce: 0.4 }}
      >
        <GithubStats />
      </motion.div>

      <motion.div
        animate={{ x: visible ? 0 : 1 }}
        initial={{ x: visible ? 0 : "-100vw" }}
        transition={{ duration: 3, type: spring, bounce: 0.4 }}
      >
        <Contact />
      </motion.div>
    </Box>
  );
};

export default Home;
