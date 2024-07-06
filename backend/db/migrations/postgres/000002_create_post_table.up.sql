CREATE TABLE IF NOT EXISTS "post" (
    "id" SERIAL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "user_id" INT NOT NULL,
    "is_published" BOOLEAN NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    CONSTRAINT "fk_user" FOREIGN KEY("user_id") REFERENCES "user"("id")
);