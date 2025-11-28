const maxResult = document.getElementById("maxresult");
const player1 = document.getElementById("num1");
const player2 = document.getElementById("num2");
const newRow = document.getElementById("resutrow");
const addButton = document.getElementById("sub");
const resetButton = document.getElementById("res");
const winner = document.getElementById("winner");
let results = 0 ;
let results2 = 0 ;



const addInput =()=>{
    newRow.innerHTML = ` <td>
                   results : ${results}
                </td>
                <td>
                    results : ${results2}
                </td>` 

}

const gameWinner = ()=>{
    let winnerName ;
    if(results >= maxResult.value ){
        winnerName = "Karima" 
    };
     if(results2 >= maxResult.value ){
        winnerName = "Khadija"
    };
 winner.innerText = `We have a winner!, ${winnerName} has won the game.` ;
 addButton.classList.add('hide');
 resetButton.innerText = "Play again ?"
};

const resultsArea =()=>{
     results += Number(player1.value)  ;
     results2 += Number(player2.value)  ;
      player1.value = "";
    player2.value = "";
    addInput();
            if(results >= maxResult.value || results2 >= maxResult.value){
      return  gameWinner()
    };
    
};


addButton.addEventListener("click", resultsArea);

const del =()=>{
    player1.value = "";
    player2.value = "";
    newRow.innerHTML = "";
    results = 0 ;
    results2 = 0;
     winner.innerText = "";
     addButton.classList.remove('hide');
     resetButton.innerText = "reset"
};
resetButton.addEventListener("click", del) ;



