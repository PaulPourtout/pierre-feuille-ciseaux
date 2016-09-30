// // var name = prompt("ton nom ?");
// // var age = prompt("ton age ?");
// // var maison =  prompt("Ta ville ?");
// // var mechant = prompt("Ton pire enemi ?");
// // document.getElementById('text-content').innerHTML = "il etait une fois <b>" + name + "</b> qui avait " + age + "ans et vivait à <em>" + maison + "</em> qui était un très joli village. Un beau jour " + mechant + " lui niqua la gueule. FIN";
//
// function Calcul() {
//   var calcul1 = document.getElementById('number1').value;
//   var calcul2 = document.getElementById('number2').value;
//   var operator = document.getElementById('operator').value;
//   // document.getElementById("text-content").innerHTML = parseInt(calcul1) + parseInt(calcul2);
//
// var number1 = parseInt(calcul1);
// var number2 = parseInt(calcul2);
//
//   if (operator == '+') {
//     var result = number1 + number2;
//     document.body.classList.toggle("active1");
//   }
//
//   else if (operator == '-') {
//     var result = number1 - number2;
//     document.body.classList.toggle("active2");
//   }
//
//   else if (operator == '*') {
//     var result = number1 * number2;
//     document.body.classList.toggle("active3");
//   }
//
//   else {
//     var result = number1 / number2;
//     document.body.classList.toggle("active4");
//   }
//
// document.getElementById("text-content").innerHTML = result;
//
//
//
// }






function play() {

  var computerNumber = Math.floor((Math.random() * 10) + 1);
  var computer = "";


  if (computerNumber < 3.333) {
    computer = "Pierre";
  }

  else if (computerNumber < 6.666) {
    computer = "Feuille";
  }

  else {
    computer = "Ciseaux";
  }

  var player = document.getElementById('Player').value;
  var result = document.getElementById('text-content');

  if (player == computer){
    result.innerHTML = "<font style=\'color:rgb(92, 163, 113);\'>Ordinateur a joué " + computer + "...Egalité";

  }

  else if (player == "Pierre") {
    if (computer == "Ciseaux") {
      result.innerHTML = "<font style=\'color:rgb(53, 138, 200);\'>Ordinateur a joué Ciseaux. YOU WIN</font>";
    }

    else {
      result.innerHTML = "<font style=\'color:rgb(208, 71, 28);\'>Ordinateur a joué Feuille. GAME OVER</font>";
    }
  }

  else if (player == "Feuille") {
    if (computer == "Pierre") {
    result.innerHTML = "<font style='color:rgb(53, 138, 200);'>Ordinateur a joué Pierre. YOU WIN</font>";
    }

    else {
      result.innerHTML = "<font style='color:rgb(208, 71, 28);'>Ordinateur a joué Ciseaux. GAME OVER</font>";
    }
  }

  else {
    if (computer == "Feuille") {
      result.innerHTML = "<font style=\'color:rgb(53, 138, 200);\'>Ordinateur a joué Feuille. YOU WIN</font>";
    }

    else {
      result.innerHTML = "<font style=\'color:rgb(208, 71, 28);\'>Ordinateur a joué Pierre. GAME OVER</font>";
    }
  }
}
