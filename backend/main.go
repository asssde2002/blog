package main

import (
	"backend/databases"
	"backend/handlers"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func main() {
	router := gin.Default()
	router.Use(cors.Default())

	connectString := "postgres://postgres:@localhost:5432/blog?sslmode=disable"
	databases.InitDB(connectString)
	defer databases.CloseDB()

	handlers.RegisterPostRoutes(router)

	router.Run(":8080")
}
