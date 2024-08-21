

module.exports = {
    index
}

async function index(req, res) {
    const options = {
        //GET Method property 
        // Should have an Authorization header property with value of an API KEY
        method: "GET", 
        headers: {
            Authorization: ` ${process.env.BALLDONTLIE_API_KEY}`
        }
        //Step 2 : Use fetch function with url and options objects 
        // step 3 : whatever data I get needs to get sent back as json data 
    }
    const player = await fetch("https://www.balldontlie.io/api/v1/players", options)
    const data = await player.json()
    console.log(data)
}