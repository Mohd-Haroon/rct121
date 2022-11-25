import React from "react";
import {Stack, Center, Flex,Box, Text,Heading,VStack} from "@chakra-ui/layout"
import {Image} from "@chakra-ui/image"
import { useColorMode } from "@chakra-ui/color-mode";
import {useMediaQuery} from "@chakra-ui/media-query";
import profilepic from "./profilepic.png"

export const Profile=()=>{

    const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)")

    return(
        <Stack w="100%"  mt={isNotSmallerScreen ? "10vh" : "10vh"}>
            <Flex direction={["column", "column", "row"]}
            spacing="200px" p={isNotSmallerScreen ? "32" : "0"}
            alignSelf="flex-start">
                <Image align="center" mt={isNotSmallerScreen ? "0" : "50px"}
                mb={isNotSmallerScreen?"0":"0"} 
                backgroundColor="transparent" box="lg" 
                boxSize="350px" src={profilepic} />
                <VStack align="center"  ml="5%">
                    <Heading borderBottom="2px solid steelblue" fontWeight="5" align="center" fontSize="5xl" >About Me</Heading>
                    <Center w="70%" mt="30px">
                    <Text fontWeight="300" align="center" mt="20px" fontSize="1.5rem">Passionate and ambitious aspiring full-stack developer. Specialize in MERN stack with a keen interest in learning and working with new technology. Looking forward to new opportunities.</Text>
                    </Center>
                </VStack>
            </Flex>
        </Stack>
    )
}