import { VStack, Flex, Heading,Spacer,Text,Box } from "@chakra-ui/layout";
import { IconButton } from "@chakra-ui/react";
import { FaSun, FaMoon, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import {useColorMode} from "@chakra-ui/color-mode";
import {Header} from "./Components/Header"
import {Projects} from "./Components/Projects"
import {Profile} from "./Components/Profile"
import {Skills} from './Components/Skills'
import {ContactMe} from "./Components/Contactme"
import "./Appp.css"


function App() {
  const {colorMode, toggleColorMode} = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <VStack p={2}  width="100%">
      <Flex borderRadius="5px" p="8px" align="center" w="100%" border="1px solid grey" direction={["column", "column", "row"]} position="sticky" top="0" backgroundColor={isDark?"#1a202c":"white"} backdrop-filter="blurt(20px)">
        <Heading ml="8" size="md" fontWeight="semibold" color="cyan.400">
          imMHQ
        </Heading>
        {/* <Spacer></Spacer> */}
        <Flex gap="10px" ml="20px" direction={["row", "row", "row"]}>
          <a href="#home">
          <Text class="navlink" fontWeight="semibold">Home</Text>
          </a>
          <a href="#about">
          <Text class="navlink" fontWeight="semibold">About</Text>
          </a>
          <a href="#projects">
          <Text class="navlink" fontWeight="semibold">Projects</Text>
          </a>
          <a href="#skills">
          <Text class="navlink" fontWeight="semibold">Skills</Text>
          </a>
          <a href="#contact">
          <Text class="navlink" fontWeight="semibold">Contact</Text>
          </a>
        </Flex>
        <Spacer></Spacer>
        <Flex mr="10px">
        <IconButton  icon={<FaLinkedin/>} isRound='true'onClick={() =>window.open("https://www.linkedin.com/in/mohd-haroon-qureshi-b19827173/")} ></IconButton>
        <IconButton ml={2} icon={<FaGithub/>} isRound='true' onClick={() =>window.open("https://github.com/Mohd-Haroon")} ></IconButton>
        <IconButton ml={2} icon={isDark ? <FaSun/> : <FaMoon/> } isRound='true' onClick={toggleColorMode}></IconButton>
        </Flex>
      </Flex>
      <Box id="home" w="100%">
        <Header />
      </Box>
      <Box id="about">
        <Profile />
      </Box>
      <Box id="projects">
        <Projects/>
      </Box>
      <Box id="skills">
        <Skills/>
      </Box>
      <Box id="contact">
        <ContactMe/>
      </Box>
    </VStack>
  );
}

export default App;
