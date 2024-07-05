package main

import (
	"backend/handlers"
	"backend/utils"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func main() {
	router := gin.Default()
	router.Use(cors.Default())

	connectString := "postgres://postgres:@localhost:5432/blog?sslmode=disable"
	utils.InitDB(connectString)
	defer utils.CloseDB()

	handlers.RegisterPostRoutes(router)

	router.Run(":8080")
}
