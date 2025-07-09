let userScore=0;
let user=document.querySelector("#user");
let compScore=0;
let compu=document.querySelector("#comp");
let draw=0;
let drawn=document.querySelector("#draw");
const choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");
let reset=document.querySelector("#reset");
const comp=()=>
{
    const option=["rock","paper","scissors"];
    const o=Math.floor(Math.random()*3);
    return option[o];
};
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin)
    {
        userScore++;
        user.innerText=userScore;
        console.log("User win");
        msg.innerText=`You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else
    {
        compScore++;
        compu.innerText=compScore;
        console.log("Computer win");
       msg.innerText=`You lose!  ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
};
const playGame=(userChoice)=>{
    const compChoice=comp();
    if(userChoice===compChoice)
    {
        draw++;
        drawn.innerText=draw;
        console.log("Draw game");
        msg.innerText="Draw game. Play Again";
        msg.style.backgroundColor="black";
    }
    else{
        let userWin=true;
        if(userChoice==="rock") 
        {
            if(compChoice==="paper")    
                userWin=false;
            else 
                userWin=true;
        }
        else if(userChoice==="paper")
        {
            if(compChoice==="rock")
                userWin=true;
            else
                userWin=false;
        }
        else
        {                                       //scissors
            if(compChoice==="rock")
                userWin=false;
            else
                userWin=true;
        }
        showWinner(userWin,userChoice,compChoice);
    }

};
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});
const resetGame=()=>{
    drawn.innerText="0";
    user.innerText="0";
    compu.innerText="0";
    msg.innerText=" Play Your Move";
    msg.style.backgroundColor="black";
    userScore=0;
    compScore=0;
    draw=0;
}
reset.addEventListener("click",resetGame);