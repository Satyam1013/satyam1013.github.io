import React, { useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import {
  Box,
  Button,
  Center,
  Flex,
  FormLabel,
  Heading,
  IconButton,
  Input,
  Link,
  Stack,
  Textarea,
  Tooltip,
  useClipboard,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { HashScroll } from "react-hash-scroll";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Contact() {
  const form = useRef();
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_82dl15m",
        "template_abxhlwr",
        form.current,
        "th-QQ5jZnw984WVY_"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  const { hasCopied, onCopy } = useClipboard("satyambanwale786@gmail.com");

  return (
    <Flex
      bg={useColorModeValue("gray.100", "gray.900")}
      align="center"
      justify="center"
      bgColor={"transparent"}
      id="contact"
    >
      <div data-aos="fade-down-left">
        <HashScroll hash="#contact">
          <section></section>
        </HashScroll>

        <Box
          borderRadius="lg"
          m={{ base: 5, md: 16, lg: 10 }}
          p={{ base: 5, lg: 16 }}
        >
          <Box>
            <VStack spacing={{ base: 4, md: 8, lg: 20 }}>
              <Heading
                fontSize={{ base: "25px", sm: "35px", md: "40", lg: "45px" }}
                color="#9f7aea"
              >
                Get in Touch
              </Heading>

              <Stack
                spacing={{ base: 4, md: 8, lg: 20 }}
                direction={{ base: "column", md: "row" }}
              >
                <Stack
                  align="center"
                  justify="space-around"
                  direction={{ base: "row", md: "column" }}
                >
                  <Tooltip
                    label={hasCopied ? "Email Copied!" : "Copy Email"}
                    closeOnClick={false}
                    hasArrow
                  >
                    <IconButton
                      aria-label="email"
                      variant="ghost"
                      size="lg"
                      fontSize="3xl"
                      icon={<MdEmail />}
                      _hover={{
                        bg: "purple.400",
                        color: useColorModeValue("white", "gray.700"),
                      }}
                      onClick={onCopy}
                      isRound
                    />
                  </Tooltip>

                  <Link href="https://github.com/Satyam1013">
                    <IconButton
                      aria-label="github"
                      variant="ghost"
                      size="lg"
                      fontSize="3xl"
                      icon={<BsGithub />}
                      _hover={{
                        bg: "purple.400",
                        color: useColorModeValue("white", "gray.700"),
                      }}
                      isRound
                    />
                  </Link>

                  <Link href="https://twitter.com/SatyamBanwale3">
                    <IconButton
                      aria-label="twitter"
                      variant="ghost"
                      size="lg"
                      icon={<BsTwitter size="28px" />}
                      _hover={{
                        bg: "purple.400",
                        color: useColorModeValue("white", "gray.700"),
                      }}
                      isRound
                    />
                  </Link>

                  <Link href="https://www.linkedin.com/in/satyam-banwale/">
                    <IconButton
                      aria-label="linkedin"
                      variant="ghost"
                      size="lg"
                      icon={<BsLinkedin size="28px" />}
                      _hover={{
                        bg: "purple.400",
                        color: useColorModeValue("white", "gray.700"),
                      }}
                      isRound
                    />
                  </Link>
                </Stack>

                <Center>
                  <Box width={{ base: "80%", lg: "100%" }} mt="5%">
                    <form ref={form} onSubmit={sendEmail}>
                      <FormLabel>Name</FormLabel>
                      <Input type="text" name="user_name" />
                      <FormLabel>Email</FormLabel>
                      <Input type="email" name="user_email" />

                      <FormLabel>Message</FormLabel>
                      <Textarea
                        name="message"
                        placeholder="Your Message"
                        rows={6}
                        resize="none"
                      />
                      <Button
                        colorScheme="blue"
                        bg="purple.400"
                        color="white"
                        type="submit"
                        _hover={{
                          bg: "green.500",
                        }}
                        mt="5%"
                      >
                        Send Message
                      </Button>
                    </form>
                  </Box>
                </Center>
              </Stack>
            </VStack>
          </Box>
        </Box>
      </div>
    </Flex>
  );
}
