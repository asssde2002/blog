# Migration File

* Install `goloag-migration` packge
    * linux

        `curl -sSL https://git.io/migrate | bash
`
    * mac

        `brew install golang-migrate`


* Create migration file

    `migrate create -ext sql -dir db/migrations/postgres -seq create_posts_table`

* Migrate

    `migrate -path db/migrations/postgres -database "postgres://postgres:@localhost:5432/blog?sslmode=disable" up`


* Rollback

    `migrate -path db/migrations/postgres -database "postgres://postgres:@localhost:5432/blog?sslmode=disable" down`

* Fix `dirty database version 1` error

    `migrate -path db/migrations/postgres -database "postgres://postgres:@localhost:5432/blog?sslmode=disable" force 1`