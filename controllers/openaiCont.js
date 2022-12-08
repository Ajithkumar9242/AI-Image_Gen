const { Configuration, OpenAIApi } = require("openai")

const configuration = new Configuration({
    apiKey: process.env.KEY
})

const openai = new OpenAIApi(configuration)

const generateimg = async (req,res) =>{
    const { prompt, size } = req.body
    const imgSize = size === 'small' ? '256x256': size === 'medium' ? '512x512' : '1024x1024'
    
    try{
        const response = await openai.createImage({
            prompt,
            n: 1,
            size: imgSize
        })

        const imgUrl = response.data.data[0].url

        res.status(200).json({
            sucess: true,
            data: imgUrl
        })
    } catch (err){
        res.status(400).json({
            sucess: false,
            err: "NOT FOUND"
        })
    }
}

module.exports = { generateimg }