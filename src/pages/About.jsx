import { Box, Center, Flex, Heading, Image, Link, Text } from "@chakra-ui/react";
import React from "react";
import { HashScroll } from "react-hash-scroll";

const interest = [
  "- Chess",
  "- Badminton",
  "- Traveling",
  "- Listening Music",
  "- Communicating",
  "- Solving Problems",
];
const About = () => {
  return (
    <Box width={"70%"} m="auto">
      <Center>
        <Flex
          fontSize={{ base: "25px", sm: "35px", md: "40", lg: "45px" }}
          m={{ base: "1rem", lg: "5rem" }}
          gap="10px"
        >
          <Heading
            fontSize={{ base: "25px", sm: "35px", md: "40", lg: "45px" }}
          >
            About
          </Heading>
          <Heading
            color={"purple.400"}
            fontSize={{ base: "25px", sm: "35px", md: "40", lg: "45px" }}
          >
            Me
          </Heading>
        </Flex>
      </Center>
      <HashScroll hash="#about">
        <section></section>
      </HashScroll>

      <Box
        display="flex"
        flexDirection={{ base: "column", md: "column", lg: "row" }}
      >
        <Image
          src="https://avatars.githubusercontent.com/u/101392309?v=4"
          alt="pro-pic"
          width={{ base: "100px", lg: "350px" }}
          height={{ base: "100px", lg: "350px" }}
          borderRadius="20%"
          m={"auto"}
        />
        <Box
          display={"flex"}
          flexDirection="column"
          justifyContent={"center"}
        >
          <Text
            width={"60%"}
            m="auto"
            letterSpacing={"2px"}
            fontSize={{ base: "14px", sm: "16px", md: "20", lg: "25px" }}
            mt={{ base: "10px", lg: "5px" }}
          >
            Hi Everyone, I am <Text color="purple.400">Satyam Banwale</Text>{" "}
            from Balaghat, Madhya Pradesh.
          </Text>
          <Center>
          <Link href='https://drive.google.com/file/d/1_WLMAMAwWY7QJy75ZKwgw-S-LDQ4MyLo/view?usp=sharing'>
               <Center borderRadius={'15px'} width={{base:'110px',sm:'150px'}} mt={{base:'5px',sm:'none'}} bgColor={'purple.500'} color='white'>
               Resume
               </Center>
                </Link>
                </Center>
          <Text
            fontSize={{ base: "12px", sm: "15px", md: "20", lg: "25px" }}
            mt="10px"
          >
            Apart from coding & dsa,
            <br/>
            I have done M.Sc. in Mathematics{" "}
          </Text>
          <Text
            mt="10px"
            fontSize={{ base: "12px", sm: "15px", md: "20", lg: "25px" }}
          >
            Some other activities that I love to do!
          </Text>
          <Box
            mt="10px"
            display={"grid"}
            gridTemplateColumns={{ base: "100%", lg: "33% 33% 33%" }}
          >
            {interest.map((el,i) => (
              <Text key={i+500} color={"purple.400"}>{el}</Text>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
