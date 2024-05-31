import { useState } from "react";
import { useMutation } from "@apollo/client";
import {
  Box,
  Button,
  Input,
  Textarea,
  FormLabel,
  Text,
} from "@chakra-ui/react";
import { ADD_REVIEW } from "../../utils/mutations"; // Corrected path

const CommentForm = ({ bookId, bookTitle }) => {
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState("");
  const [addReview, { error }] = useMutation(ADD_REVIEW);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      await addReview({
        variables: { bookId, reviewText, userId },
      });

      setReviewText("");
      setRating("");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Box as="form" onSubmit={handleFormSubmit} mt={4}>
      <FormLabel>Book: {bookTitle}</FormLabel>
      <Textarea
        placeholder="Leave a comment..."
        value={reviewText}
        onChange={(e) => setReviewText(e.target.value)}
        mb={4}
      />
      <Input
        placeholder="Rating"
        type="number"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        mb={4}
      />
      <Button colorScheme="teal" type="submit">
        Add Comment
      </Button>
      {error && <Text color="red.500">Error submitting comment.</Text>}
    </Box>
  );
};

export default CommentForm;
