import React from "react";
import {VStack, Grid, GridItem,Stack, SimpleGrid , Flex,Box, Text,Heading,Spacer} from "@chakra-ui/layout"
import {Image} from "@chakra-ui/image"
import { useColorMode } from "@chakra-ui/color-mode";
import {useMediaQuery} from "@chakra-ui/media-query";
import {Button} from "@chakra-ui/button"


export const Projects=()=>{
    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === "dark";
    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)")

    return(
        <VStack w="100%"  >
            <Heading borderBottom="2px solid steelblue" mt="100px" mb="50px" fontWeight="100" align="center" fontSize="5xl">Recent Projects</Heading>
            <SimpleGrid  w="60%" columns={[1,2,2]} gap="20px">
                <Box  p="15px" border="2px solid steelblue" borderRadius="5px">
                    <Image src="https://github.com/Mohd-Haroon/rct121/blob/main/WhatsApp%20Image%202022-05-28%20at%206.50.28%20PM.jpeg?raw=true"/>
                    <Text mt="10px" fontWeight="300" fontSize="1.5rem">BigBasket Clone</Text>
                    <Text mt="10px" fontWeight="300">BigBasket an online supermarket where user can buy different daily need products</Text>
                    <Text mt="10px" fontWeight="300">A collaborative project, built in 5 days by a team of 5 developers.</Text>
                    <Text mt="10px" fontWeight="300">React | Redux | Node | Express | MongoDB</Text>
                    <Flex w="70%">

                    <Button mt={8} colorScheme="blue" onClick={() =>
                    window.open("https://github.com/Mohd-Haroon/Big-basket-clone")}>Code</Button> 
                    <Spacer />
                    <Button mt={8} colorScheme="blue" onClick={() =>
                    window.open("https://big-basket-clone-by-masai-school.netlify.app/")}>Live</Button>
                    </Flex>
                </Box>
                <Box p="15px" border="2px solid steelblue" borderRadius="5px">
                    <Image src="https://github.com/Mohd-Haroon/rct121/blob/main/WhatsApp%20Image%202022-05-28%20at%206.50.27%20PM.jpeg?raw=true"/>
                    <Text mt="10px" fontWeight="300" fontSize="1.5rem">Nykaa Man Clone</Text>
                    <Text mt="10px" fontWeight="300">BigBasket an online supermarket where user can buy different daily need products</Text>
                    <Text mt="10px" fontWeight="300">A collaborative project, built in 5 days by a team of 5 developers.</Text>
                    <Text mt="10px" fontWeight="300">HTML | CSS | JavaScript</Text>
                    <Flex w="70%">

                    <Button mt={8} colorScheme="blue" onClick={() =>
                    window.open("https://github.com/Mohd-Haroon/Nyka-man-clone")}>Code</Button> 
                    <Spacer />
                    <Button mt={8} colorScheme="blue" onClick={() =>
                    window.open("https://remarkable-klepon-8f9936.netlify.app/")}>Live</Button>
                    </Flex>
                </Box>
                <Box p="15px" border="2px solid steelblue" borderRadius="5px">
                    <Image src="https://github.com/Mohd-Haroon/rct121/blob/main/WhatsApp%20Image%202022-05-28%20at%206.50.28%20PM%20(1).jpeg?raw=true"/>
                    <Text mt="10px" fontWeight="300" fontSize="1.5rem">Netmeds Clone</Text>
                    <Text mt="10px" fontWeight="300">An e-commerce website that provides different grooming products for men.</Text>
                    <Text mt="10px" fontWeight="300">A collaborative project, built in 5 days by a team of 7 developers.</Text>
                    <Text mt="10px" fontWeight="300">HTML | CSS | JavaScript </Text>
                    <Flex w="70%">

                    <Button mt={8} colorScheme="blue" onClick={() =>
                    window.open("https://github.com/Mohd-Haroon/netmeds.com/tree/main")}>Code</Button> 
                    <Spacer />
                    <Button mt={8} colorScheme="blue" onClick={() =>
                    window.open("https://condescending-knuth-5e7b4b.netlify.app/")}>Live</Button>
                    </Flex>
                </Box>            
                </SimpleGrid>
        </VStack>
    )
}