module.exports = {
    index
}

async function index(req, res) {
    const options = {
        //GET Method property 
        // Should have an Authorization header property with value of an API KEY
        method: "GET", 
        headers: {
            Authorization: "e3b552d2-6624-4e7a-adbe-45f197dc4a3b"
        }
        //Step 2 : Use fetch function with url and options objects 
        // step 3 : whatever data I get needs to get sent back as json data 
    }
    const player = await fetch("https://www.balldontlie.io/api/v1/players", options)
    data = await res.json()
    console.log(data)
}