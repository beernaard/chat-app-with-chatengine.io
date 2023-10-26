const express = require('express')
const cors = require('cors')
const { default: axios } = require('axios')
const app = express()
app.use(express.json())
app.use(cors({origin:true}))
require('dotenv').config()

app.post('/authenticate', async(req,res)=>{
    try {
        const {username} = req.body
        const response = await axios.put(
            "https://api.chatengine.io/users/",
            {username: username,secret: username,firstname: username},
            {headers:{"private-key":`${process.env.API_KEY}`}},
            )
            return res.status(response.status).json(response.data)
    } catch (error) {
        return res.status(express.response.status).json(response.data)
    }
})

const PORT = 3000
app.listen(PORT, console.log(`server listening to port ${PORT}`))