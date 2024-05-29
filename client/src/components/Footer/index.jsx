import { useLocation, useNavigate } from "react-router-dom";
import { Box, Button, Flex, Text } from "@chakra-ui/react";

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Box as="footer" w="100%" mt="auto" bg="teal.500" p={4} color="white">
      <Flex direction="column" align="center">
        {location.pathname !== "/" && (
          <Button
            colorScheme="teal"
            variant="outline"
            mb={3}
            onClick={() => navigate(-1)}
          >
            &larr; Go Back
          </Button>
        )}
        <Text textAlign="center">
          Made with{" "}
          <span role="img" aria-label="heart" aria-hidden="false">
            ❤️
          </span>{" "}
          by Meera, Aaron, and Olivia.
        </Text>
      </Flex>
    </Box>
  );
};

export default Footer;
