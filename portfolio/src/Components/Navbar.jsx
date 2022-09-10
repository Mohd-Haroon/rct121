import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Heading,
  VStack
} from '@chakra-ui/react';
import { FaSun, FaMoon, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import {useColorMode} from "@chakra-ui/color-mode";
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import {Header} from "./Header"
import {Projects} from "./Projects"
import {Profile} from "./Profile"
import {Skills} from './Skills'
import {ContactMe} from "./Contactme"

const Links = ['Home', 'About', 'Projects',"Skills","Contact"];

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={`#${children}`}>
    {children}
  </Link>
);

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {colorMode, toggleColorMode} = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <>
      <Box zIndex={1000000000} borderRadius="5px" border="1px solid grey" position="sticky" top="0"  backdrop-filter="blurt(20px)"  bg={useColorModeValue('gray.100', 'gray.900')} width="100%">
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box>
              <Heading ml="8" size="md" fontWeight="semibold" color="cyan.400">
                imMHQ
              </Heading>
            </Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <IconButton  icon={<FaLinkedin/>} isRound='true'onClick={() =>window.open("https://www.linkedin.com/in/mohd-haroon-qureshi-b19827173/")} ></IconButton>
            <IconButton ml={2} icon={<FaGithub/>} isRound='true' onClick={() =>window.open("https://github.com/Mohd-Haroon")} ></IconButton>
            <IconButton ml={2} icon={isDark ? <FaSun/> : <FaMoon/> } isRound='true' onClick={toggleColorMode}></IconButton>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

      <VStack p= {4} width="100%">
        <Box id="Home" w="100%">
          <Header />
        </Box>
        <Box id="About">
          <Profile />
        </Box>
        <Box id="Projects">
          <Projects/>
        </Box>
        <Box id="Skills">
          <Skills/>
        </Box>
        <Box id="Contact">
          <ContactMe/>
        </Box>
      </VStack>
    </>
  );
}