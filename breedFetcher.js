const request = require("request");

const api = "https://api.thecatapi.com/v1/breeds/search?q=";

const fetchBreedDescription = function(breedName, callback) {
  request(api + breedName, (error, response, body) => {
    if (error) {
      callback(error, null);
    }
    callback(null, body);
  });
};

module.exports = {
  fetchBreedDescription,
};
// const argv = process.argv[2];

// request(api + argv, (error, response, body) => {
//   if (error) {
//     console.error(`Request fails `, error.message);
//     process.exit();
//   }
//   const data = JSON.parse(body);
//   if (data.length === 0) {
//     console.log(`This breed ${argv} is not found`);
//   } else {
//     console.log(data[0].description);
//   }
// });
