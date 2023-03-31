import { Box, Center, Flex, Heading, Image } from "@chakra-ui/react";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const GithubStats = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <Box>
      <div data-aos="fade-down-right">
        <Center>
          <Box>
            <Center>
              <Flex
                fontSize={{ base: "25px", sm: "35px", md: "40", lg: "45px" }}
                m={{ base: "1rem", lg: "5rem" }}
                gap="10px"
              >
                <Heading
                  fontSize={{ base: "25px", sm: "35px", md: "40", lg: "45px" }}
                >
                  Days I
                </Heading>
                <Heading
                  color={"purple.400"}
                  fontSize={{ base: "25px", sm: "35px", md: "40", lg: "45px" }}
                >
                  Code
                </Heading>
              </Flex>
            </Center>
          </Box>
        </Center>
        <Center>
          <Image width={"72%"} src="github.png" alt="github" />
        </Center>
        <Center>
          <Box
            width={"80%"}
            display={{ base: "grid", md: "grid", lg: "flex" }}
            justifyContent="center"
          >
            <Center>
              <Image
                width={"90%"}
                src="https://github-readme-stats.vercel.app/api?username=Satyam1013&theme=outrun&show_icons=true&hide_border=true&count_private=true"
                alt="github"
              />
            </Center>
            <Center>
              <Image
                width={"90%"}
                src="https://github-readme-streak-stats.herokuapp.com/?user=Satyam1013&theme=outrun&hide_border=true"
                alt="github"
              />
            </Center>
          </Box>
        </Center>
        <Center>
          <Image
            width={{ base: "70%", md: "40%", lg: "30%" }}
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=Satyam1013&theme=outrun&show_icons=true&hide_border=true&layout=compact"
            alt="github"
          />
        </Center>
      </div>
    </Box>
  );
};

export default GithubStats;
