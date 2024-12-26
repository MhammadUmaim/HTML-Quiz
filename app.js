let nameValid = (e) =>{

  if(e.target.value.length < 3){
    console.log(e.target.nextElementSibling);
e.target.nextElementSibling.innerText = 'Enter at least 3 char'
e.target.nextElementSibling.style.display = "block";    
e.target.nextElementSibling.style.color = "#00796b";    
return;  
}
else{
  e.target.nextElementSibling.style.display = "none";    

}

}


let rollValid = (e) =>{

  if(e.target.value.length < 4){
    console.log(e.target.nextElementSibling);
e.target.nextElementSibling.innerText = 'Enter at least 4 char'
e.target.nextElementSibling.style.display = "block";    
e.target.nextElementSibling.style.color = "#00796b";    
return;  
}
else{
  e.target.nextElementSibling.style.display = "none";    

}

}


let emailValid = function(e) {
  var error = e.target.nextElementSibling;
  var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailPattern.test(e.target.value)) {
    error.innerText = 'Enter a valid email';
    error.style.display = "block";
    error.style.color = "#00796b";
    disableStartButton();
  } else {
    error.style.display = "none";
    enableStartButton();
  }
};





let startCounT = (event) => {
  event.preventDefault();

  var name = document.getElementById('inpName').value;
  var roll = document.getElementById('inpRoll').value;
  var email = document.getElementById('inpEmail').value;

  // Check if all fields are filled
  if (name === "" || roll === "" || email === "") {
    alert("Please fill in all the fields.");
  } else {
    window.location.href = "./quiz.html";
  }
};







let GoToQuiz = () =>{

   window.location.href = "./quiz.html";


}

let startCount = () => {
  window.location.href = "./quiz.html";
}



