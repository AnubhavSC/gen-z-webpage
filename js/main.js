
//For the A
var div = document.getElementById("color-animation");
var colors = ['#ff4d00', '#FFFF00', '#10f1ff', '#adff00']; 

function getRandomColor() {
    var randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}

function changeColorA(){
  div.style.color = getRandomColor();
}

setInterval(changeColorA, 1000);

//For the two
var span = document.getElementById("color-animation2");
var color = ['#ff4d00', '#FFFF00', '#10f1ff', '#adff00']; 

function RandomColor() {
    var randomIndex = Math.floor(Math.random() * color.length);
    return color[randomIndex];
}

function changeColorB(){
    span.style.color = RandomColor();
}

setInterval(changeColorB, 1000);

//Text animation 
const textContainer = document.getElementById("text-container");
const texts = ["a Web Developer!", "a Student!", "a Ethical hacker!", "a "];
let currentIndex = 0;

function typeText(text, callback) {
  let index = 0;
  const typingSpeed = 100; 

  function type() {
    if (index < text.length) {
      textContainer.textContent = text.slice(0, index + 1);
      index++;
      setTimeout(type, typingSpeed);
    } else {
      callback();
    }
  }

  type();
}

function changeText() {
  textContainer.classList.add("scale-0");
  typeText(texts[currentIndex], () => {
    textContainer.classList.remove("scale-0");
    currentIndex = (currentIndex + 1) % texts.length;
  });
}

setInterval(changeText, 3000); 

//mobile nav bar
var button = document.getElementById("button");
var navigation = document.getElementById("navigation"); 

button.addEventListener("click", function() {
  if (navigation.classList.contains("hidden")) {
      navigation.classList.remove("hidden");
      navigation.classList.add("block");
  } else {
      navigation.classList.remove("block");
      navigation.classList.add("hidden");
  }
});

  
  