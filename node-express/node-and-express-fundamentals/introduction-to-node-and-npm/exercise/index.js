#!usr/bin/env node

const fetch = require('node-fetch');
const fs = require("fs");
const prompt = require('prompt');
const term = process.argv[2];
const url = `https://icanhazdadjoke.com/search?term=${term}`;
const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Accept-Charset': 'utf-8'
}


function jokeSearch() {
    return fetch(url, { method: "GET", headers: headers})
    .then(res => {
        return res.json()
    })
    .then((output) => {
        let result = output.results;
        let randomJoke = result[Math.floor(Math.random() * result.length)];

        console.log(randomJoke.joke);

        let saveJoke = fs.createWriteStream("jokes.txt", { flags: 'a' });
        saveJoke.write(randomJoke.joke);
        saveJoke.write('\n');
    })
    .catch(err => { throw err });
}

jokeSearch();

// let leaderboard = process.argv[2];
// if (leaderboard) {
//     fs.readFile("jokes.txt", function(error, data) {
//         if (error) {throw error}
//         let info = data.toString().split("\n").forEach(function(line, index, arr) {
//             if (index === arr.length - 1 && line === "") {return}
//             console.log(index + " " + line);
//         });
//     });
// }

