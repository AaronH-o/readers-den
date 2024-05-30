// import React from "react";
import { Box, Flex, Heading, Container, SimpleGrid } from "@chakra-ui/react";
import ClubCard from "../components/ClubCard"; // Adjust the import path if needed

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
    <Container maxW="container.md">
      <Flex direction="column" align="center" justify="center" minH="100vh">
        <Box w="100%" p={6} boxShadow="md" borderRadius="md" textAlign="center">
          <Heading as="h1" size="2xl" mb={6}>
            Clubs
          </Heading>
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
