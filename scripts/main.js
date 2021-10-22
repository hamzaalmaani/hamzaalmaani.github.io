let myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/photo1.jpg") {
    myImage.setAttribute("src", "images/photo3.jpg");
  } else {
    myImage.setAttribute("src", "images/photo1.jpg");
  }
};
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
  let myName = prompt("Enter one of this:1-My Sweet Heart 2-My Soul");
  if (!myName) setUserName();
  else {
    localStorage.setItem("name", myName);
    myHeading.textContent = myName + " Rahaf, ";
  }
}
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  let storedName = localStorage.getItem("name");
  myHeading.textContent = "hi, " + storedName;
}
myButton.onclick = function () {
  setUserName();
};
