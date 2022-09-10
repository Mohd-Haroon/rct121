import { VStack, Flex, Heading,Spacer,Text,Box } from "@chakra-ui/layout";
import { IconButton } from "@chakra-ui/react";
import { FaSun, FaMoon, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import {useColorMode} from "@chakra-ui/color-mode";
import {Header} from "./Components/Header"
import {Projects} from "./Components/Projects"
import {Profile} from "./Components/Profile"
import {Skills} from './Components/Skills'
import {ContactMe} from "./Components/Contactme"
import Navbar from "./Components/Navbar"
import "./Appp.css"


function App() {
  const {colorMode, toggleColorMode} = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <VStack p={2}  width="100%">
      <Navbar isDark={isDark} toggleColorMode={toggleColorMode} />
    </VStack>
  );
}

export default App;
