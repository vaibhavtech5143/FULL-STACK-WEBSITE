import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Icon,
  Text,
  useDisclosure,
  useColorMode,
  useColorModeValue,
  Button,
  VStack,
  Stack,
} from "@chakra-ui/react";
import { Link as ReactLink } from "react-router-dom";
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { GiTechnoHeart } from "react-icons/gi";

const links = [
  { linkName: "Products", path: "/product" },
  { linkName: "ShoppingCart", path: "/cart" },
];

const NavLink = ({ path, children }) => (
  <Link
    as={ReactLink}
    to={path}
    px={2}
    py={2}
    rounded="md"
    _hover={{ textDecoration: "none", bg: useColorModeValue("gray.200", "gray.700") }}
  >
    {children}
  </Link>
);

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box bg={useColorModeValue("gray.100", "gray.900")} w='100vw' px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between" w={"auto"}>
        <IconButton
          size={"md"}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack>
          <Link as={ReactLink} to="/">
            <Flex alignItems="center">
              <Icon as={GiTechnoHeart} w={6} h={6} color={"orange.400"} />
              <Text fontWeight={"extrabold"}>TechnoHeart</Text>
            </Flex>
          </Link>
          <HStack as={"nav"} spacing={4} display={{base:"none",md:"flex"}} >
            {links.map((link) => (
              <NavLink key={link.linkName} path={link.path}>
                {link.linkName}
              </NavLink>
            ))}
          </HStack>
        </HStack>
        <Flex alignItems="center" justifyContent="flex-end"> {/* Align to the right */}
          <NavLink>
            <Box >
              <Icon as={colorMode === "light" ? MoonIcon : SunIcon} alignSelf="center" onClick={() => toggleColorMode()} />
            </Box>
          </NavLink>
        <Button as={ReactLink} to={"/login"} m={2} p={2} fontSize={"sm"} fontWeight={400} variant={"link"} >SignIn</Button>
        <Button as={ReactLink}  display={{base:"none",md:"inline-flex"}} to={"/registration"} m={2} p={2} fontSize={"sm"} fontWeight={600 } _hover={{bg:'orange.400'}} bg='orange.500' color={"white"}>Register</Button>
        </Flex>

      </Flex>

      {isOpen?<Box pb={4} display={{md:"none"}}
      >
      <Stack as={"nav"} spacing={4} >
      
            {links.map((link) => (
              <NavLink key={link.linkName} path={link.path}>
                {link.linkName}
              </NavLink>
            ))}
            <Button as={ReactLink}>Register</Button>
       
      </Stack>
       </Box>:null}
    </Box>
  );
};

export default Navbar;
