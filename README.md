## Notes-Aggregator

## Purpose

Tried to solve the problem of getting proper notes during exams.

## Tech Stack

1. React
2. Redux
3. Node.js 

## Problems

Too many notes (literally)

#### Steps to reproduce 

1. Clone.

2. You should have node.js, npm and mongodb pre-installed

3. In the project's directory, run the following command:

```
npm install
```

4. Then run this command to start mongoDB

```
mongod --port 27017 --dbpath=./data
```

5. Open another window in terminal and run

```
./node-modules/.bin/babel-node loadData.js
npm run dev
```

6. Open another window in terminal and run

```
npm start
```

7. Then Visit

```
http://0.0.0.0:3000
```
