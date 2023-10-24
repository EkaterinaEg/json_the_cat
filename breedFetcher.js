const request = require("request");
const fs = require("fs");

const api = "https://api.thecatapi.com/v1/breeds/search?q=";
const argv = process.argv.slice(2);
// console.log(argv);

request(api + argv, (error, response, body) => {
  if (error) {
    console.error(`Request fails `, error.message);
    process.exit();
  }
  const data = JSON.parse(body);
  if (data.length === 0) {
    console.log(`This breed ${argv} is not found`);
  } else {
    console.log(data);
  }
});
