/*
let earlyRegistered = true;
let runnerAge = 20;
let runnerNumber;

if (runnerAge > 18 && earlyRegistered) {
  runnerNumber = (Math.floor(Math.random() * 1001) + 1000);
  console.log(`Your race starts at 9:30 am and your number is: ${runnerNumber}`);
} else if (runnerAge > 18 && earlyRegistered === false) {
  runnerNumber = (Math.floor(Math.random() * 999) + 1);
  console.log(`Your race starts at 11:00 am and your number is: ${runnerNumber}`);
} else if (runnerAge < 18) {
  runnerNumber = (Math.floor(Math.random() * 999) + 1);
  console.log(`Your race starts at 12:30 pm and your number is: ${runnerNumber}`);
} else {
  console.log(`You are ${runnerAge} years old, go to a registration desk to get more info.`)
}*/

let earlyRegistered;
let runnerAge;
let runnerNumber;

function runnerInfo(runnerAge, earlyRegistered) {
  if (runnerAge > 18 && earlyRegistered) {
    runnerNumber = (Math.floor(Math.random() * 1001) + 1000);
    console.log(`Your race starts at 9:30 am and your number is: ${runnerNumber}`);
  } else if (runnerAge > 18 && earlyRegistered === false) {
    runnerNumber = (Math.floor(Math.random() * 999) + 1);
    console.log(`Your race starts at 11:00 am and your number is: ${runnerNumber}`);
  } else if (runnerAge < 18) {
    runnerNumber = (Math.floor(Math.random() * 999) + 1);
    console.log(`Your race starts at 12:30 pm and your number is: ${runnerNumber}`);
  } else {
    console.log(`You are ${runnerAge} years old, go to a registration desk to get more info.`)
  }
}

runnerInfo(20, true);
runnerInfo(20, false);
runnerInfo(17, true);
runnerInfo(17, false);
runnerInfo(18, false);
runnerInfo(18, true);