// import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Box, Flex, Heading, Link, Spacer, Button } from "@chakra-ui/react";
import Auth from "../../utils/auth";

const Header = () => {
  const logout = () => {
    Auth.logout();
  };

  return (
    <Box bg="teal.500" p={4} color="white">
      <Flex align="center">
        <Heading as="h1" size="lg">
          <Link as={RouterLink} to="/">
            Readers Den
          </Link>
        </Heading>
        <Spacer />
        {Auth.loggedIn() ? (
          <Button onClick={logout} colorScheme="teal" variant="outline">
            Logout
          </Button>
        ) : (
          <Flex>
            <Link as={RouterLink} to="/login" mr={4}>
              Login
            </Link>
            <Link as={RouterLink} to="/signup">
              Signup
            </Link>
          </Flex>
        )}
      </Flex>
    </Box>
  );
};

export default Header;
