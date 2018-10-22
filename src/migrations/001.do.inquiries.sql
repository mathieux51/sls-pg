CREATE TABLE IF NOT EXISTS "books" (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  paragraph TEXT NOT NULL
);
