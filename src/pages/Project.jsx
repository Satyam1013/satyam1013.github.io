import React, { useEffect } from "react";
import "../styles/project.css";
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Container,
  Flex,
  Heading,
  Text,
  Image,
  Button,
  Link,
  Center,
} from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
// And react-slick as our Carousel Lib
import Slider from "react-slick";
import { HashScroll } from "react-hash-scroll";
import AOS from "aos";
import "aos/dist/aos.css";

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function CaptionCarousel() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const [slider, setSlider] = React.useState(null);

  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "40px" });

  const dotAndKey = [
    {
      image: "https://imagetolink.com/ib/588rJqvrgA.png",
    },
    {
      image: "https://imagetolink.com/ib/aX15sRaGmI.png",
    },
    {
      image: "https://imagetolink.com/ib/UrQdf5KXMF.png",
    },
  ];

  const styleCraze = [
    {
      image: "https://imagetolink.com/ib/oksS1vtLQN.png",
    },
    {
      image: "https://imagetolink.com/ib/hbNb8KJdKs.png",
    },
    {
      image: "https://imagetolink.com/ib/fTuzR4dspr.png",
    },
  ];
  const sephora = [
    {
      image: "https://imagetolink.com/ib/JMSn8OrMyu.png",
    },
    {
      image: "https://imagetolink.com/ib/1IgEVD6pG8.png",
    },
    {
      image: "https://imagetolink.com/ib/2W77IJCKMv.png",
    },
  ];
  const nikka = [
    {
      image: "https://imagetolink.com/ib/bqSCECYQ5L.png",
    },
    {
      image: "https://imagetolink.com/ib/yqPZwLqmyl.png",
    },
    {
      image: "https://imagetolink.com/ib/rGJHdFMvq3.png",
    },
  ];

  const techStackStyle = [
    { text: "HTML", img: "images/html-1.svg" },
    { text: "CSS", img: "images/css-3.svg" },
    {
      text: "JavaScript",
      img: "images/javascript-1.svg",
    },
    {
      text: "React",
      img: "images/react-2.svg",
    },
  ];

  const techStackDot = [
    { text: "HTML", img: "images/html-1.svg" },
    { text: "CSS", img: "images/css-3.svg" },
    {
      text: "JavaScript",
      img: "images/javascript-1.svg",
    },
  ];

  const techStackSephora = [
    { text: "HTML", img: "images/html-1.svg" },
    { text: "CSS", img: "images/css-3.svg" },
    {
      text: "JavaScript",
      img: "images/javascript-1.svg",
    },
    { text: "React", img: "images/react-2.svg" },
    {
      text: "Chakra UI",
      img: "images/Chakra-UI.png",
    },
  ];
  const techStackNikka = [
    { text: "HTML", img: "images/html-1.svg" },
    { text: "CSS", img: "images/css-3.svg" },
    {
      text: "JavaScript",
      img: "images/javascript-1.svg",
    },
    {
      text: "Next JS",
      img: "images/Next JS.png",
    },
    {
      text: "JSON-Server",
      img: "https://joinup.ec.europa.eu/sites/default/files/inline-images/json-logo.png",
    },
    {
      text: "Chakra UI",
      img: "images/Chakra-UI.png",
    },
  ];
  return (
    <>
      <div data-aos="fade-up">
        <Box width={"80%"} m="auto">
          <Center>
            <Heading
              fontSize={{ base: "25px", sm: "35px", md: "40", lg: "45px" }}
              color={"#03ddf0"}
              m={{ base: "1rem", lg: "2rem" }}
            >
              Projects
            </Heading>
          </Center>
        </Box>
      </div>
      <div data-aos="flip-up">
        <Box
          className="projectBox"
          display={{ base: "grid", md: "flex", lg: "flex" }}
          width={{ base: "80%", lg: "70%" }}
          m="auto"
          mt="50px"
          boxShadow="rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px"
          p="1.5rem"
          borderRadius={"25px"}
        >
          <Box
            m="auto"
            position={"relative"}
            height={{ base: "100%", lg: "325px" }}
            width={{ base: "100%", md: "55%", lg: "55%" }}
            overflow={"hidden"}
          >
            {/* CSS files for react-slick */}
            <link
              rel="stylesheet"
              type="text/css"
              charSet="UTF-8"
              href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
            />
            <link
              rel="stylesheet"
              type="text/css"
              href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
            />
            {/* Left Icon */}
            <IconButton
              aria-label="left-arrow"
              variant="ghost"
              position="absolute"
              left={side}
              top={top}
              transform={"translate(0%, -50%)"}
              zIndex={2}
              onClick={() => slider?.slickPrev()}
            >
              <BiLeftArrowAlt size="30px" />
            </IconButton>
            {/* Right Icon */}
            <IconButton
              aria-label="right-arrow"
              variant="ghost"
              position="absolute"
              right={side}
              top={top}
              transform={"translate(0%, -50%)"}
              zIndex={2}
              onClick={() => slider?.slickNext()}
            >
              <BiRightArrowAlt size="30px" />
            </IconButton>
            {/* Slider */}
            <Slider {...settings} ref={(slider) => setSlider(slider)}>
              {nikka.map((card, index) => (
                <Box
                  key={index}
                  height={{ base: "200px", lg: "300px" }}
                  position="relative"
                  backgroundPosition="center"
                  backgroundRepeat="no-repeat"
                  backgroundSize="cover"
                  backgroundImage={`url(${card.image})`}
                  border={{
                    base: "solid 3px #03ddf0",
                    md: "solid 5px #03ddf0",
                    lg: "solid 10px #03ddf0",
                  }}
                  borderRadius={{ base: "10px", lg: "20px" }}
                >
                  {/* This is the block you need to change, to customize the caption */}
                  <Container
                    size="container.lg"
                    height="600px"
                    position="relative"
                  >
                    <Stack
                      spacing={6}
                      w={"full"}
                      maxW={"lg"}
                      position="absolute"
                      top="50%"
                      transform="translate(0, -50%)"
                    ></Stack>
                  </Container>
                </Box>
              ))}
            </Slider>
          </Box>

          <HashScroll hash="#project">
            <section></section>
          </HashScroll>

          <Box width={{ base: "70%", lg: "45%" }} m="auto">
            <Heading color={"#03ddf0"}>Nikka Official</Heading>
            <Text
              width={{ base: "100%", lg: "80%" }}
              m="auto"
              mt="10px"
              fontSize={{ base: "12px", lg: "15px" }}
            >
              Nikka is an Indian e-commerce company. It sells beauty, wellness &
              fashion products. I made this project in 1 week. I have used Next
              JS. It's an individual Project.
            </Text>
            <Flex
              m="auto"
              mt="15px"
              width="60%"
              justifyContent={"space-around"}
            >
              {techStackNikka.map((el, i) => (
                <Image
                  key={i + 700}
                  width="40px"
                  height={"40px"}
                  src={el.img}
                  alt="pro-pic"
                />
              ))}
            </Flex>
            <Flex
              m="auto"
              width={{ base: "100%", lg: "60%" }}
              mt="25px"
              justifyContent={{
                base: "space-between",
                md: "center",
                lg: "center",
              }}
            >
              <Link
                width={"30%"}
                href={"https://github.com/Satyam1013/famous-cough-3400"}
                _hover={{ bgColor: "transparent" }}
              >
                <Button bgColor={"#03ddf0"} color="white">
                  GitHub
                </Button>
              </Link>
              <Link
                width={"30%"}
                href="https://nikka-official.netlify.app/"
                _hover={{ bgColor: "transparent" }}
              >
                <Button bgColor={"#03ddf0"} color="white">
                  {" "}
                  Live{" "}
                </Button>
              </Link>
            </Flex>
          </Box>
        </Box>
      </div>
      <div data-aos="flip-down">
        <Box
          className="projectBox"
          display={{ base: "grid", md: "flex", lg: "flex" }}
          width={{ base: "80%", lg: "70%" }}
          m="auto"
          mt="50px"
          boxShadow="rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px"
          p="1.5rem"
          borderRadius={"25px"}
        >
          <Box
            m="auto"
            position={"relative"}
            height={{ base: "100%", lg: "325px" }}
            width={{ base: "100%", md: "55%", lg: "55%" }}
            overflow={"hidden"}
          >
            {/* CSS files for react-slick */}
            <link
              rel="stylesheet"
              type="text/css"
              charSet="UTF-8"
              href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
            />
            <link
              rel="stylesheet"
              type="text/css"
              href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
            />
            {/* Left Icon */}
            <IconButton
              aria-label="left-arrow"
              variant="ghost"
              position="absolute"
              left={side}
              top={top}
              transform={"translate(0%, -50%)"}
              zIndex={2}
              onClick={() => slider?.slickPrev()}
            >
              <BiLeftArrowAlt size="30px" />
            </IconButton>
            {/* Right Icon */}
            <IconButton
              aria-label="right-arrow"
              variant="ghost"
              position="absolute"
              right={side}
              top={top}
              transform={"translate(0%, -50%)"}
              zIndex={2}
              onClick={() => slider?.slickNext()}
            >
              <BiRightArrowAlt size="30px" />
            </IconButton>
            {/* Slider */}
            <Slider {...settings} ref={(slider) => setSlider(slider)}>
              {sephora.map((card, index) => (
                <Box
                  key={index}
                  height={{ base: "200px", lg: "300px" }}
                  position="relative"
                  backgroundPosition="center"
                  backgroundRepeat="no-repeat"
                  backgroundSize="cover"
                  backgroundImage={`url(${card.image})`}
                  border={{
                    base: "solid 3px #03ddf0",
                    md: "solid 5px #03ddf0",
                    lg: "solid 10px #03ddf0",
                  }}
                  borderRadius={{ base: "10px", lg: "20px" }}
                >
                  {/* This is the block you need to change, to customize the caption */}
                  <Container
                    size="container.lg"
                    height="600px"
                    position="relative"
                  >
                    <Stack
                      spacing={6}
                      w={"full"}
                      maxW={"lg"}
                      position="absolute"
                      top="50%"
                      transform="translate(0, -50%)"
                    ></Stack>
                  </Container>
                </Box>
              ))}
            </Slider>
          </Box>

          <HashScroll hash="#project">
            <section></section>
          </HashScroll>

          <Box width={{ base: "70%", lg: "45%" }} m="auto">
            <Heading color={"#03ddf0"}>Sephora</Heading>
            <Text
              width={{ base: "100%", lg: "80%" }}
              m="auto"
              mt="10px"
              fontSize={{ base: "12px", lg: "15px" }}
            >
              Sephora is a French multinational retailer of personal care and
              beauty products. I made this clone in under 4 days of work. I used
              React JS & Chakra UI to build this website clone.
            </Text>
            <Flex
              m="auto"
              mt="15px"
              width="60%"
              justifyContent={"space-around"}
            >
              {techStackSephora.map((el, i) => (
                <Image
                  key={i + 700}
                  width="40px"
                  height={"40px"}
                  src={el.img}
                  alt="pro-pic"
                />
              ))}
            </Flex>
            <Flex
              m="auto"
              width={{ base: "100%", lg: "60%" }}
              mt="25px"
              justifyContent={{
                base: "space-between",
                md: "center",
                lg: "center",
              }}
            >
              <Link
                width={"30%"}
                href={"https://github.com/Satyam1013/snotty-star-7899"}
                _hover={{ bgColor: "transparent" }}
              >
                <Button bgColor={"#03ddf0"} color="white">
                  GitHub
                </Button>
              </Link>
              <Link
                width={"30%"}
                href="https://superb-squirrel-f5fdc3.netlify.app/"
                _hover={{ bgColor: "transparent" }}
              >
                <Button bgColor={"#03ddf0"} color="white">
                  {" "}
                  Live{" "}
                </Button>
              </Link>
            </Flex>
          </Box>
        </Box>
      </div>
      <div data-aos="flip-left">
        <Box
          className="projectBox"
          display={{ base: "grid", md: "flex", lg: "flex" }}
          width={{ base: "80%", lg: "70%" }}
          m="auto"
          mt="50px"
          boxShadow="rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px"
          p="1.5rem"
          borderRadius={"25px"}
        >
          <Box
            m="auto"
            position={"relative"}
            height={{ base: "100%", lg: "325px" }}
            width={{ base: "100%", md: "55%", lg: "55%" }}
            overflow={"hidden"}
          >
            {/* CSS files for react-slick */}
            <link
              rel="stylesheet"
              type="text/css"
              charSet="UTF-8"
              href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
            />
            <link
              rel="stylesheet"
              type="text/css"
              href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
            />
            {/* Left Icon */}
            <IconButton
              aria-label="left-arrow"
              variant="ghost"
              position="absolute"
              left={side}
              top={top}
              transform={"translate(0%, -50%)"}
              zIndex={2}
              onClick={() => slider?.slickPrev()}
            >
              <BiLeftArrowAlt size="30px" />
            </IconButton>
            {/* Right Icon */}
            <IconButton
              aria-label="right-arrow"
              variant="ghost"
              position="absolute"
              right={side}
              top={top}
              transform={"translate(0%, -50%)"}
              zIndex={2}
              onClick={() => slider?.slickNext()}
            >
              <BiRightArrowAlt size="30px" />
            </IconButton>
            {/* Slider */}
            <Slider {...settings} ref={(slider) => setSlider(slider)}>
              {dotAndKey.map((card, index) => (
                <Box
                  key={index + 100}
                  height={{ base: "200px", lg: "300px" }}
                  position="relative"
                  backgroundPosition="center"
                  backgroundRepeat="no-repeat"
                  backgroundSize="cover"
                  backgroundImage={`url(${card.image})`}
                  border={{
                    base: "solid 3px #03ddf0",
                    md: "solid 5px #03ddf0",
                    lg: "solid 10px #03ddf0",
                  }}
                  borderRadius={{ base: "10px", lg: "20px" }}
                >
                  {/* This is the block you need to change, to customize the caption */}
                  <Container
                    size="container.lg"
                    height="600px"
                    position="relative"
                  >
                    <Stack
                      spacing={6}
                      w={"full"}
                      maxW={"lg"}
                      position="absolute"
                      top="50%"
                      transform="translate(0, -50%)"
                    ></Stack>
                  </Container>
                </Box>
              ))}
            </Slider>
          </Box>
          <Box width={{ base: "70%", lg: "45%" }} m="auto">
            <Heading color={"#03ddf0"}>Dot & Key</Heading>
            <Text
              width={{ base: "100%", lg: "80%" }}
              m="auto"
              mt="10px"
              fontSize={{ base: "12px", lg: "15px" }}
            >
              Dot & Key is an internet-first brand of natural skincare products.
              Developed along with a team of 3 members. We use JavaScript, HTML
              & CSS to make this website clone in 4 days.
            </Text>
            <Flex
              m="auto"
              mt="15px"
              width="60%"
              justifyContent={"space-around"}
            >
              {techStackDot.map((el, i) => (
                <Image
                  key={i + 1100}
                  width="40px"
                  height={"40px"}
                  src={el.img}
                  alt="pro-pic"
                />
              ))}
            </Flex>
            <Flex
              m="auto"
              width={{ base: "100%", lg: "60%" }}
              mt="25px"
              justifyContent={{
                base: "space-between",
                md: "center",
                lg: "center",
              }}
            >
              <Link
                width={"30%"}
                href={"https://github.com/OnkarK0273/Dot-Key-Website-Clone"}
                _hover={{ bgColor: "transparent" }}
              >
                <Button bgColor={"#03ddf0"} color="white">
                  GitHub
                </Button>
              </Link>
              <Link
                width={"30%"}
                href="https://roasted-brake-1134-dot-kay-lifecare.netlify.app/"
                _hover={{ bgColor: "transparent" }}
              >
                <Button bgColor={"#03ddf0"} color="white">
                  {" "}
                  Live{" "}
                </Button>
              </Link>
            </Flex>
          </Box>
        </Box>
      </div>
      <br />
      <br />
      <div data-aos="flip-right">
        <Box
          className="projectBox"
          display={{ base: "grid", md: "flex", lg: "flex" }}
          width={{ base: "80%", lg: "70%" }}
          m="auto"
          boxShadow="rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px"
          p="1.5rem"
          borderRadius={"25px"}
        >
          <Box
            m="auto"
            position={"relative"}
            height={{ base: "100%", lg: "325px" }}
            width={{ base: "100%", md: "55%", lg: "55%" }}
            overflow={"hidden"}
          >
            {/* CSS files for react-slick */}
            <link
              rel="stylesheet"
              type="text/css"
              charSet="UTF-8"
              href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
            />
            <link
              rel="stylesheet"
              type="text/css"
              href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
            />
            {/* Left Icon */}
            <IconButton
              aria-label="left-arrow"
              variant="ghost"
              position="absolute"
              left={side}
              top={top}
              transform={"translate(0%, -50%)"}
              zIndex={2}
              onClick={() => slider?.slickPrev()}
            >
              <BiLeftArrowAlt size="30px" />
            </IconButton>
            {/* Right Icon */}
            <IconButton
              aria-label="right-arrow"
              variant="ghost"
              position="absolute"
              right={side}
              top={top}
              transform={"translate(0%, -50%)"}
              zIndex={2}
              onClick={() => slider?.slickNext()}
            >
              <BiRightArrowAlt size="30px" />
            </IconButton>
            {/* Slider */}
            <Slider {...settings} ref={(slider) => setSlider(slider)}>
              {styleCraze.map((card, index) => (
                <Box
                  key={index + 300}
                  height={{ base: "200px", lg: "300px" }}
                  position="relative"
                  backgroundPosition="center"
                  backgroundRepeat="no-repeat"
                  backgroundSize="cover"
                  backgroundImage={`url(${card.image})`}
                  border={{
                    base: "solid 3px #03ddf0",
                    md: "solid 5px #03ddf0",
                    lg: "solid 10px #03ddf0",
                  }}
                  borderRadius={{ base: "10px", lg: "20px" }}
                >
                  {/* This is the block you need to change, to customize the caption */}
                  <Container
                    size="container.lg"
                    height="600px"
                    position="relative"
                  >
                    <Stack
                      spacing={6}
                      w={"full"}
                      maxW={"lg"}
                      position="absolute"
                      top="50%"
                      transform="translate(0, -50%)"
                    ></Stack>
                  </Container>
                </Box>
              ))}
            </Slider>
          </Box>
          <Box width={{ base: "70%", lg: "45%" }} m="auto">
            <Heading color={"#03ddf0"}>Style Craze</Heading>
            <Text
              width={{ base: "100%", lg: "80%" }}
              m="auto"
              mt="10px"
              fontSize={{ base: "12px", lg: "15px" }}
            >
              StyleCraze is an online site that provides information on beauty
              and wellness for Indian women. Developed with a team member
              Mayank. We both clone this website in 5 days. We use HTML, CSS,
              JavaScript & Bootstrap to make this website.
            </Text>
            <Flex
              m="auto"
              mt="15px"
              width="60%"
              justifyContent={"space-around"}
            >
              {techStackStyle.map((el, i) => (
                <Image
                  key={i + 900}
                  width="40px"
                  height={"40px"}
                  src={el.img}
                  alt="pro-pic"
                />
              ))}
            </Flex>
            <Flex
              m="auto"
              width={{ base: "100%", lg: "60%" }}
              mt="25px"
              justifyContent={{
                base: "space-between",
                md: "center",
                lg: "center",
              }}
            >
              <Link
                width={"30%"}
                href={"https://github.com/mynk2906/shrill-yam-9521"}
                _hover={{ bgColor: "transparent" }}
              >
                <Button bgColor={"#03ddf0"} color="white">
                  GitHub
                </Button>
              </Link>
              <Link
                width={"30%"}
                href="https://incredible-chimera-b4c293.netlify.app/"
                _hover={{ bgColor: "transparent" }}
              >
                <Button bgColor={"#03ddf0"} color="white">
                  {" "}
                  Live{" "}
                </Button>
              </Link>
            </Flex>
          </Box>
        </Box>
      </div>
    </>
  );
}
