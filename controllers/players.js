module.exports = {
    index
}



async function index(req, res) {
    try {
        const options = {
            //GET Method property 
            // Should have an Authorization header property with value of an API KEY
            method: "GET",
            headers: {
                Authorization: process.env.BALLDONTLIE_API_KEY
            }
            //Step 2 : Use fetch function with url and options objects 
            // step 3 : whatever data I get needs to get sent back as json data 
        }
        const player = await fetch(`https://api.balldontlie.io/v1/players?first_name=${req.body.firstName}&last_name=${req.body.lastName}`, options)
        let data = await player.json()
        console.log(data)
        if(data.data.length) {
            res.json(data.data[0])
        } else {
            res.json({
                msg: 'No player found'
            })
        }

    } catch (err) {
        console.log(err)
        res.status(400).json('Error')
    } 
}