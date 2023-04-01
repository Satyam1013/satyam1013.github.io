import { Box, Center, Flex, Heading, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import "../styles/timeline.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Timeline = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <Box className="wrapper">
      <Center>
        <Flex
          fontSize={{ base: "25px", sm: "35px", md: "40", lg: "45px" }}
          m={{ base: "1rem", lg: "2rem" }}
          gap="10px"
        >
          <Heading
            color={"#03ddf0"}
            fontSize={{ base: "25px", sm: "35px", md: "40", lg: "45px" }}
          >
            My
          </Heading>
          <Heading
            fontSize={{ base: "25px", sm: "35px", md: "40", lg: "45px" }}
          >
            Timeline 💫
          </Heading>
        </Flex>
      </Center>

      <Box className="center-line"></Box>
      <Box className="row row-1">
        <section>
          <i className="icon fas fa-home">
            <img src="images/certificate-hat.png" alt="i" />
          </i>
          <div data-aos="fade-right">
            <Box className="details">
              <span className="title">Student</span>
              <Text
                fontSize={{ base: "15px", lg: "25px" }}
                p="7px"
                color="#03ddf0"
              >
                Masai School
              </Text>
              <span>March 2022</span>
            </Box>

            <Text>Full Stack Web Development (Full Time) </Text>
            <Box className="bottom">
              <i>- MERN Stack</i>
              <i>- Data Structures & Algorithms</i>
              <i>- Soft Skills</i>
            </Box>
          </div>
        </section>
      </Box>
      <Box className="row row-2">
        <section>
          <i className="icon fas fa-star">
            <img src="images/graduation.png" alt="i" />
          </i>
          <div data-aos="fade-left">
            <Box className="details">
              <span className="title">Student</span>
              <Text fontSize={{ base: "15px", lg: "25px" }} color="#03ddf0">
                MMYVV, Katni
              </Text>
              <span>December 2021</span>
            </Box>
            <Text>Master of Science (M.Sc.) - Mathematics</Text>
            <Box className="bottom">
              <i>- Programming</i>

              <i>- Differential Equations</i>
            </Box>
          </div>
        </section>
      </Box>
    </Box>
  );
};

export default Timeline;
