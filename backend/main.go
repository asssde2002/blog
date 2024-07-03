package main

import (
	"backend/handlers"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func main() {
	router := gin.Default()
	router.Use(cors.Default())

	router.GET("/posts", handlers.GetPosts)
	router.GET("/posts/:id", handlers.GetPost)
	router.POST("/posts", handlers.CreatePost)
	router.PUT("/posts/:id", handlers.UpdatePost)
	router.DELETE("/posts/:id", handlers.DeletePost)

	router.Run(":8080")
}
