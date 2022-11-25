import React from "react";
import {VStack, Grid, GridItem,Stack, SimpleGrid , Flex,Box, Text,Heading,Spacer} from "@chakra-ui/layout"
import { FaHtml5,FaCss3Alt,FaReact,FaNodeJs} from "react-icons/fa";
import {DiJavascript1} from "react-icons/di"
import {SiRedux,SiChakraui,SiMongodb,SiExpress,SiRedis,SiSocketdotio} from "react-icons/si"
import {Image} from "@chakra-ui/image"
import { useColorMode } from "@chakra-ui/color-mode";
import {useMediaQuery} from "@chakra-ui/media-query";
import {Button} from "@chakra-ui/button"


export const Skills=()=>{
    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === "dark";
    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)")
    return(
        <VStack>
            <Heading borderBottom="2px solid steelblue" mt="100px" mb="50px" fontWeight="100" align="center" fontSize="5xl">Skills</Heading>
            <Flex flexWrap="wrap"
            justifyContent="center"
            gap="25px"
            alignSelf="flex-end">
                <Box w="350px" >
                    <Heading fontWeight="100" align="center" fontSize="3xl">Front-end Skills</Heading>
                    <Box w="35%" align="center">
                    <Flex mt="30px" w="35%" direction="column" gap="10px">
                        <Flex p="15px" w="300px" boxShadow='outline' rounded='md' align="center" gap="15px"  _hover={{transform: 'scale(1.05)',transition:"all .25s ease-in"}}>
                           <FaHtml5/> HTML
                        </Flex>
                        <Flex p="15px" w="300px" boxShadow='outline' rounded='md' align="center" gap="15px" _hover={{transform: 'scale(1.05)',transition:"all .25s ease-in"}}>
                           <FaCss3Alt/> CSS
                        </Flex>
                        <Flex p="15px" w="300px" boxShadow='outline' rounded='md' align="center" gap="15px" _hover={{transform: 'scale(1.05)',transition:"all .25s ease-in"}}>
                           <DiJavascript1/> JavaScript
                        </Flex>
                        <Flex p="15px" w="300px" boxShadow='outline' rounded='md' align="center" gap="15px" _hover={{transform: 'scale(1.05)',transition:"all .25s ease-in"}}>
                           <FaReact/> React
                        </Flex>
                        <Flex p="15px" w="300px" boxShadow='outline' rounded='md' align="center" gap="15px" _hover={{transform: 'scale(1.05)',transition:"all .25s ease-in"}}>
                           <SiRedux/> Redux
                        </Flex>
                        <Flex p="15px" w="300px" boxShadow='outline' rounded='md' align="center" gap="15px" _hover={{transform: 'scale(1.05)',transition:"all .25s ease-in"}}>
                           <SiChakraui/> Chakra-UI
                        </Flex>
                    </Flex>
                    </Box>
                </Box>
                <Box w="350px">
                    <Heading fontWeight="100" align="center" fontSize="3xl">Back-end Skills</Heading>
                    <Box w="35%" align="center">
                    <Flex mt="30px" w="35%" direction="column" gap="10px">
                        <Flex p="15px" w="300px" boxShadow='outline' rounded='md' align="center" gap="15px" _hover={{transform: 'scale(1.05)',transition:"all .25s ease-in"}}>
                            <FaNodeJs/>Node.js
                        </Flex>
                        <Flex p="15px" w="300px" boxShadow='outline' rounded='md' align="center" gap="15px" _hover={{transform: 'scale(1.05)',transition:"all .25s ease-in"}}>
                            <SiMongodb/>MongoDB
                        </Flex>
                        <Flex p="15px" w="300px" boxShadow='outline' rounded='md' align="center" gap="15px" _hover={{transform: 'scale(1.05)',transition:"all .25s ease-in"}}>
                            <SiExpress/>Express.js
                        </Flex>
                        <Flex p="15px" w="300px" boxShadow='outline' rounded='md' align="center" gap="15px" _hover={{transform: 'scale(1.05)',transition:"all .25s ease-in"}}>
                            <SiRedis/>Redis
                        </Flex>
                        <Flex p="15px" w="300px" boxShadow='outline' rounded='md' align="center" gap="15px" _hover={{transform: 'scale(1.05)',transition:"all .25s ease-in"}}>
                            <SiSocketdotio/>WebSocket
                        </Flex>
                        
                    </Flex>
                    </Box>
                </Box>
            </Flex>
        </VStack>
    )
}