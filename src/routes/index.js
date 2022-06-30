import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddBook from "../features/books/AddBook";
import EditBook from "../features/books/EditBook";
import BooksView from "../features/books/BooksView";
import Navbar from "../layout/Navbar";
import Error from "../pages/Error";
import Home from "../pages/Home";

const Index = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/show-books" element={<BooksView />} />
            <Route path="/add-books" element={<AddBook />} />
            <Route path="/edit-books" element={<EditBook />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
};

export default Index;
