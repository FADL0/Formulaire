let reductionbutton = document.querySelector(".buttonmoment");
let code = document.querySelector(".code");
let existbutton = document.querySelector(".exit")
let modal = document.querySelector(".modal")
let confirmed = 0;

let body = document.querySelector("body")
let footer = document.createElement("footer")
let real = "merci"
footer.innerHTML = `<div class="realR8">
<p class ="thankstext">Thank You</p>
</div>
`;
footer.style.transitionDuration = "1s";
footer.style.opacity = "0";

reductionbutton.addEventListener('click', function() {
    confirmed++;
    code.innerHTML = "54781B3"
})

existbutton.addEventListener('click', function(){
    if(confirmed == 0 ){
        modal.style.display = "none";
    } else if (confirmed == 1){
        modal.style.display = "none";
        body.append(footer)
        setTimeout(() => {
            footer.style.opacity = "1"
          }, 0);
        setTimeout(() => {
            footer.style.opacity = "0"
          }, 2000);
          setTimeout(() => {
            footer.style.display = "none"
          }, 4000);


    }

})

let done = 0
window.onscroll = function() {gahdamnitbabeh()};

function gahdamnitbabeh(){
    if(document.documentElement.scrollTop > 500 && done == 0){
        done++;
        modal.style.display = "block"
    }
}




let menu = document.querySelector(".imlosingit");
let menudisplay = document.querySelector(".demontime");


menu.addEventListener('click', function(){
    menudisplay.classList.toggle('demontimesupreme');
    menu.classList.toggle('orami');
  
})


let home = document.querySelector(".home")
let homechanges = document.querySelector(".homechanges")


home.addEventListener('click',function(){
    homechanges.classList.toggle('homechanges2')
})


function getInputValue(){
    let MotherContainer = document.querySelector(".container")
    let container = document.createElement("section");
    MotherContainer.append(container);

let namayewa = document.querySelector(".name")
let goofygobber = document.querySelector(".lastname")




    let Name = document.querySelector(".name").value;
    let lastName = document.querySelector(".lastname").value;
    let age = document.querySelector(".age").value;
    let height = document.querySelector(".height").value;
    let adresse = document.querySelector(".adresse").value;
    let mommies = document.querySelector(".mommies").value;
    let letters = /^[A-Za-z]+$/;
    
    if(!Name){
        alert("Please Fill out Name")
        namayewa.classList.add("nameError")
        goofygobber.classList.remove("nameError")
    }else if(!lastName) {
        alert("Please Fill out Last Name")
        goofygobber.classList.add("nameError")
        namayewa.classList.remove("nameError")
    }
    
    
    
    
    else if (Name.match(letters)){ container.innerHTML = `
    <section class="results">
    
     <h1>The Results</h1>
 
 
     <p>Your Name is : ${Name}</p>
      <p> Your Last Name is :${lastName}</p>
      <p>You Age is : ${age}</p>
     <p>Your Height is : ${height}</p>
     <p>Your Adresse is : ${adresse}</p>
     <p> ${mommies}</p>
     
 
 
 </section>
 
    `
    namayewa.classList.remove("nameError")
    goofygobber.classList.remove("nameError")
} else{
        alert("No Numbers are allowed in Name")
    }

}


