// import React from "react";
import { Box, Image, Text, Button, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const ClubCard = ({ name, image }) => {
  const navigate = useNavigate();

  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={4}
      mb={6}
      width="100%"
    >
      <Image src={image} alt={name} borderRadius="md" mb={4} />
      <VStack align="start" spacing={2}>
        <Text fontWeight="bold" fontSize="lg">
          {name}
        </Text>

        <Button
          colorScheme="green"
          onClick={() => navigate("/join-club")}
          size="sm"
        >
          Join Club
        </Button>
      </VStack>
    </Box>
  );
};

export default ClubCard;
