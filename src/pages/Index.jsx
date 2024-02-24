import React, { useState } from "react";
import { ChakraProvider, Box, VStack, Heading, Input, Button, SimpleGrid, Text, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, FormControl, FormLabel, Textarea, Select } from "@chakra-ui/react";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";

// Dummy data for quotes
const initialQuotes = [
  {
    id: 1,
    text: "The only impossible journey is the one you never begin.",
    author: "Tony Robbins",
    category: "Motivation",
  },
  {
    id: 2,
    text: "Life is what happens when you’re busy making other plans.",
    author: "John Lennon",
    category: "Life",
  },
];

const Index = () => {
  const [quotes, setQuotes] = useState(initialQuotes);
  const [selectedQuote, setSelectedQuote] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [newQuote, setNewQuote] = useState({
    text: "",
    author: "",
    category: "",
  });

  const handleQuoteChange = (e) => {
    setNewQuote({ ...newQuote, [e.target.name]: e.target.value });
  };

  const addQuote = () => {
    setQuotes([
      ...quotes,
      {
        ...newQuote,
        id: quotes.length ? Math.max(...quotes.map((q) => q.id)) + 1 : 1,
      },
    ]);
    setNewQuote({ text: "", author: "", category: "" });
    onClose();
  };

  const editQuote = () => {
    setQuotes(quotes.map((quote) => (quote.id === selectedQuote.id ? { ...selectedQuote } : quote)));
    setSelectedQuote(null);
    onClose();
  };

  const deleteQuote = (id) => {
    setQuotes(quotes.filter((quote) => quote.id !== id));
  };

  const filteredQuotes = searchTerm ? quotes.filter((quote) => quote.text.toLowerCase().includes(searchTerm.toLowerCase()) || quote.author.toLowerCase().includes(searchTerm.toLowerCase())) : quotes;

  return (
    <ChakraProvider>
      <Box p={8}>
        <VStack spacing={4}>
          <Heading>Quotes Manager</Heading>
          <Input placeholder="Search for quotes..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
          <Button leftIcon={<FaPlus />} onClick={onOpen}>
            Add Quote
          </Button>
          <SimpleGrid columns={3} spacing={10}>
            {filteredQuotes.map((quote) => (
              <Box key={quote.id} p={5} shadow="md" borderWidth="1px">
                <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short">
                  {quote.text}
                </Text>
                <Text mt={2}>- {quote.author}</Text>
                <Text mt={2}>Category: {quote.category}</Text>
                <Button
                  mt={2}
                  leftIcon={<FaEdit />}
                  onClick={() => {
                    setSelectedQuote(quote);
                    onOpen();
                  }}
                >
                  Edit
                </Button>
                <Button mt={2} leftIcon={<FaTrash />} onClick={() => deleteQuote(quote.id)}>
                  Delete
                </Button>
              </Box>
            ))}
          </SimpleGrid>

          {/* Add/Edit Quote Modal */}
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>{selectedQuote ? "Edit Quote" : "Add Quote"}</ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={6}>
                <FormControl>
                  <FormLabel>Quote Text</FormLabel>
                  <Textarea
                    placeholder="Enter quote"
                    name="text"
                    value={selectedQuote ? selectedQuote.text : newQuote.text}
                    onChange={(e) => {
                      selectedQuote ? setSelectedQuote({ ...selectedQuote, text: e.target.value }) : handleQuoteChange(e);
                    }}
                  />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Author</FormLabel>
                  <Input
                    placeholder="Enter author's name"
                    name="author"
                    value={selectedQuote ? selectedQuote.author : newQuote.author}
                    onChange={(e) => {
                      selectedQuote ? setSelectedQuote({ ...selectedQuote, author: e.target.value }) : handleQuoteChange(e);
                    }}
                  />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Category</FormLabel>
                  <Select
                    placeholder="Select category"
                    name="category"
                    value={selectedQuote ? selectedQuote.category : newQuote.category}
                    onChange={(e) => {
                      selectedQuote ? setSelectedQuote({ ...selectedQuote, category: e.target.value }) : handleQuoteChange(e);
                    }}
                  >
                    <option value="Motivation">Motivation</option>
                    <option value="Life">Life</option>
                    <option value="Happiness">Happiness</option>
                  </Select>
                </FormControl>
              </ModalBody>

              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={selectedQuote ? editQuote : addQuote}>
                  {selectedQuote ? "Update" : "Save"}
                </Button>
                <Button onClick={onClose}>Cancel</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </VStack>
      </Box>
    </ChakraProvider>
  );
};

export default Index;
