package handlers

import (
	"backend/utils"
	"context"
	"net/http"
	"strconv"
	"time"

	"github.com/gin-gonic/gin"
)

type Post struct {
	ID        int       `json:"id"`
	Title     string    `json:"title"`
	Content   string    `json:"content"`
	CreatedAt time.Time `json:"created_at"`
}

func RegisterPostRoutes(router *gin.Engine) {
	router.GET("/posts", GetPosts)
	router.GET("/posts/:id", GetPost)
	router.POST("/posts", CreatePost)
	router.PUT("/posts/:id", UpdatePost)
	router.DELETE("/posts/:id", DeletePost)
}

func GetPosts(c *gin.Context) {
	posts, err := fetchAllPosts()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, posts)
}

func GetPost(c *gin.Context) {
	id, err := strconv.Atoi(c.Param("id"))
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid post ID"})
		return
	}

	post, err := fetchPost(id)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Post not found"})
		return
	}

	c.JSON(http.StatusOK, post)
}

func CreatePost(c *gin.Context) {
	var newPost Post
	if err := c.ShouldBindJSON(&newPost); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	if err := createPost(&newPost); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, newPost)
}

func UpdatePost(c *gin.Context) {
	id, err := strconv.Atoi(c.Param("id"))
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid post ID"})
		return
	}

	var updatedPost Post
	if err := c.ShouldBindJSON(&updatedPost); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	updatedPost.ID = id
	if err := updatePost(&updatedPost); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, updatedPost)
}

func DeletePost(c *gin.Context) {
	id, err := strconv.Atoi(c.Param("id"))
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid post ID"})
		return
	}

	if err := deletePost(id); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"message": "Post deleted"})
}

func fetchAllPosts() ([]Post, error) {
	rows, err := utils.DBPool.Query(context.Background(), "SELECT id, title, content, created_at FROM posts")
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var posts []Post
	for rows.Next() {
		var p Post
		if err := rows.Scan(&p.ID, &p.Title, &p.Content, &p.CreatedAt); err != nil {
			return nil, err
		}
		posts = append(posts, p)
	}
	return posts, nil
}

func fetchPost(id int) (*Post, error) {
	var p Post
	err := utils.DBPool.QueryRow(context.Background(), "SELECT id, title, content, created_at FROM posts WHERE id=$1", id).Scan(&p.ID, &p.Title, &p.Content, &p.CreatedAt)
	if err != nil {
		return nil, err
	}
	return &p, nil
}

func createPost(p *Post) error {
	err := utils.DBPool.QueryRow(context.Background(), "INSERT INTO posts (title, content) VALUES ($1, $2) RETURNING id, created_at", p.Title, p.Content).Scan(&p.ID, &p.CreatedAt)
	return err
}

func updatePost(p *Post) error {
	_, err := utils.DBPool.Exec(context.Background(), "UPDATE posts SET title=$1, content=$2 WHERE id=$3", p.Title, p.Content, p.ID)
	return err
}

func deletePost(id int) error {
	_, err := utils.DBPool.Exec(context.Background(), "DELETE FROM posts WHERE id=$1", id)
	return err
}
