import React, { useEffect, useState } from "react";
import config from "../config";
import { Container, Grid, Card, CardContent, Typography } from "@mui/material";

function HomePage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`${config.API_BASE_URL}/posts`)
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);

  return (
    <div className="bg-zinc-300 h-screen w-screen flex flex-col">
      <div className="bg-blue-300 h-[12.5%]">
        Arthur Universe
        <div>test</div>
      </div>

      <div className="bg-red-900 h-[12.5%] w-2/3"></div>
      <div className="bg-yellow-900 h-[75%] w-2/3"></div>
    </div>
  );
}

export default HomePage;
