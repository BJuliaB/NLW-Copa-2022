function createGame(player1, hour, player2) {
  return `
          <li>
             <img src="./assets/icon-${player1}.svg" alt="imagem da bandeira do ${player1}" />
             <strong>${hour}</strong>
             <img src="./assets/icon-${player2}.svg" alt="imagem da bandeira do ${player2}" />
         </li>
  `      
}
let delay = 0.4;
function createCard(date, day, games) {
  delay = delay + 0.4;
  return `
    <div class="card" style="animation-delay: ${delay}s">
     <h2>${date} <span>${day}</span></h2>
     <ul>
      ${games}              
     </ul>
    </div>
  `
}

document.querySelector("#cards").innerHTML = 
    
createCard("20/11","Domingo", createGame("catar", "13:00", "equador")) +

createCard("21/11", "Segunda", createGame("inglaterra", "10:00", "ira") +  createGame("senegal", "13:00", "holanda") + createGame("eua", "16:00", "paisdegales")) + 

createCard("22/11", "terça", createGame("argentina", "07:00", "arabiasaudita") + createGame("dinamarca", "10:00", "tunisia") + createGame("mexico", "13:00", "polonia") + createGame("frança", "16:00", "australia")) + 

createCard("23/11", "quarta", createGame("marrocos", "07:00", "croacia") + createGame("alemanha", "10:00", "japao") + createGame("espanha", "13:00", "costarica") + createGame("belgica", "16:00", "canada")) + 

createCard("24/11", "quinta", createGame("suiça", "07:00", "camaroes") + createGame("uruguai", "10:00", "coreiadosul") + createGame("portugal", "13:00", "gana") + createGame("brasil", "16:00", "servia")) + 

createCard("25/11", "sexta", createGame("paisdegales", "07:00", "ira") + createGame("catar", "10:00", "senegal") + createGame("holanda", "13:00", "equador") + createGame("inglaterra", "16:00", "eua")) + 

createCard("26/11", "sabado", createGame("tunisia", "07:00", "australia") + createGame("polonia", "10:00", "arabiasaudita") + createGame("frança", "13:00", "dinamarca") + createGame("argentina", "16:00", "mexico")) + 

createCard("28/11", "domingo", createGame("camaroes", "07:00", "servia") + createGame("coreiadosul", "10:00", "gana") + createGame("brasil", "13:00", "suiça") + createGame("portugal", "16:00", "uruguai")) + 
    
createCard("29/11", "segunda", createGame("equador", "12:00", "senegal") + createGame("holanda", "10:00", "catar") + createGame("ira", "16:00", "eua") + createGame("paisdegales", "16:00", "inglaterra")) + 

createCard("30/11", "terça", createGame("tunisia", "12:00", "frança") + createGame("australia", "12:00", "dinamarca") + createGame("polonia", "16:00", "argentina") + createGame("arabiasaudita", "16:00", "mexico")) +

createCard("01/11", "quarta", createGame("croacia", "12:00", "belgica") + createGame("canada", "12:00", "marrocos") + createGame("japao", "16:00", "espanha") + createGame("costarica", "16:00", "alemanha")) +

createCard("02/11", "quinta", createGame("coreiadosul", "12:00", "portugal") + createGame("gana", "12:00", "uruguai") + createGame("servia", "16:00", "suiça") + createGame("camaroes", "16:00", "brasil")) 