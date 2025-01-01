var redBox = document.getElementById("red")
var blueBox = document.getElementById("blue")
var greenBox = document.getElementById("green")
var yellowBox = document.getElementById("yellow")
var purpleBox = document.getElementById("purple")
var orangeBox = document.getElementById("orange")

var question = document.getElementById("question")
var typeText = document.getElementById("type")

var scoreText = document.getElementById("score")

var startBtn = document.getElementById("start")
var main = document.getElementById("main")

var timerAnimation = document.getElementById("timer")

var red,blue,green,yellow,purple,orange; 


var currentQuestion;
var typeOfQuestion;

var hScore = document.getElementById("hScore")
var highScore = 0;

var score = 0;

var timer = 20;
var percent = 100;




startBtn.addEventListener("click",()=>{
  main.style.display = "none"
  resetColor()
  questionGenerator()
  runstimer()
})


function runstimer()
{
  var printTimer = setInterval(()=>{
  timerAnimation.style.width = `${percent}%`
  percent -= .3;
  
  if(percent <= 20)
  {
    timerAnimation.classList.remove("bg-warning");
    timerAnimation.classList.add("bg-danger");
  }
  else if (percent <= 40)
  {
    timerAnimation.classList.remove("bg-success");
    timerAnimation.classList.add("bg-warning");
  }
  
  
  if(percent <= -1)
  {
    var bar = document.getElementById("bar")
    bar.style.display = "none";
    percent = 100;
    clearInterval(printTimer)
    setHighscore(score);
    main.style.display = "block"
    score = 0;
    scoreText.innerHTML = score;
    setTimeout(()=>{
    bar.style.display = "block";
    },1000)
  }
  },100)
}



function setHighscore(score)
{
  if(score > highScore)
  {
    hScore.innerHTML = score;
  }
}

function questionGenerator()
{
  let c1 = ["red","blue","green"];
  let c2 = ["yellow","purple","orange"]
  let colors = [...c1, ...c2]
  let textNum = randomNum(1,6);
  let colorNum = randomNum(1,6);
  let text = setQuestion(textNum, ...colors)
  let color = setQuestion(colorNum, ...colors)
  
  printQuestion(text,color)
  
  let type = randomNum(1,2);
  
  setType(type)
  setCurrentQuestion(text,color)
  
  question.style.backgroundColor = "white"
  setTimeout(()=>{
    question.style.backgroundColor = "whitesmoke"
  },380)
  
}




function printQuestion(text,color)
{
  question.innerHTML = text;
  question.style.color = color;
}




function setType(type)
{
  if( type == 1) typeOfQuestion = "text";
  else typeOfQuestion = "color";
  typeText.innerHTML = typeOfQuestion;
}





function setCurrentQuestion(text,color)
{
  if(typeOfQuestion == "text")
  {
    currentQuestion = text;
  }
  else if(typeOfQuestion == "color")
  {
    currentQuestion = color;
  }
}




function setQuestion(num, ...parameter)
{
  switch(num)
  {
    case 1: return parameter[0]; break;
    case 2: return parameter[1]; break
    case 3: return parameter[2]; break;
    case 4: return parameter[3]; break;
    case 5: return parameter[4]; break
    case 6: return parameter[5]; break;
  }
}




function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}





redBox.addEventListener("click",()=>{
  let colors = ["orangered","red","darkred"]
  let changeColor = clickCheck(red, ...colors);
  
  red++;
  redBox.style.backgroundColor = changeColor;
  
  if(red >= 8)
  {
    checkIfCorrect("red");
  }
 
})



blueBox.addEventListener("click",()=>{
  let colors = ["dodgerblue","blue","darkblue"]
  let changeColor = clickCheck(blue, ...colors);
  
  blue++;
  blueBox.style.backgroundColor = changeColor;
  
  if(blue >= 8)
  {
    checkIfCorrect("blue");
  }
})



greenBox.addEventListener("click",()=>{
  
  let colors = ["limegreen","green","darkgreen"]
  let changeColor = clickCheck(green, ...colors);
 
  green++;
  greenBox.style.backgroundColor = changeColor;
  
  if (green >= 8)
  {
   checkIfCorrect("green");
  }
})

yellowBox.addEventListener("click",()=>{
  
  let colors = ["#F6E96B","#F9E400","#F4CE14"]
  let changeColor = clickCheck(yellow, ...colors);
 
  yellow++;
  yellowBox.style.backgroundColor = changeColor;
  
  if (yellow >= 8)
  {
   checkIfCorrect("yellow");
  }
})




purpleBox.addEventListener("click",()=>{
  
  let colors = ["#AD49E1","#7A1CAC","#850F8D"]
  let changeColor = clickCheck(purple, ...colors);
 
  purple++;
  purpleBox.style.backgroundColor = changeColor;
  
  if (purple >= 8)
  {
   checkIfCorrect("purple");
  }
})




orangeBox.addEventListener("click",()=>{
  
  let colors = ["#FF7F3E","#FF8F00","#DC5F00"]
  let changeColor = clickCheck(orange, ...colors);
 
  orange++;
  orangeBox.style.backgroundColor = changeColor;
  
  if (orange >= 8)
  {
   checkIfCorrect("orange");
  }
})







function clickCheck(color, ...colors)
{
   switch(color)
  {
    case 2: return  colors[0];   break;
    case 4: return  colors[1];   break;
    case 6: return  colors[2];   break;
    case 8: return  "black";   break;
  }
}



function checkIfCorrect(tapColor)
{
  if(typeOfQuestion == "text")
  {
    if(tapColor == currentQuestion)
    {
      correctAnswer()
    }
  }
  else if(typeOfQuestion == "color")
  {
    if(tapColor == currentQuestion)
    {
      correctAnswer()
    }
  }

}


function correctAnswer()
{
  questionGenerator()
  resetColor()
  score += 5;
  scoreText.innerHTML = score;
}


function resetColor()
{
  redBox.style.backgroundColor = "indianred";
  blueBox.style.backgroundColor = "skyblue";
  greenBox.style.backgroundColor = "lightgreen";
  yellowBox.style.backgroundColor = "#FFEEAD";
  purpleBox.style.backgroundColor = "#C8ACD6";
  orangeBox.style.backgroundColor = "#FFAD60";
  
  red = 1;
  blue = 1;
  green = 1;
  yellow = 1;
  purple = 1;
  orange = 1;
  
}

