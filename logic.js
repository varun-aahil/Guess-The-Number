let cnum = Math.floor(Math.random() * 100) + 1;
let attempt = 0;
let attemptData = document.getElementById("Attempt");
let userinp = document.getElementById("inp");
let subBtn = document.getElementById("submit");
let resBtn = document.getElementById("resBtn");
let message = document.getElementById("msg");

function check() {
   let usernum = parseInt(userinp.value);
   if (isNaN(usernum) || userinp.value === "") {
       message.innerHTML = "Please enter a valid number.";
       message.style.color = "orange";
       return;
   }

   if (cnum == usernum) {
       message.innerHTML = "Congratulations, you have guessed the number!";
       message.style.color = "green";
   } else if (cnum < usernum) {
       message.innerHTML = "Too high! Try again.";
       message.style.color = "red";
   } else {
       message.innerHTML = "Too low! Try again.";
       message.style.color = "red";
   }

   attempt++;
   attemptData.innerHTML = attempt;

   setTimeout(() => {
       userinp.value = "";
       message.innerHTML = "";
   }, 1000);
}

function restart() {
   cnum = Math.floor(Math.random() * 100) + 1;
   attempt = 0;
   attemptData.innerHTML = attempt;
   message.innerHTML = "";
   userinp.value = "";
}

subBtn.addEventListener("click", check);
resBtn.addEventListener("click", restart);
