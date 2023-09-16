//task1: doing for to message to come up when clicked on "RULES" button

let flag=false;//ie, rn pop up is hiddden
let hiddenDivision=document.querySelector('#hiddenDivision');
let compScore=document.querySelector('#computer_score_js');
let yourScore=document.querySelector('#myscore_js');

let paper=document.querySelector('.stone');
let scissor=document.querySelector('.scissor');
let stone=document.querySelector('.paper');
let computerScore=0;
let playerScore=0;
let decision="none";
let footer=document.querySelector('.footer');
let changingDivision=document.querySelector('.footer_main');
let footerWin=document.querySelector('.footer_win');
let userWin=document.querySelector('.waveStyling_user');


let nextButton=document.querySelector('#nextButton');
ruleButton=document.querySelector('#rules');

ruleButton.addEventListener('click', function(e){
    popUp();
})

function popUp(){
    if(flag===false)
    {
        hiddenDivision.style.display = 'block';
        flag=true;
    }
    else{
        hiddenDivision.style.display= 'none';
        flag=false;
    }
    
}

//task2: making the player and computer select among stone paper and scissor and score them accorfingly


paper.addEventListener('click', function(e) {
    play('paper')
})

stone.addEventListener('click', function(e) {
    play('stone')
})

scissor.addEventListener('click', function(e) {
    play('scissor')
})

function play(playerChoice)
{
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

   if(playerChoice==='stone')
   {
    if(computerChoice==='scissor')
    {
       playerScore=playerScore+5;
       decision="win"
    }
    else if(computerChoice==='paper')
    {
        computerScore=computerScore+5;
        decision="lost"
    }
    else{
        playerScore=playerScore+5;
        computerScore=computerScore+5;
        decision="tie"
    }
   }

  else if(playerChoice==='paper')
   {
    if(computerChoice==='stone')
    {
        playerScore=playerScore+5;
        decision="win"
    }
    else if(computerChoice==='scissor')
    {
        computerScore=computerScore+5;
        decision="lost"
    }
    else{
        computerScore=computerScore+5;
        playerScore=playerScore+5;
        decision="tie"
    }
   }

   else
   {
    if(computerChoice==='paper')
    {
          playerScore=playerScore+5;
          decision="win"

    }
    else if(computerChoice==='stone')
    {
        computerScore=computerScore+5;
        decision="lost"
    }
    else
    {
        playerScore=playerScore+5;
        computerScore=computerScore+5;
        decision="tie"
    }
   }


   updateScores();
   displayResults(playerScore, computerScore);
   if(decision==="win")
   {
    win();
   }
   else if(decision==="lost")
   {
    lost();
   }
   else if(decision==="tie"){
    tie();
   
   }
   else{
    nextButton.style.display='none';
    ruleButton.style.marginLeft='88%'
   }
   
}



function win(){
    footer.style.display='none';
    footerWin.style.display='block';
    userWin.style.display='block'; 
    
}

//task3: updating score in the divison made for score to display
function updateScores()
{
    compScore.textContent=computerScore;
    yourScore.textContent=playerScore;
}

function displayResults(playerScore, computerScore){

}

