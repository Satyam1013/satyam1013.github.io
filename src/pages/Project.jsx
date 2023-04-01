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
    { text: "HTML", img: "https://cdn.worldvectorlogo.com/logos/html-1.svg" },
    { text: "CSS", img: "https://cdn.worldvectorlogo.com/logos/css-3.svg" },
    {
      text: "JavaScript",
      img: "https://cdn.worldvectorlogo.com/logos/javascript-1.svg",
    },
    {
      text: "React",
      img: "https://tse2.mm.bing.net/th?id=OIP.2lPcNBjKmc6P7DhGJ02cuAHaHa&pid=Api&P=0",
    },
  ];

  const techStackDot = [
    { text: "HTML", img: "https://cdn.worldvectorlogo.com/logos/html-1.svg" },
    { text: "CSS", img: "https://cdn.worldvectorlogo.com/logos/css-3.svg" },
    {
      text: "JavaScript",
      img: "https://cdn.worldvectorlogo.com/logos/javascript-1.svg",
    },
  ];

  const techStackSephora = [
    { text: "HTML", img: "https://cdn.worldvectorlogo.com/logos/html-1.svg" },
    { text: "CSS", img: "https://cdn.worldvectorlogo.com/logos/css-3.svg" },
    {
      text: "JavaScript",
      img: "https://cdn.worldvectorlogo.com/logos/javascript-1.svg",
    },
    { text: "React", img: "https://cdn.worldvectorlogo.com/logos/react-2.svg" },
    {
      text: "Chakra UI",
      img: "data:image/jpeg;base64,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",
    },
  ];
  const techStackNikka = [
    { text: "HTML", img: "https://cdn.worldvectorlogo.com/logos/html-1.svg" },
    { text: "CSS", img: "https://cdn.worldvectorlogo.com/logos/css-3.svg" },
    {
      text: "JavaScript",
      img: "https://cdn.worldvectorlogo.com/logos/javascript-1.svg",
    },
    {
      text: "Next JS",
      img: "https://th.bing.com/th/id/OIP.Oqlgvyv_ggFbeR2-nhQsTAD6D6?w=168&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    },
    {
      text: "JSON-Server",
      img: "https://joinup.ec.europa.eu/sites/default/files/inline-images/json-logo.png",
    },
    {
      text: "Chakra UI",
      img: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBEREhEPDxEREBEREg8SGBIRDxEQERgSGBgZGhgVGBgcIS4lHB4rHxgYJjgmKy8xNTU1GiQ7QDs0QC40NTEBDAwMEA8QHxISHjQjJCE0NDQ0NDQ0NDQ0NDQ0NDQ0NDE0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0ND80NP/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAQIEBQYDB//EADwQAAIBAgIGBwYFAwQDAAAAAAABAgMRBAUSITFBUWEGEyJScZHRMoGSobHBFUJicuEUI/Azk7LCQ4Ki/8QAGgEBAAMBAQEAAAAAAAAAAAAAAAMEBQECBv/EADERAAIBAgQDBgUEAwAAAAAAAAABAgMRBBIhMRNBUQUiYZGhsTJSgdHhFBVx8CNCwf/aAAwDAQACEQMRAD8A+zAAAAAAAAAAo3bW9XM1OMzuELxp/wByXHZBe/edSb2PE6kYK8nY27djAxGbUYatPSfCOv57DnMVjqlT25u3dWqPkYxKqXUpzxnyo3dbP5P2KaXObu/JGFUzavL/AMmj+1KJggkUIrkV5V6kt2e08TUe2c34ykecpN7W34sqD0kR5m9yyk1sdi8cRNbKk14SkeQFjl7czMp5pXjsqSf7rS+pm0c/mvbhGXOLcX9zTA8uEXyJFXqR2kdVhs4oz1NuD/UrLz2GwjJPWmmuWs4U9sPip03eE3Hlti/FbDxKl0LMMY/90duDR4PPYuyrLRfejdx963G4hNSV4tNPY1rRC01uXIVIzV4s9AQiTh7AAAAAAAAAAAAABDYAZi4zHQpRvN63sivaZj5pmcaK0Y2lUa1R3Lmzlq1WUpOUm3J72SQhfVlWviVDux1fsZWOzGdZ2b0Y7orZ7+JiFQWEktjNlKUndskEAHkkEAAkEAAkEAAkEAAkEAAsZGDx06TvB6t8Xri/du8TFAaudUmndHYYDMoVlq7M1ti9viuKM5M4OM3FqUW01rTWpnSZTmyqWhUaU9z2KX8ledO2qNGhiVPuy39zcghMkjLgAAAAAAAABFzWZvmSoxtGzqSWpcFxZkZhi40YOctb2KPFnHV6spylKTvKTu/QkhC+pUxNfIssd36ETk5Nyk223dt7WypALBllri5UAFrkEAAkEAAtcggAEggAEk3MzLMvlXlwgval9lzMnPurg4UacUnBXbW3XsT48Tzm1sSqk8jm9F7mquQQD0REggAEk3KgA6fJs06y1Oo/7iWp95epubnAQk01JNppppramddlWPVaGvVOOqS+65EFSFtUaeFxGfuS39zZAAiLgAAAKN2u3qS38i5pOkOM0IdVF2lU28oLb57PM6ld2PFSahFyfI02a451ptr2I6orlx95ggFtKysYcpuTbfMAAHkAAAAAAAAAAAAGdlmXyry3xgn2n9lzGWZdKvLfGC9qX2XM66hRjCKhBaMVsRHOdtFuXMNhnPvS29zwqyhhqTaSUYLUuL3LxbONq1JSlKUneUm23zNr0ixmnNUovsw1vnL+F9WacU42V+pzF1c0sq2j7gAEhUAAAAAABkYLFSpTjOO7auMd6McC19Dqk07o72jUjKKnF3jJJpnqc50bxm2hJ/qj/wBo/fzOiKslZ2NylUVSCkSADySFW7azh8xxPW1Jz3N2j+1al/nM6fO8R1dGdts+yvft+Vzjrk1JczMx9TVQ+pIIJJjPAK3JAuSCCLgXLArcsBcAi4AuSZ2V5fKvLuwj7UvsuYyvLpV5b4wT7UvsuZ2FGlGEVGCSilZJEc520Rcw2Gz96W3uRRoxhFRgtGKVrI8MzxfU05T37Ir9T2evuMxnIZ/jesqaEX2YXiucvzP7e4ihHMy/iKqpU7rfZGsbbbbd2223zAILJiXJBAAJBW5IFyQCtwLlgQALnph6zpzjOO2Lv/B3dGopxjKOySTXgzgLnVdG8RpUnB7YP/5etfciqrS5ewNS0nDqbi4GsENzVs+pzXSmteVOmtylJ+L1L6PzNCZ+eVNLEVN+i4x8l63NfcswVoowcTPNVkyxFyLi56ICxFyLi4AuSRcXAJBFxcAm5sMqy2VeV3eMIvtS48lzIyrLJV5Xd4wi+1Lj+lczsaFGMIqEElFKySI51LaLcvYXC8TvS29xQoxhFQglGK1JI9CSGVzXNbnON6qm9F9ufZjx5v3ehxpm5xjeuqOS9iPZj4b37/QwblmnGyMPFVuJPTZaIm5FxcXPZWFySBcAkEXFwCbgi4uATcXKk3AJNt0braNbR3VFJe9a19H5moue+BqaFSnPZaUPK+s8yV1YkozyVFLxO9uSCSpqfQWPn+MnerVlxnN/NnhcmUrtvi2yC6j5uUru4uQLi505cm4uQLgXJuLkXACJubHKcslXld3jTi9cuP6Y8xlGWSryu7xpxeuW9/pXM7GlSjCKhBKMUrJLYRTnbRF7C4Xid+e3uKNGMIqEElFKySPUArmwCGrkgA1f4Fhu4/jn6j8Cw3cfxz9TaA7mfUi4FL5V5Gr/AALDdx/7k/UfgWG7j+OfqbQDM+o4FL5V5Gr/AALDdx/HP1H4Hhu4/wDcn6mzuc9nWdaN6VF9rWpTX5eS5nVmbsmR1Y0KUc0oryNdndGhTlGFG+kr6fackuC17zV3DZFy1FWVjFnPNJu1vAE3IFzp4uTcXIuLgXJuLkXBw5c7D+ufFA5r+rfEEeQ0P1hiSVm1wugeuLjapUjwlJfNniSIz3o2iQQDpwkFbgAsZ2UYDr56LejGNpS7zXBGATGTWtNrwbRx7HqEoqSclddD6HRpKEVCCUYpWSWw9D511su/P4pDrZ9+fxSIeF4mku0l8nqfRQfOuul35/FIdbLvz+KQ4PiP3JfL6/g+ig+dddLvT+KQ66Xel8UhwfEfuS+X1PopJpejuGnCm51HK9SzUZO9lu97v9DdETVmaNOTnFSatfkCCHJI5XOs6070qLtDZKS1OXJcvqdjFydjxWrRpRzPy6/30PXOs620qD4qU19I+pzxALMYqKsjCq1pVZZpEggHoiJBBFwCwIABJFwQcBkf074A6X+hfdBHxEX/ANG+hoc8p6OIq85KXmkzAN90so2nCpulFxfjF/z8jnz1B3iiriY5Ksl4lgVB7ILlgVAFywKgC5YFQAWBUkAk2+QZb1susmr04PZulLh4Lea/AYSVacacd+tvhHid7hqEacYwgrRirIiqStoX8Dh+JLPLZerPUrOSim20ktbbdkkRVnGMXKTUYrW29iRx2cZvKu3CF1ST2b5c3y5EMYuT0NPEYiNGN3q+SPTOs5dW9Om2qexvY5fwaUEFlJJWRg1asqks0iwKg9EdywKkgXJBUAXLAqALlj2wdLTqQh3pxXuuY5t+jVHTxEZboRcvsvqeZOyJKMc9SMerR2lySpJT1PprGo6R4brKErbYNSXhsfyb8jiz6ROCas1dNNNPgz59jsM6VSVN/lk7PjHc/IsUpbox+0qVpKoueh4AAmMsAAAAAAAAABRbaildtpJLa29wOl6NZZsxE1+xPh3vQ8ykkrk1Ci601BfXwRs8ly5UIa7Oc7OT+kVyRnV60YRcptRildtlcVioUoudRpRXm3wS3s4rNczniJa7xpr2Y3+b4srxi5s2q1eGGgorfkvuXzfNpYiWirxpp6o73+qXoa0AspJKyMKpUlUlmk7sAA6eAAAAAQASAAAAAAdX0Vw+jTnVe2pK3uj/AC35HK0oSnKMYq8pNRS5s+h4XDqnCNOOyEUvHmRVXpbqaXZ1LNNzey93+LnvYEWBXNq7LHN9KsDpRVeK1w7Mv2vY/c/qdIeVSCknGSupJprkdi8ruRV6SqwcHzPmwuZWaYKVCpKD2bYvjF7PQxS2nfU+YknGTi90LgA6cuLgAC4uAeuFw86k404K8pO3JcW+QOpNuyM7JMudep2v9ONnJ8eEff8AQ6/F4qFCGnN6KWpJbW90UjFlOlgaMYt7FqX5pS3v/Nhx+Pxs68nOb8Ir2YrgiCzqPwNbPHBU8q1mz0zLMZ4ielJ2ir6MVsS+75mHcAmStojJlOU3mlq2LkXJB05cXAAFxcXAAuAABcXFwALi4uD1wuHlVqRpw9qTt4Le3yRy4V27I3nRbBaU5V5Lsx7MecntfuX1OtMbCYeNOEacVZRVvF72ZJVlLM7n02Go8Gmoc+f8kEgHknsCLEgA1mc5csRTaVlOOuL58HyZws4uLcZJxlF2ae1NH0xo0PSDJ+tXW01/citcV+ZL7ktOdtGZuPwnEXEgtVv4r7nHAPVqd01xBYMIAXFwAbzJcdQw9OdR9qs3oqNtejus9y4+Bo7g8yV1YlpVXSlmjuZGMxc603Obu3u3JcEjwIuLnojcnJ3e7AFxcHABcAAC4uAALi4AAuLgAC4uASjtOj+V9TDTmv7k7X/THdH1MHo7k7VsRWWvbGD/AOT+x1FivUnfRG12fhHH/LPfkuniLEgERqgAAAAAAhkgA5/Pcj629Wikqm+OpKXozj5RcW4yTi07NNWafBn09mrzbJ6eIWl7FRbJpfKS3olhUtozMxmAVTv09HzXX8nCAyMdgalCWjUjbhJa4y8GYpOnfYw5JxdpKzLC5UHTzctcFQBcsCoAuWBUAXLC5UAXLAqALlgVPbC4adWWhTg5S5bFzb3I49DqTbsldnkdRkeQ2tWxEde2MHu5y9DNyjIoUbTn26vG3Zj+3nzN2iCdS+xtYTs/K89Xfkun8+PsCQCI1gAAAAAAAAAAAAQyQAeNejGcXCcVOL1NPYc1mPRfbPDS/wDST/4y9fM6sg9KTWxBWw9OsrTX15+Z8yxGHnTlo1ISjLhJbfDieVz6bWoxmtGcYyXCSTRpMZ0Yoz105SpP415PX8yVVVzMmt2XNa03f0f2ONuLm7xHRnEQ1wtUX6ZaMvJ+pra2BrQvp0pRtxi2vNEiknszPnQq0/ii/Ixrk3Kk3OkNybkXFyLnRcm4ue9LB1Z/6dOpO++Kk15mxodG8TL2oxprjOSv5K5xyS3ZNChVqfDFv6f9NPcvSpynJRjFyk90U7nV4PotSjrqylVfBdhepvMNhYUlo04KK5L6veRuquRepdl1Ja1Hl9X9vVnL5d0YnK0sRLQjt0FZzfi9i+Z1GFwsKUdCnFRjy2vm3vMhEkMpOW5r0MNTo/AtevMhEgHksAAAAAAAAAAAAAAAAAAAAAEAAHEQSgDnM6zTZv7T8EcjjfaYBZp7GD2hueeF2o6rK9sSQdqEeA+I6BkIAq8z6JAAHTjLAAHQAAAAAAAAAAAD/9k=",
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
