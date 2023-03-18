import { Box, Center, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import "../styles/timeline.css";

const Timeline = () => {
  return (
    <Box className="wrapper">
      <Center>
        <Flex
          fontSize={{ base: "25px", sm: "35px", md: "40", lg: "45px" }}
          m={{ base: "1rem", lg: "2rem" }}
          gap="10px"
        >
          <Heading
            color={"purple.400"}
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
            <img
              src="data:image/png;base64,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"
              alt="i"
            />
          </i>
          <Box className="details">
            <span className="title">Student</span>
            <Text
              fontSize={{ base: "15px", lg: "25px" }}
              p="7px"
              color="purple.400"
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
        </section>
      </Box>
      <Box className="row row-2">
        <section>
          <i className="icon fas fa-star">
            <img
              src="data:image/png;base64,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"
              alt="i"
            />
          </i>
          <Box className="details">
            <span className="title">Student</span>
            <Text fontSize={{ base: "15px", lg: "25px" }} color="purple.400">
              MMYVV, Katni
            </Text>
            <span>December 2021</span>
          </Box>
          <Text>Master of Science (M.Sc.) - Mathematics</Text>
          <Box className="bottom">
            <i>- Programming</i>
           
            <i>- Differential Equations</i>
          </Box>
        </section>
      </Box>
    </Box>
  );
};

export default Timeline;
