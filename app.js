// Requiring module
const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");
const pretty = require("pretty");

// Creating express object
const app = express();

// Handling GET request
app.get("/", (req, res) => {
  res.send("A simple Node App is " + "running on this server");
  res.end();
});

// Port Number
const PORT = process.env.PORT || 5000;

// Server Setup
app.listen(PORT, console.log(`Server started on port ${PORT}`));

const markup = `
  <ul class="fruits">
    <li class="fruits__mango"> Mango </li>
    <li class="fruits__apple"> Apple </li>
  </ul>
  `;

const $ = cheerio.load(markup);
// console.log(pretty($.html()));

const mango = $(".fruits__mango");
console.log(mango.html()); // Mango

console.log(mango.attr("class")); //fruits__apple

const ul = $("ul");
ul.append("<li>Banana</li>");
ul.prepend("<li>Pineapple</li>");
console.log(pretty($.html()));
