const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const port = 3330;
const app = express();
const token = "rEadOnly-Th1s*1s*mY*7oken";

let nextId = 6;

let friends = [
  {
    id: 1,
    name: "Jack",
    age: 27,
    email: "jacky@mail.com"
  },
  {
    id: 2,
    name: "Mary",
    age: 34,
    email: "mary@mail.com"
  },
  {
    id: 3,
    name: "Gina",
    age: 29,
    email: "gina@mail.com"
  },
  {
    id: 4,
    name: "John",
    age: 32,
    email: "johnny_dep@mail.com"
  },
  {
    id: 5,
    name: "Fin",
    age: 24,
    email: "flinstone@mail.com"
  }
];

app.use(bodyParser.json());

app.use(cors());

function authenticator(req, res, next) {
  const { authorization } = req.headers;
  if (authorization === token) {
    next();
  } else {
    res.status(403).json({ error: "Log in to access this." });
  }
}

app.post("/api/login", (req, res) => {
  const { username, password } = req.body;
  if (username === "Jack" && password === "jackie1pirate") {
    req.loggedIn = true;
    res.status(200).json({
      payload: token
    });
  } else {
    res.status(403).json({ error: "Username or password is not correct." });
  }
});

app.get("/api/friends", authenticator, (req, res) => {
  setTimeout(() => {
    res.send(friends);
  }, 1000);
});

app.get("/api/friends/:id", authenticator, (req, res) => {
  const friend = friends.find(f => f.id == req.params.id);

  if (friend) {
    res.status(200).json(friend);
  } else {
    res.status(404).send({ msg: "Friend is not on the list." });
  }
});

app.post("/api/friends", authenticator, (req, res) => {
  const friend = { id: getNextId(), ...req.body };

  friends = [...friends, friend];

  res.send(friends);
});

app.put("/api/friends/:id", authenticator, (req, res) => {
  const { id } = req.params;

  const friendIndex = friends.findIndex(f => f.id == id);

  if (friendIndex > -1) {
    const friend = { ...friends[friendIndex], ...req.body };

    friends = [
      ...friends.slice(0, friendIndex),
      friend,
      ...friends.slice(friendIndex + 1)
    ];
    res.send(friends);
  } else {
    res.status(404).send({ msg: "Friend is not on the list." });
  }
});

app.delete("/api/friends/:id", authenticator, (req, res) => {
  const { id } = req.params;

  friends = friends.filter(f => f.id !== Number(id));

  res.send(friends);
});

function getNextId() {
  return nextId++;
}

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
