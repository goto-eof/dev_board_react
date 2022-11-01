import { Box, ChakraProvider, theme } from '@chakra-ui/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Boards from './components/Boards';
import Footer from './components/Footer';
import InsertColumnForm from './components/InsertBoardForm';
import InsertItemForm from './components/InsertItemForm';
import NavBar from './components/NavBar';

export interface SideBarI {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Box h="full">
          <NavBar />
          <Routes>
            <Route path="/board" element={<Boards />} />
            <Route path="/new-item/:boardId" element={<InsertItemForm />} />
            <Route
              path="/edit-item/boardid/:boardId/itemid/:itemId"
              element={<InsertItemForm />}
            />
            <Route path="/edit-board/:boardId" element={<InsertColumnForm />} />
            <Route path="/new-board" element={<InsertColumnForm />} />
          </Routes>
          <Footer />
        </Box>
      </BrowserRouter>
    </ChakraProvider>
  );
};
