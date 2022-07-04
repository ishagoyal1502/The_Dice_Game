var round1=0;
var round2=0;
var score1=0;
var score2=0;
$(".play").click(function(){
  start();
})

function start()
{
  $(".play").toggleClass("disabled");
  $(".switch").toggleClass("disabled");
  $(".play-button1").toggleClass("disabled");
  target=Math.random();
  target=Math.floor(target*100)+13;
  $(".target-score").text(target);
}

$(".play-button1").click(function(){
  game(".play-button1");
});

$(".play-button2").click(function(){
  game(".play-button2");
});

$(".switch").click(function(){
  $(".play-button1").toggleClass("disabled");
  $(".play-button2").toggleClass("disabled");
  join();
  check();
});


function game(id)
{
  randomNumber=Math.random();
  randomNumber=Math.floor(randomNumber*6)+1;
  var image="images/dice"+randomNumber+".png";
  $(id).css("background-image","url("+image+")");
  if(id===".play-button1")
  {
    round1+=randomNumber;
    if(randomNumber===6)
    {
      round1=0;
      $(".play-button1").toggleClass("disabled");
      $(".play-button2").toggleClass("disabled");
    }
    $(".round1").text(round1);
  }
  else
  {
    round2+=randomNumber;
    if(randomNumber===6)
    {
      round2=0;
      $(".play-button1").toggleClass("disabled");
      $(".play-button2").toggleClass("disabled");
    }
    $(".round2").text(round2);
  }
}

function join()
{
  score1=score1+round1;
  score2=score2+round2;
  round1=0;
  round2=0;
  $(".round1").text(round1);
  $(".round2").text(round2);
  $(".score1").text(score1);
  $(".score2").text(score2);
}

function check()
{
  if(score1>=target)
  {
    $(".title").text("🚩 Player1 wins");
    setTimeout(reset,2000);
  }
  else if(score2>=target)
  {
    $(".title").text("Player2 wins 🚩");
    setTimeout(reset,2000);
  }
}

function reset()
{
  round1=0;
  round2=0;
  score1=0;
  score2=0;
  target=0;
  $(".round1").text(round1);
  $(".round2").text(round2);
  $(".score1").text(score1);
  $(".score2").text(score2);
  $(".target-score").text(target);
  $(".title").text("The Dice Game");
  $(".play").removeClass("disabled");
  $(".switch").addClass("disabled");
  if($(".play-button1").hasClass("disabled"))
  {
    $(".play-button2").addClass("disabled");
  }
  else
  {
    $(".play-button1").addClass("disabled");
  }
  $(".play-button1").css("background-image","url('images/dice6.png')");
  $(".play-button2").css("background-image","url('images/dice6.png')");
}
// document.querySelector(".play").addEventListener("click",doit);
// document.querySelector(".play-button1").addEventListener("click",doit);
// document.querySelector(".play-button2").addEventListener("click",doit);
// var a=0;
// var b=0;
// function doit()
// {
//   document.querySelector(".play").classList.add("disabled");
//   var randomNumber;
//   randomNumber=Math.random();
//   randomNumber=randomNumber*100;
//   randomNumber=Math.floor(randomNumber)+1;
//   document.querySelectorAll("h5")[2].innerHTML=randomNumber;
//   var randomNumber1;
//   randomNumber1=Math.random();
//   randomNumber1=randomNumber1*6;
//   randomNumber1=Math.floor(randomNumber1)+1;
//   var randomNumber2;
//   randomNumber2=Math.random();
//   randomNumber2=randomNumber2*6;
//   randomNumber2=Math.floor(randomNumber2)+1;
//   console.log(randomNumber1);
//   console.log(randomNumber2);
//   var im1="images/dice"+randomNumber1+".png";
//   var im2="images/dice"+randomNumber2+".png";
//   document.querySelector(".play-button1").style.backgroundImage="url("+im1+")";
//   document.querySelector(".play-button2").style.backgroundImage="url("+im2+")";
//   // if(randomNumber1<randomNumber)
//   // {
//   //   document.querySelectorAll("h5")[0].innerHTML=
//   // }
//   if(randomNumber1>randomNumber2)
//   {
//     document.querySelector("h1").innerHTML="Player 1 Wins!";
//   }
//   else if(randomNumber2>randomNumber1)
//   {
//     document.querySelector("h1").innerHTML="Player 2 Wins!";
//   }
//   else
//   {
//     document.querySelector("h1").innerHTML="Draw";
//   }
// }
