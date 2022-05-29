import React from "react";
import {VStack, Grid, GridItem,Stack, SimpleGrid , Flex,Box, Text,Heading,Spacer} from "@chakra-ui/layout"
import {Image} from "@chakra-ui/image"
import { useColorMode } from "@chakra-ui/color-mode";
import {useMediaQuery} from "@chakra-ui/media-query";
import { IconButton } from "@chakra-ui/react";
import { FaSun, FaMoon, FaGithub, FaLinkedin, FaInstagram,FaRegCopyright} from "react-icons/fa";
import {ImMail4} from "react-icons/im"




export const ContactMe=()=>{
    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === "dark";
    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)")
return(
    <VStack>
        <Heading mt="100px" mb="50px" fontWeight="100" align="center" fontSize="6xl">Get In Touch</Heading>
        <Box w="75%" align="center">
            <text fontWeight="100" fontSize="4xl" align="center">
            I'm currently looking for full-time MERN Stack! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at, <text>qureshiharoon010203@gmail.com</text>.
            </text>
            <Heading mt="25px" fontWeight="100" fontSize="3xl">You can also connect me on</Heading>
            <Flex mt="15px" w="150px" align="center" gap="15px">
                <IconButton icon={<FaLinkedin/>} onClick={() =>window.open("https://www.linkedin.com/in/mohd-haroon-qureshi-b19827173/")}></IconButton>
                <IconButton icon={<ImMail4/>} onClick={() =>window.open("https://www.qureshiharoon010203@gmail.com")}></IconButton>
            </Flex>
        </Box>
        <Flex align="center" gap="8px">
            <FaRegCopyright/> <Text>2022 copyright all right reserved</Text>
        </Flex>
    </VStack>
)
}