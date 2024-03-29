BEGIN;

DROP TABLE IF EXISTS "category", "product";

CREATE TABLE "category" (
  "id" INTEGER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  "slug" TEXT NOT NULL,
  "title" TEXT NOT NULL
);

CREATE TABLE "product" (
  "id" INTEGER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  "slug" TEXT NOT NULL,
  "title" TEXT NOT NULL,
  "description" TEXT,
  "grade" SMALLINT,
  "category_id" INTEGER REFERENCES "category"("id")
);

COMMIT;