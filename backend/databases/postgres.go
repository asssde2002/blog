package databases

import (
	"context"
	"log"

	"github.com/jackc/pgx/v5/pgxpool"
)

var DBPool *pgxpool.Pool

func InitDB(connectString string) {
	config, err := pgxpool.ParseConfig(connectString)
	if err != nil {
		log.Fatalf("Unable to connect to database: %v", err)
	}

	DBPool, err = pgxpool.NewWithConfig(context.Background(), config)
	if err != nil {
		log.Fatalf("Unable to connect to database: %v", err)
	}
}

func CloseDB() {
	DBPool.Close()
}
