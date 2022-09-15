const inputDate = document.querySelector("#dateChoosen");
const btn = document.querySelector("#btn");
const output = document.querySelector("#output");

function checkPalindrome() {
  var dateSelected = inputDate.value;
  var dateConverted = dateSelected.replaceAll("-", "");
  //   console.log(dateConverted);
  var reversedString = reverseString(dateConverted);
  //   console.log(reversedString);
  return dateConverted === reverseString;
}

function reverseString(str) {
  var listOfcharacters = str.split("");
  var reverseListOfCharacters = listOfcharacters.reverse();
  var reversedStr = reverseListOfCharacters.join("");
  return reversedStr;
}

btn.addEventListener("click", checkPalindrome);
