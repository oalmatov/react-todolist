# react-todolist

TodoList made with React. Demonstrates knowledge of useState, useReducer, and
useContext hooks.

## Tools Used

-   Tailwind
-   React

## Software Requirements:

-   [Docker Desktop](https://docs.docker.com/get-docker/)

Alternatively you can install docker by running these commands:

```
sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
```

```
sudo chmod a+x /usr/local/bin/docker-compose
```

## How to run app:

If it's your first time building run this:

```
sudo docker-compose up -d --build
```

The initial build takes a long time (~30s). Don't be alarmed.

To raise the server run this:

```
sudo docker-compose up -d
```

To drop the server run this:

```
sudo docker-compose down
```

The app will run on http://localhost:3000/
