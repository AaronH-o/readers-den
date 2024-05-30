// import React from "react";
import {
  Box,
  Flex,
  Heading,
  Container,
  SimpleGrid,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import ClubCard from "../components/ClubCard";

const clubData = [
  {
    name: "Classic Literature Club",
    image:
      "https://www.thoughtco.com/thmb/EXhwErDo3ncrGBNyHGuPB2bOekQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/3587804365_fa15d9f0e7_o-5c39394fc9e77c0001570010.jpg",
  },
  {
    name: "Fantasy Lovers Club",
    image:
      "https://www.rachelagreco.com/wp-content/uploads/Enemies-to-Lovers-Blog-Post-1.jpg",
  },
  {
    name: "Mystery & Thriller Club",
    image:
      "https://www.novelsuspects.com/wp-content/uploads/2020/12/MysterySuspenseBooks2020_NovelSuspects.png",
  },
  {
    name: "Science Fiction Club",
    image: "https://images.wsj.net/im-894656",
  },
  {
    name: "Modern Classics Club",
    image:
      "https://booksandbao.com/wp-content/uploads/2023/06/best-modern-classic-books-e1691060347623-1000x563.jpg.webp",
  },
];

const Clubs = () => {
  return (
    <Container maxW="container.lg">
      <Box as="nav" w="100%" p={4} mb={6} bg="teal.500" color="white">
        <Flex justify="space-between" align="center">
          <Heading as="h1" size="lg">
            Clubs
          </Heading>
          <Flex>
            <Button
              as={Link}
              to="/create-club"
              mr={4}
              colorScheme="teal"
              variant="outline"
            >
              Create Club
            </Button>
            <Button
              as={Link}
              to="/my-bookshelf"
              colorScheme="teal"
              variant="outline"
            >
              My Bookshelf
            </Button>
          </Flex>
        </Flex>
      </Box>
      <Flex direction="column" align="center" justify="center" minH="100vh">
        <Box w="100%" p={6} boxShadow="md" borderRadius="md" textAlign="center">
          <SimpleGrid columns={[1, null, 2]} spacing={6}>
            {clubData.map((club, index) => (
              <ClubCard key={index} name={club.name} image={club.image} />
            ))}
          </SimpleGrid>
        </Box>
      </Flex>
    </Container>
  );
};

export default Clubs;
