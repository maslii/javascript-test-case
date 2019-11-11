## Intro

Application for displaying a matrix filled with natural numbers, 
in counterclockwise descending order, 
excluding numbers with a specified digit.

## Requirements
* [Node.js and npm](https://nodejs.org/en/download/)
* [Web browser](https://www.google.com/chrome/)

## Installation

Use the [npm](https://www.npmjs.com) package manager to install dependencies and start a local webserver:

```bash
npm install
```

```bash
npm start
```

The application will be available through the link: [localhost:5000](http://localhost:5000)

## Usage

Application generates a set of numbers to be displayed within a matrix. 
Matrix's dimension is required parameter and needs to be specified on the start page, before pressing the "Start" button.
Number of columns and rows is equivalent and restricted by diapason from 1 to 1000.
    
Matrix is supposed to display each number with delay, step by step. 
Delay is an optional parameter and can be set by changing a URL hash. 
For example: [#speed=1000]() sets a 1000 ms delay.
The default value is 500 ms. 
