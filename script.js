const cells =document.querySelectorAll(".class");
const Status = document.querySelector("#status");
const Restart =document.querySelector("#reset");
const winCondition =[
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [7,5,3],
    [9,5,1],
]

let options =["","","","","","","","",""]
let currentPlayer ="X";
let running =false;

startGame();

function startGame(){
    cells.forEach(cell => cell.addEventListener("click",cellClicked))
    Restart.addEventListener("click",restartGame)
    Status.textContent=`${currentPlayer} it's Your Turn`   
}

function cellClicked(){

}
function updatecell(cell,index){

}
function changePlayer(){

}
function checkWinner(){

}
function restartGame(){

}
