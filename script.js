//Function with no parameters
var startMyDay = function () {
  console.log(`Time for coffee and a shower!`);
};
startMyDay(); //Time for coffee and a shower!

//Function with 1 parameter
var favoriteCookie = function (cookie) {
  console.log(`My favorite cookie is ${cookie}.`);
};
favoriteCookie("gingersnap"); //My favorite cookie is gingersnap.

//Function with 2 parameters
var introduce = function (name, occupation) {
  return `Hello, my name is ${name} and I work as a ${occupation}.`;
};
console.log(introduce("Maureen", "Seamstress"));
console.log(introduce("Kevin", "Customer Service Tech Support Manager"));

//Function to capture input
var hydrationFeedback = function () {
  var numGlasses = Number(
    prompt("How many glasses of water did you have today?")
  );
  if (numGlasses >= 8) {
    console.log("Way to stay hydrated!");
  } else if (numGlasses < 8) {
    console.log("Not bad, not bad. Let's try for a bit more tomorrow!");
  }
};
hydrationFeedback();
