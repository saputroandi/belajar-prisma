const express = require('express');
const { PrismaClient } = require('@prisma/client');
const multer = require('multer');

const app = express();
const prisma = new PrismaClient();

app.post('/user', multer().none(), async (req, res, next) => {
  const { username, password } = req.body;

  const user = await prisma.user.create({
    data: {
      username: username,
      password: password,
    },
  });

  return res.json(user);
});

app.post('/post', multer().none(), async (req, res, next) => {
  const { subject, note, userId } = req.body;

  const post = await prisma.post.create({
    data: {
      subject: subject,
      note: note,
      userId: Number(userId),
    },
  });

  return res.json(post);
});

app.get('/user/:id', multer().none(), async (req, res, next) => {
  const id = req.params.id;

  const user = await prisma.user.findUnique({
    where: {
      id: Number(id),
    },
  });

  return res.json(user);
});

app.get('/users', async (req, res, next) => {
  const users = await prisma.user.findMany({
    include: {
      posts: true,
    },
  });

  return res.json(users);
});

app.put('/user/:id', multer().none(), async (req, res, next) => {
  const id = req.params.id;
  const { username, password } = req.body;

  const user = await prisma.user.update({
    where: {
      id: Number(id),
    },
    data: {
      username: username,
      password: password,
    },
  });

  return res.json(user);
});

app.delete('/user/:id', async (req, res, next) => {
  const id = req.params.id;

  const user = await prisma.user.delete({
    where: {
      id: Number(id),
    },
  });

  return res.json(user);
});

app.listen(3000, () => {
  console.log('server running on port 3000');
});
