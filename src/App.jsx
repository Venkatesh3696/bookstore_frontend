import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateBooks from "./pages/CreateBooks";
import DeleteBook from "./pages/DeleteBook";
import EditBook from "./pages/EditBook";
import ShowBook from "./pages/ShowBook";

import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/books/create" element={<CreateBooks />} />
        <Route exact path="/books/details/:id" element={<ShowBook />} />
        <Route exact path="/books/edit/:id" element={<EditBook />} />
        <Route exact path="/books/deleet/:id" element={<DeleteBook />} />
      </Routes>
    </>
  );
}

export default App;
