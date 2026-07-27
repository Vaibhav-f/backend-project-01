const Imagekit = require("imagekit")

const imagekit=  new Imagekit({
    publicKey:process.env.PUBLIC_KEY,
    privateKey : process.env.PRIVATE_KEY,
    urlEndpoint:process.env.URL_END_POINT
})

async function uploadFile(buffer){
    const result = await imagekit.upload({
        file:buffer.toString("base64"),
        fileName: "image.jpg"
    })
    return result
}

module.exports = uploadFile;

  