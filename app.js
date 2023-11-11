const strikeBtn =document.getElementById("strike");
const resetBtn =document.getElementById("reset");
const team1Score=document.getElementById("score-team1");
const team1wickets=document.getElementById("wickets-team1");
const team2Score=document.getElementById("score-team2");
const team2wickets= document.getElementById("wickets-team2");

let currTeam1Score=0;
let currTeam1wickets=0;
let currTeam2Score=0;
let currTeam2wickets=0;
let team1Ballsfaced=0;
let team2Ballsfaced=0;
let turn=1;

let possibleOutcomes =[0,1,2,3,4,6,"w"];

function gameOver(){
    if(currTeam1Score>currTeam2Score){
        alert("IND wins...!!!")
    }else if("currTeam1Score<currTeam2Score"){
        alert("PAK wins...!")
    }else if(currTeam1Score===currTeam2Score){
        alert("It's a Tie.");
    }
}
    resetBtn.onclick=()=>{
        window.location.reload();
    };
   function updateScore(){
         team1Score.textContent=currTeam1Score;
         team1wickets.textContent=currTeam1wickets;
         team2Score.textContent=currTeam2Score;
         team2wickets.textContent=currTeam2wickets;
   }


   strikeBtn.onclick = () => {
        let randomOutcome = possibleOutcomes[Math.floor(Math.random()* possibleOutcomes.length)]

        if(turn == 2){
            team2Ballsfaced++;

            document.querySelector(
               `#team2-superover div:nth-child(${team2Ballsfaced})`).textContent=randomOutcome;
            
        if(randomOutcome=="w"){
                currTeam2wickets++;
        }else{
            currTeam2Score=currTeam2Score+randomOutcome;
        }
        if(currTeam2wickets===2|| team2Ballsfaced===6||currTeam2Score>currTeam1Score){
            turn=3;
            gameOver();
        }
    }
        if(turn==1){
            team1Ballsfaced++;
            document.querySelector(
                `#team1-superover div:nth-child(${team1Ballsfaced})`).textContent=randomOutcome;
        if(randomOutcome=="w"){
            currTeam1wickets++;
        
        }else{
            currTeam1Score+=randomOutcome;
        }
        if(currTeam1wickets===2||team1Ballsfaced===6){
            turn=2;

        }
    
        updateScore();
    }
   
   }

