import React, { useEffect, useState } from "react";
import config from "../config";
import { Link } from "react-router-dom";

import { Container, Grid, Card, CardContent, Typography } from "@mui/material";

function PostPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`${config.API_BASE_URL}/posts`)
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Posts
      </Typography>
      <Grid container spacing={4}>
        {posts.map((post) => (
          <Grid item key={post.id} xs={12} sm={6} md={7}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="h2">
                  <Link to={`/posts/${post.id}`}>{post.title}</Link>
                </Typography>
                <Typography>{post.content.substring(0, 100)}...</Typography>
              </CardContent>
              <CardContent></CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default PostPage;
