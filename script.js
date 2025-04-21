
let score=JSON.parse(localStorage.getItem('score'))||{
    wins:0,
    losses:0,
    ties:0
    };
    if(!score){
       score={
        wins:0,
        losses:0,
        ties:0
       } ;
    }

    updateScoreElement();
    
    // In JavaScript, localStorage.setItem() and localStorage.getItem() are used to store and retrieve data in the browser that stays even after the page is reloaded or the browser is closed.
    // local storage supports only string so we have to convert object to string using stringlify and then store it in local storage
    function playGame(playerMove){
        var computerMove=pickComputerMove();
        var result='';
        if (playerMove==='scissors'){
        if(computerMove==='scissors'){
            result='Tie';
        }
        else if(computerMove==='rock'){
        result='You Lose';
        }
        else if(computerMove==='paper'){
        result='You Win';
        }  
        }
        else if (playerMove==='rock'){
        if(computerMove==='rock'){
            result='Tie';
        }
        else if(computerMove==='scissors'){
        result='You Win';
        }
        else if(computerMove==='paper'){
        result='You Lose';
        }  
        }
        else if (playerMove==='paper'){
        if(computerMove==='paper'){
            result='Tie';
        }
        else if(computerMove==='rock'){
        result='You Win';
        }
        else if(computerMove==='scissors'){
        result='You Lose';
        }  
        }

        if(result==='You Win'){
        score.wins+=1;
        }
        else if(result==='You Lose'){
        score.losses+=1;
        }
        else if(result==='Tie'){
            score.ties+=1;
        }
        localStorage.setItem('score',JSON.stringify(score));
        updateScoreElement();
        document.querySelector('.js-result').innerHTML=result;

        document.querySelector('.js-moves').innerHTML=  `You <img class="select"src="https://github.com/shradha-khapra/JavaScriptSeries/blob/main/StonePaperScissors/images/${playerMove}.png?raw=true" alt="Rock">
    <img class="select" src="https://github.com/shradha-khapra/JavaScriptSeries/blob/main/StonePaperScissors/images/${computerMove}.png?raw=true" alt="Paper">
    Computer`
    }
        
       // alert(`You picked ${playerMove}.Computer picked ${computerMove}. ${result}`)};
    function updateScoreElement(){
    document.querySelector('.js-score').innerHTML=`Wins:${score.wins},Losses:${score.losses},Ties:${score.ties}`;
    }
    function pickComputerMove(){
var randomNumber=Math.random()
var computerMove='';
if(randomNumber>=0 && randomNumber<1/3){
    computerMove='rock';
}
else if(randomNumber>=1/3 && randomNumber<2/3){
    computerMove='paper';
}
else if(randomNumber>=2/3 && randomNumber<1){
    computerMove='scissors';
}
return computerMove;
}

//method =dbject+function when a function is stored in object that is called as method and we can directly call the function written inside the object.

