/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

const pronoun = ["the", "our", "their", "mine"];
const adj = ["great", "big", "small", "bored"];
const noun = ["jogger", "racoon", "kangooro", "turtle"];

const domain = [".com", ".net", ".org"];

for (let i = 0; i < pronoun.length; i++) {
  for (let o = 0; o < adj.length; o++) {
    for (let p = 0; p < noun.length; p++) {
      for (let d = 0; d < domain.length; d++)
        console.log(pronoun[i] + "" + adj[o] + "" + noun[p] + "" + domain[d]);
    }
  }
}
