import { Box, Center, Heading, Image, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { HashScroll } from "react-hash-scroll";
import "../styles/skills.css";
import AOS from "aos";
import "aos/dist/aos.css";
const skills = [
  { text: "HTML", img: "images/html-1.svg" },
  { text: "CSS", img: "images/css-3.svg" },
  {
    text: "JavaScript",
    img: "images/javascript-1.svg",
  },
  { text: "React", img: "images/react-2.svg" },
  {
    text: "TypeScript",
    img: "images/typescript.svg",
  },
  {
    text: "Node JS",
    img: "images/nodejs-1.svg",
  },
  {
    text: "Mongo DB",
    img: "images/mongodb-icon-1.svg",
  },
  { text: "Redux", img: "images/redux.svg" },
  { text: "Next.js", img: "images/Next JS.png" },
  {
    text: "Express.js",
    img: "images/Express.png",
  },
  {
    text: "Chakra UI",
    img: "images/Chakra-UI.png",
  },
  {
    text: "GitHub",
    img: "images/GitHub.png",
  },
];
const Skill = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <Box w="80%" m="auto">
      <div data-aos="zoom-in">
        <Center>
          <Heading
            fontSize={{ base: "25px", sm: "35px", md: "40px", lg: "45px" }}
            color={"#03ddf0"}
            m={{ base: "2rem", lg: "4rem" }}
          >
            Skills
          </Heading>
        </Center>
        <article>
          <HashScroll hash="#skill">
            <section></section>
          </HashScroll>
        </article>
        <Box
          display={{ base: "grid", sm: "grid", md: "grid", lg: "grid" }}
          gridTemplateColumns={{
            base: "50% 50%",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
            lg: "repeat(4, 1fr)",
          }}
          justifyContent="space-around"
        >
          {skills.map((el, i) => (
            <Center key={i + 1300}>
              <Box
                width={{ base: "100px", sm: "140px", md: "170px", lg: "180px" }}
                height={{
                  base: "100px",
                  sm: "140px",
                  md: "170px",
                  lg: "180px",
                }}
                className="zoom"
              >
                <Center>
                  <Image
                    width={{ base: "40px", sm: "60px", md: "70px", lg: "80px" }}
                    height={{
                      base: "40px",
                      sm: "60px",
                      md: "70px",
                      lg: "80px",
                    }}
                    src={el.img}
                    alt="pic"
                  />
                </Center>
                <Text
                  mt={{ base: "15px", md: "35px", lg: "2rem" }}
                  fontSize={{ base: "12px", sm: "15px", md: "18", lg: "25px" }}
                  fontWeight={"bold"}
                >
                  {el.text}
                </Text>
              </Box>
            </Center>
          ))}
        </Box>
      </div>
    </Box>
  );
};

export default Skill;
