# NoSQL - Social Media API (Back-end only)

## Description
MongoDB is a popular choice for many social networks due to its speed with large amounts of data and flexibility with unstructured data. For a practice challenge, I used several of the technologies that social networking platforms use in their full-stack applications. Because the foundation of these applications is data, it’s important that you understand how to build and structure the API first.

My challenge was to build an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. I used Express.js for routing, a MongoDB database, and the Mongoose ODM.

No seed data is provided, so I needed to create my own data using Insomnia after I created my API.

## Table of Contents
  1) [Technologies](#technologies-used)
  2) [Challenges](#challenges)
  3) [Future Implementations](#future-implementations)
  4) [User Story](#user-story)
  5) [Demonstration](#demonstration)
  6) [Installation](#installation)
  7) [License](#license)

## Technologies
* [nodejs](https://nodejs.org/en/) - to run the server in the terminal
* [MongoDB](https://www.mongodb.com/) - database management
* [dotenv](https://www.npmjs.com/package/dotenv) - to hide sensitive user data
* [mongoose](https://mongoosejs.com/docs/) - Database modeling/queries/etc
* [Postman](https://www.postman.com/) - In-app CRUD operations on API requests
* [moment](https://momentjs.com/) - utility for date/time formatting

## Challenges
* Learning MongoDB / Mongoose
* Syncing up controllers and routers
* Best practices for readability

## Future Implementation
* Front-End implementation
* Emoji-based reactions

## User Story
```md
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```

## Demonstration
[Here is a video link of the app in action]()

## Installation
* For installation onto local machine, clone provided repository.
* Use `npm init` to initalize node package manager
* Use `npm install` or `npm i` to install dependencies
* For development purposes, use `npm run dev`, found in the scripts to work with nodemon.


## License
MIT © Krenbot
