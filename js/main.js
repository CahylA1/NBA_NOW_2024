// Constants and Variables

// const BASE_URL = 'https://api.balldontlie.io/v1/players'
const BASE_URL = 'http://localhost:3000/players'

// Cached Elements 
const submitBtn = document.getElementById('submit')



submitBtn.addEventListener('click', async function() {
    const res = await fetch(BASE_URL)
    const players = await res.json()
    console.log(players)
})
