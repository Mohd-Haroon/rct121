import React from "react";
import {Stack, Center, Flex,Box, Text,Heading,VStack} from "@chakra-ui/layout"
import {Image} from "@chakra-ui/image"
import { useColorMode } from "@chakra-ui/color-mode";
import {useMediaQuery} from "@chakra-ui/media-query";

export const Profile=()=>{

    const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)")

    return(
        <Stack w="100%" >
            <Flex direction={["column", "column", "row"]}
            spacing="200px" p={isNotSmallerScreen ? "32" : "0"}
            alignSelf="flex-start">
                <Image align="center" mt={isNotSmallerScreen ? "0" : "12"}
                mb={isNotSmallerScreen?"0":"12"} borderRadius="full" 
                backgroundColor="transparent" box="lg" 
                boxSize="350px" src="https://github.com/Mohd-Haroon/rct121/blob/main/WhatsApp%20Image%202022-06-02%20at%208.46.15%20AM.jpeg?raw=true" />
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