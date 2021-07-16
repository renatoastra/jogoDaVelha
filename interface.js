document.addEventListener('DOMContentLoaded', ()=>{


  let squares = document.querySelectorAll(".square");

  squares.forEach((square)=>{
    square.addEventListener('click', handleClick);
  }) 
})

function handleClick(event){
  
  let square = event.target;
  let position = square.id;

  if(handleMove(position)){

    setTimeout(() => {

      alert("Fim do jogo")

    }, 10);
    

  };
  updateSquare(position);
}

function updateSquare(position){
  let square = document.getElementById(position.toString());
  let symbol = board[position];
  square.innerHTML = `<div class='${symbol}'></div>`
}

//Reseta o jogo
function resetGame(){

  board = ['', '', '', '', '', '', '', '', '',]
  playerTime = 0;
  gameOver = false;
  atualizar();

}
// Atualiza o jogo
function atualizar(){
  let jogadores = document.querySelector(".putinhos")
  let squares = document.querySelectorAll(".square");
  jogadores.innerHTML = `<div class="putinhos">
  <div id="alien" onclick="alien()">👽</div>
  <div id="elfo" onclick="elfo()">🧝‍♂️</div>
  </div>`
  squares.forEach((square) =>{
    square.innerHTML ='';
  })
}

//Escolhe o jogador Alien
function alien(){

  playerTime = 1
  
  checkPlayerAlien()
}
//Escolhe o Elfo
function elfo(){

  playerTime = 0
  checkPlayerElfo()
}

//Uma vez escolhido o jogador não tem como voltar atrás, bug corrigido!
function checkPlayerAlien(){

  jogadores = document.querySelector(".putinhos")
  jogadores.innerHTML = `<div><h2>Jogador escolhido: 👽</h2></div>`
  
}

function checkPlayerElfo(){

  jogadores = document.querySelector(".putinhos")
  jogadores.innerHTML = `<div><h2>Jogador escolhido: 🧝‍♂️</h2></div>`
  
}
