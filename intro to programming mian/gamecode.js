function PlayCraps(){
    /*PlayCraps() is a gunction used to simulate a craps game
    use for week 3 assignment*/
    console.log("PlayCraps() started");
    /*roll the dice*/
    var die1 = 1 + Math.floor(6 * Math.random());
    console.log(die1);
    document.getElementById("die1res").innerHTML =die1;
    var die2 = Math.ceil(6 * Math.random());
    console.log(die2);
    document.getElementById("die2res").innerHTML =die2;

    if (die1 < 1 || die1 > 6){
        console.log("fails test, figure it out!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
    }
    /*find the sum of the dice*/
    var sum = die1 + die2;
    console.log(sum);
    document.getElementById("sumres").innerHTML =sum;


    //if sum equals 7 or 11 they lose
    if(sum == 7 || sum == 11){
        document.getElementById("finres").innerHTML = "you lose please try again";

    }
    else if(die1 == die2 && die1%2 == 0){
        document.getElementById("finres").innerHTML = "you win yay";
//if sum are doubls and even then they win
    } else{
        document.getElementById("finres").innerHTML = "you draw try again";
    //otherwise, they draw
    }

}