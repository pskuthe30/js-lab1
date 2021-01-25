"use strict";
let myName = `Pallavi Kuthe`;
let age = 48;
let birthday = `May 30`;
let detroitGC = false;
let lifeEvents = [
  `I was born in Pune,India `,
  "I went to Pune University",
  `I love to travel`,
  "I am doing front end bootcamp",
];
if (detroitGC) {
  console.log(
    "My name is ${myName} and I am a student at Grand Circus in Detroit, Michigan.My "
  );
} else {
  console.log(
    `I am currently ${age} years old and my birthday is on ${birthday}.`
  );
}
for (let i = 0; i < lifeEvents.length; i++) {
  console.log(lifeEvents[i]);
}
let counter = 0;

while (true) {
  let randomNumber = Math.floor(Math.random() * 10 + 1);
  console.log(`${randomNumber}`);
  if (randomNumber !== 5) {
    counter++;
    console.log(`${randomNumber} is !==5`);
  } else {
    counter++;
    console.log(`${randomNumber} is == 5`);
  }
  break;
}
