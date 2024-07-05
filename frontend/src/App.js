import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import PostPage from "./components/PostPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact component={HomePage} />
        <Route path="/posts/:id" component={PostPage} />
      </Routes>
    </Router>
  );
}

export default App;
