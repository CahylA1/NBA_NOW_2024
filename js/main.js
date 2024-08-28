// Cached Elements 
const submitBtn = document.getElementById('submit')

// State
let players



// Event Listener 
submitBtn.addEventListener('click', async function (evt) {
   evt.preventDefault()

   const firstName = document.getElementById('first-name').value.trim()
   const lastName = document.getElementById('last-name').value.trim()

   const res = await fetch("http://localhost:3000/players/search", {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json'
      },
      body: JSON.stringify({
         firstName,
         lastName
      })
   });

   const data = await res.json();
   console.log(data);

   renderPlayerData(data)

})


// Functions
function renderPlayerData(player) {
   const playerInfoDiv = document.getElementById('player-info')

   if (player.msg) {
      playerInfoDiv.innerHTML = `<p>${player.msg}</p>`
      return
   }


   playerInfoDiv.innerHTML = `
   <p>Name: ${player.first_name} ${player.last_name}</p>
        <p>Team: ${player.team.name}</p>
        <p>Position: ${player.position}</p>
        <p>Height: ${player.height} ft-in</p>
        <p>Weight: ${player.weight} lbs</p>
        <p>Draft Year: ${player.draft_year}</p>
   `
}