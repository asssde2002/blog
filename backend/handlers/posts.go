package handlers

import (
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"
)

type Post struct {
	ID        int    `json:"id"`
	Title     string `json:"title"`
	Content   string `json:"content"`
	CreatedAt string `json:"created_at"`
}

var posts []Post = []Post{}

func GetPosts(c *gin.Context) {
	c.JSON(http.StatusOK, posts)
}

func GetPost(c *gin.Context) {
	id, _ := strconv.Atoi(c.Param("id"))
	for _, p := range posts {
		if p.ID == id {
			c.JSON(http.StatusOK, p)
			return
		}
	}
	c.JSON(http.StatusNotFound, gin.H{"error": "Post not found"})
}

func CreatePost(c *gin.Context) {
	var newPost Post
	if err := c.ShouldBindBodyWithJSON(&newPost); err == nil {
		newPost.ID = len(posts) + 1
		posts = append(posts, newPost)
		c.JSON(http.StatusOK, newPost)
	} else {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
	}
}

func UpdatePost(c *gin.Context) {
	id, _ := strconv.Atoi(c.Param("id"))
	var updatePost Post
	if err := c.ShouldBindBodyWithJSON(&updatePost); err == nil {
		for i, p := range posts {
			if p.ID == id {
				posts[i] = updatePost
				c.JSON(http.StatusOK, updatePost)
				return
			}
		}
		c.JSON(http.StatusNotFound, gin.H{"error": "Post not found"})
	} else {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
	}
}

func DeletePost(c *gin.Context) {
	id, _ := strconv.Atoi(c.Param("id"))
	for i, p := range posts {
		if p.ID == id {
			posts = append(posts[:i], posts[i+1:]...)
			c.JSON(http.StatusOK, gin.H{"message": "Post deleted"})
			return
		}
	}
	c.JSON(http.StatusNotFound, gin.H{"error": "Post not found"})
}
