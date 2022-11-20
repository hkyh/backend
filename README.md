# Giraffe Leo


> ### Giraffe Leo Backend repo for HackYeah22 Hackathon


# Getting started

To get the Node server running locally:

- Clone this repo
- `yarn` to install all required dependencies
- `yarn start` to start the local server

Alternately, to quickly try out this repo in the cloud, you can check it out here: [https://hkyh.herokuapp.com/game/](https://hkyh.herokuapp.com/game/)

# Code Overview

## Dependencies

- [express](https://github.com/expressjs/express) - The server for handling and routing HTTP requests
- [uuid](https://github.com/uuidjs/uuid#readme) - Library for generating unique ids


## Application Structure

- `index.ts` - The entry point to the application. This file defines the express server and connects it with the game routes.
- `utils/` - All of the smaller tools reused across the app
- `routes/` - Routes definitions for the app
- `types/` - Type for the object models
- `game/` - Root game logic
- `consts/` - Constant variables that are used in the app
- `controller/` - Controllers with all of the functions that can be executed in the app
- `jsonBase/` - Local database as a JSON files
- `services/` - Services that are used inside the controllers

## Routes

-  GET `game/state/` - Current state of the game
-  POST `game/requestPlayer` - Initialization of the player
REQUEST BODY

```
{
    "playerType": "playerB" // or "playerA"
}
```

- POST `game/movePlayer/` - Player turn request
REQUEST BODY

```
{
    "playerType": "playerA", // or "playerB"
    "playerId": "f87fe2b8-5618-4eb8-aedc-48e58358fd83", // uuid for the given player
    "risk": 0, // 0 - 100
    "hideout": 0, // 0 - 100
    "oasis": 0 // 0 - 100
}
```
- POST `game/restart` - Restarts the game after the end of the session 
- POST `game/hardStart` - hard restart of the game in case one of the players lose connection
