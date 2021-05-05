// Complete the variadricAverage function so that it can take any number
// of arguments and calculate their average.
//
// Bonus Test: Edit the 'average' function to use the 'variadricAverage'.

function average(numbers) {
  return variadricAverage.apply(null, numbers);
}
console.log("The average is: " + average([2, 5, 6, 2, 45, 3, 23, 14]));

function variadricAverage() {
  // YOUR CODE HERE
  for (var i = 0, sum = 0, n = arguments.length; i < n; i++) {
    sum += arguments[i];
  }
  return sum / n;
}
console.log("The average is: " + variadricAverage(2, 5, 6, 2, 45, 3, 23, 14));

// jawaban
/* QUESTION 1.
 *******************************/
function executeQ1() {
  let element = document.querySelector("#my-name");
  element.innerHTML = "Royan Husen Fatih";
}

/********************************
 * QUESTION 2.
 *******************************/

function executeQ2() {
  // Answer.
  var listItems = ["Mangga", "Pisang", "Rambutan", "Durian"];
  var output, i;

  output = "<ol>";
  for (i = 0; i < listItems.length; i++) {
    output += "<li>" + listItems[i] + "</li>";
  }
  output += "</ol>";
  document.getElementById("q2-list").innerHTML = output;
}

/********************************
 * QUESTION 3.
 *******************************/
class My {
  constructor(name1, name2) {
    this.name1 = name1;
    this.name2 = name2;
  }
}

function executeQ3() {
  myName = new My("Scott", "Matt");
  document.getElementById("q3-list").innerHTML =
    myName.name1 + " " + myName.name2;
}

/********************************
 * QUESTION 4.
 * jawaban nomor 4
 *******************************/

function executeQ4(key, value) {
  fetch(
    "https://gist.githubusercontent.com/awadhawan18/54592d9ec5e7be1b39013cdd7e78dae4/raw/54a90fe99b8e821e273e1997f356d04308bdb232/Random-images.json"
  )
    .then(function (response) {
      return response.json();
    })
    .then((response) => {
      console.log(response);
      data_json = JSON.stringify(response);
      // alert(data_json);
      var result = document.getElementById("q4-answer");
      result.innerHTML = data_json;
    });
}
