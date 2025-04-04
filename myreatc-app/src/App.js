import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./component/Login.js";
import Navbar from "./component/Navbar.js";
import Home from "./component/Home.js";
import Dashboard from "./component/Dashboard.js";
import Signup from "./component/Signup.js";
import CreatePage from "./component/CreatePage.js";
import ViewPage from "./component/ViewPage.js";
import AllPages from "./component/AllPages.js";
import { useState, useEffect } from "react";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem("isLoggedIn") === "true";
  });

  const [pages, setPages] = useState(() => {
    return JSON.parse(localStorage.getItem("pages")) || [];
  });

  useEffect(() => {
    localStorage.setItem("isLoggedIn", isLoggedIn);
  }, [isLoggedIn]);

  useEffect(() => {
    localStorage.setItem("pages", JSON.stringify(pages));
  }, [pages]);

  const addPage = (page) => {
    setPages((prev) => [...prev, page]);
  };

  return (
    <BrowserRouter>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={
            isLoggedIn ? (
              <Navigate to="/dashboard" />
            ) : (
              <Login setIsLoggedIn={setIsLoggedIn} />
            )
          }
        />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/dashboard"
          element={
            isLoggedIn ? <Dashboard /> : <Navigate to="/login" />
          }
        />
        <Route
          path="/create-page"
          element={
            isLoggedIn ? (
              <CreatePage addPage={addPage} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route path="/pages/:id" element={<ViewPage pages={pages} />} />
        <Route path="/all-pages" element={<AllPages pages={pages} />} />
        <Route
          path="*"
          element={
            <div className="p-10 text-center text-xl">
              404 - Page Not Found
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
