// import React from "react";
import { Box, Flex, Heading, Container, SimpleGrid } from "@chakra-ui/react";
import BookCard from "../components/BookCard";

const bookData = [
  {
    _id: "1",
    title: "Don Quixote",
    author: "Miguel de Cervantes",
    image: "https://covers.openlibrary.org/b/id/13538218-L.jpg",
    club: "Classic Literature Club",
  },
  {
    _id: "2",
    title: "A Tale of Two Cities",
    author: "Charles Dickens",
    image:
      "https://m.media-amazon.com/images/I/91C0MECqJ+L._AC_UF1000,1000_QL80_.jpg",
    club: "Classic Literature Club",
  },
  {
    _id: "3",
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    image:
      "https://m.media-amazon.com/images/I/7125+5E40JL._AC_UF1000,1000_QL80_.jpg",
    club: "Fantasy Lovers Club",
  },
  {
    _id: "4",
    title: "The Little Prince",
    author: "Antoine de Saint-Exupéry",
    image:
      "https://m.media-amazon.com/images/I/81G2R0luQJL._AC_UF1000,1000_QL80_.jpg",
    club: "Fantasy Lovers Club",
  },
  {
    _id: "5",
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    image:
      "https://m.media-amazon.com/images/I/515W3XN03YL._AC_UF1000,1000_QL80_.jpg",
    club: "Fantasy Lovers Club",
  },
  {
    _id: "6",
    title: "And Then There Were None",
    author: "Agatha Christie",
    image:
      "https://m.media-amazon.com/images/I/71EXMl7hbBL._AC_UF1000,1000_QL80_.jpg",
    club: "Mystery & Thriller Club",
  },
  {
    _id: "7",
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    image:
      "https://upload.wikimedia.org/wikipedia/en/a/a9/The_Hobbit_trilogy_dvd_cover.jpg",
    club: "Fantasy Lovers Club",
  },
  {
    _id: "8",
    title: "Dream of the Red Chamber",
    author: "Cao Xueqin",
    image:
      "https://m.media-amazon.com/images/I/818uRo-OE0L._AC_UF1000,1000_QL80_.jpg",
    club: "Classic Literature Club",
  },
  {
    _id: "9",
    title: "The Lion, the Witch and the Wardrobe",
    author: "C.S. Lewis",
    image: "https://m.media-amazon.com/images/I/51ucYQIg73L._SX342_SY445_.jpg",
    club: "Fantasy Lovers Club",
  },
  {
    _id: "10",
    title: "She: A History of Adventure",
    author: "H. Rider Haggard",
    image: "https://m.media-amazon.com/images/I/51-Kq1G4Y9L._SL500_.jpg",
    club: "Modern Classics Club",
  },
  {
    _id: "11",
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    image:
      "https://npr.brightspotcdn.com/dims4/default/f735808/2147483647/strip/true/crop/363x574+0+0/resize/880x1392!/quality/90/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2Flegacy%2Fsites%2Fwkar%2Ffiles%2Fcatcher_in_the_rye_cover.png",
    club: "Modern Classics Club",
  },
  {
    _id: "12",
    title: "The Da Vinci Code",
    author: "Dan Brown",
    image:
      "https://m.media-amazon.com/images/I/815WORuYMML._AC_UF1000,1000_QL80_.jpg",
    club: "Mystery & Thriller Club",
  },
  {
    _id: "13",
    title: "The Alchemist",
    author: "Paulo Coelho",
    image: "https://covers.openlibrary.org/b/id/45762-L.jpg",
    club: "Modern Classics Club",
  },
  {
    _id: "14",
    title: "Harry Potter and the Chamber of Secrets",
    author: "J.K. Rowling",
    image: "https://covers.openlibrary.org/b/id/14630506-L.jpg",
    club: "Fantasy Lovers Club",
  },
  {
    _id: "15",
    title: "Harry Potter and the Prisoner of Azkaban",
    author: "J.K. Rowling",
    image: "https://m.media-amazon.com/images/I/A1D9WdGRYzL._SL1500_.jpg",
    club: "Fantasy Lovers Club",
  },
  {
    _id: "16",
    title: "Harry Potter and the Goblet of Fire",
    author: "J.K. Rowling",
    image: "https://m.media-amazon.com/images/I/81aTxTMB33L._SL1200_.jpg",
    club: "Fantasy Lovers Club",
  },
  {
    _id: "17",
    title: "Harry Potter and the Order of the Phoenix",
    author: "J.K. Rowling",
    image: "https://m.media-amazon.com/images/I/71pgI2ou5oL._SL1200_.jpg",
    club: "Fantasy Lovers Club",
  },
  {
    _id: "18",
    title: "Harry Potter and the Half-Blood Prince",
    author: "J.K. Rowling",
    image: "https://m.media-amazon.com/images/I/61sXBXmAWML._SL1000_.jpg",
    club: "Fantasy Lovers Club",
  },
  {
    _id: "19",
    title: "Harry Potter and the Deathly Hallows",
    author: "J.K. Rowling",
    image: "https://m.media-amazon.com/images/I/81fKAGD2LyL._SL1500_.jpg",
    club: "Fantasy Lovers Club",
  },
  {
    _id: "20",
    title: "The Adventures of Sherlock Holmes",
    author: "Arthur Conan Doyle",
    image: "https://m.media-amazon.com/images/I/61W8vD3LBRL._SL1333_.jpg",
    club: "Mystery & Thriller Club",
  },
];

const groupBooksByClub = (books) => {
  return books.reduce((groups, book) => {
    const club = book.club;
    if (!groups[club]) {
      groups[club] = [];
    }
    groups[club].push(book);
    return groups;
  }, {});
};

const groupedBooks = groupBooksByClub(bookData);

const Bookshelf = () => {
  return (
    <Container maxW="container.md">
      <Flex direction="column" align="center" justify="center" minH="100vh">
        <Box w="100%" p={6} boxShadow="md" borderRadius="md" textAlign="center">
          <Heading as="h1" size="2xl" mb={6}>
            Bookshelf
          </Heading>
          {Object.keys(groupedBooks).map((club, index) => (
            <Box key={index} mb={8} w="100%">
              <Heading as="h2" size="lg" mb={4} textAlign="left">
                {club}
              </Heading>
              <SimpleGrid columns={[1, null, 2]} spacing={6}>
                {groupedBooks[club].map((book, idx) => (
                  <BookCard
                    key={idx}
                    title={book.title}
                    author={book.author}
                    image={book.image}
                    bookId={book._id}
                  />
                ))}
              </SimpleGrid>
            </Box>
          ))}
        </Box>
      </Flex>
    </Container>
  );
};

export default Bookshelf;
