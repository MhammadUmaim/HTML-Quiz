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


let GoToQuiz = () =>{

   window.location.href = "./quiz.html";


}

