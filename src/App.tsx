import { Box, ChakraProvider, theme } from '@chakra-ui/react';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Columns } from './components/Columns';
import Dashboard from './components/Dashboards';
import Footer from './components/Footer';
import InsertColumnForm from './components/InsertColumnForm';
import InsertDashboard from './components/InsertDashboard';
import InsertItemForm from './components/InsertItemForm';
import LoginForm from './components/LoginForm';
import NavBar from './components/NavBar';
import { NavigateFunctionComponent } from './components/NavigateFunctionComponent';
import RegistrationForm from './components/RegistrationForm';
export interface SideBarI {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}
/*
 * TODO load user profile in local storage and
 *  - hide login/register buttons if user is logged in
 *  - show logout button if user is logged in
 */
export const App = () => {
  const [changedLocalStorage, setChangedLocalStorage] =
    useState<boolean>(false);

  const toggleChangedLocalStorage = () => {
    setChangedLocalStorage(!changedLocalStorage);
  };
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <NavigateFunctionComponent
          toggleChangedLocalStorage={toggleChangedLocalStorage}
        />
        <Box h="full">
          <NavBar
            toggleChangedLocalStorage={toggleChangedLocalStorage}
            changedLocalStorage={changedLocalStorage}
          />
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/" element={<Dashboard />} />
            <Route
              path="/register"
              element={
                <RegistrationForm
                  toggleChangedLocalStorage={toggleChangedLocalStorage}
                />
              }
            />
            <Route
              path="/login"
              element={
                <LoginForm
                  toggleChangedLocalStorage={toggleChangedLocalStorage}
                />
              }
            />
            <Route path="/board/:boardId" element={<Columns />} />
            <Route
              path="/new-item/:boardId/:columnId"
              element={<InsertItemForm />}
            />
            <Route path="/new-item/:columnId" element={<InsertItemForm />} />
            <Route
              path="/edit-item/boardid/:boardId/itemid/:itemId"
              element={<InsertItemForm />}
            />
            <Route
              path="/edit-column/:boardId"
              element={<InsertColumnForm />}
            />
            <Route path="/new-column/:boardId" element={<InsertColumnForm />} />
            <Route path="/new-dashboard" element={<InsertDashboard />} />
            <Route
              path="/edit-dashboard/:boardId"
              element={<InsertDashboard />}
            />
            <Route
              path="/edit-dashboard/:dashboardId"
              element={<InsertDashboard />}
            />
          </Routes>
          <Footer />
        </Box>
      </BrowserRouter>
    </ChakraProvider>
  );
};
