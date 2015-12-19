var request = require("request");

request({
  uri: "http://www.readability.com/api/shortener/v1/urls/",
  method: "POST",
  url: "webschool.io"
}, function(error, response, body) {
  console.log(body);
});