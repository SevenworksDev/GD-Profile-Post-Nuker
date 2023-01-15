require('isomorphic-fetch');
const GD = require('gd.js');
const prompt = require('prompt-sync')();

const gd = new GD();

console.log("Profile Post Nuker by Sevenworks")
const unval = prompt("Username: ")
const pwval = prompt("Password: ")
const comval = prompt("Message: ")
console.clear()
console.log("Started the nuke! Check profile posts!")

gd.users.login({ username: unval, password: pwval })
  .then(lolpog => setInterval(() => lolpog.postAccountComment(comval), 1200));
