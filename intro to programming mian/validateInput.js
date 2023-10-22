function validateInput(event){
    //should allow the form with combinaiton of window.addeventlistener to not refresh. randomly dosent work and sometimes does. good luck
    event.preventDefault();
    let firstName = document.getElementById("fname").value;
    console.log(firstName);
    let lastName = document.getElementById("lname").value;
    console.log(lastName);
    let zip = document.getElementById("zip").value;
    console.log(zip);

    let firstlast = firstName + " " + lastName;
    console.log(firstlast);

    if(firstlast.length < 20){
        alert("not enough charachters. first and last name must have at least 20 charachters");
        return;   
     } 
     console.log("validfirst and lastname");
     if(zip.length !=5 || (!Number.isInteger(parseInt(zip) ))){
        alert("invalid zip code. Zip must be a number of 5 digits. ");
        return;
     }
    
     console.log("Zip valid")
     alert("you unlocked the hidden code. congrats")
}
    //is a event listener. when event is activated it should lead t run this block of code
window.addEventListener("DOMContentLoaded", (event) => {
    const form = document.getElementById("myForm");
    if (form) {
        form.addEventListener("submit", validateInput);
    }
})