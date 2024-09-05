const fs = require("fs");
const https = require("https");

var a = 12233;
var b = 4355045;

function Multiply(a, b) {
  return a * b;
}

var result = Multiply(a, b);

console.log("result", result);

setTimeout(() => {
  console.log("settime out called");
}, 1000);

https.get("https://dummy.restapiexample.com/api/v1/employees", (res) => {
  console.log("dummy API response");
});
