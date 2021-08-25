# Belajar Prisma ORM

add .env file :
---
DATABASE_URL="mysql://username:password@localhost:port/db_name?schema=public"
---

### `GET`

- `/users`: Fetch a all users

- `/user/:id`: Fetch a single user by its `id`
  - Params:
    - `id: Int` : The id of the user

### `POST`

- `/user`: Create new user
  - Body:
    - `username: String` : The username of the user
    - `password: String` : The password of the user

- `/post`: Create new post
  - Body:
    - `subject: String` : The subject of the post
    - `note: String` : The note of the post
    - `userId: Int` : The userId of the post, related to user `id`

### `PUT`

- `/user/:id`: Update a single user by its `id`
  - Params:
    - `id: Int` : The id of the user
  - Body:
    - `username: String` : The username of the user
    - `password: String` : The password of the user

### `DELETE`

- `/user/:id`: Delete a single user by its `id`
  - Params:
    - `id: Int` : The id of the user
