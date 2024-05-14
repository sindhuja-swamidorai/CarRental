"use strict";

// Let the window's onload know there is a function called init
window.onload = init;    // Do not put () after init!
                         // This isn't calling init now -- it 
                         // saying call the init function when
                         // the window finishes loading

// The init function connect the button to the code that
// should run when the button is clicked
function init() {
   // Find the helloBtn
   const addBtn = document.getElementById("getCostBtn");

   // Let helloBtn's onclick know there is a function
   // called onHelloBtnClicked that should be called when
   // the button is clicked
   getCostBtn.onclick = onGetCostBtnClicked; 

   // Find the clearBtn
   let clearBtn = document.getElementById("clearBtn");

   // Let clearBtn's onclick know there is a function
   // called onClearBtnClicked that should be called when
   // the button is clicked
   clearBtn.onclick = onClearBtnClicked; 

}



// This function is called when helloBtn is clicked
function onGetCostBtnClicked() {
   
    let costPerDay = 29.99;
    let cost = 0;
    // Find the messageDiv

   let answerField = document.getElementById("answerField");
   let age = document.getElementById("age");
   let days = document.getElementById("days");

   age = Number(age.value);
   days = Number(days.value);
   if (age < 25) {
     cost = costPerDay * days + ((costPerDay * days)* 0.3);
   }
   else {
     cost = costPerDay * days;
   }
   // Set the contents of the div
   console.log(`age: ${age} days: ${days}`)
   answerField.value = cost;
}

 // This function is called when clearBtn is clicked
function onClearBtnClicked() {
    // Find the messageDiv
    let messageDiv = document.getElementById("messageDiv");
    // Clear the contents of the div
    messageDiv.innerHTML = "";
 }
