const author = document.querySelector("#author")
const calculation = document.querySelector("#calculation")
const btn_toggle = document.querySelector("#toggle");
const length = document.getElementById('length')
const color = document.querySelector('#color')
const text = document.querySelector('#text')

// define more constants and variables here

btn_toggle.onclick = () => {
  // your code here
}
console.log(text.value)

// more codes for Search and Reset buttons here
btn_search.onclick = () => {
  var l = length.value;
  console.log(text.value)

  var string = "text to split";
  string = string.split(" ");
  var stringArray = new Array();
  for (var i = 0; i < string.length; i++) {
    stringArray.push(string[i]);
    if (i != string.length - 1) {
      stringArray.push(" ");
    }
  }

}