import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";  
import Rooms from "./pages/Rooms";  
import SingleRoom from "./pages/SingleRoom";  
import ErrorPage from "./pages/Error";
import { RoomProvider } from "./context";  

function App() {
  return (
    <RoomProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/rooms/:slug" element={<SingleRoom />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </RoomProvider>
  );
}

export default App;
