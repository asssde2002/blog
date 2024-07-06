import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PostPage from "./pages/PostPage";
import PostPageDetail from "./pages/PostPageDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/posts/" element={<PostPage />} />
        <Route path="/posts/:id" element={<PostPageDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
