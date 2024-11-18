const multer = require('multer')

// disc storage create
const storage = multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,'./uploads')

    },
    filename:(req,file,callback)=>{
        const filename = `image- ${Date.now()}-${file.originalname}`
        callback(null,filename)
    }
})


// file filter

const fileFilter = (req,file,callback)=>{
    if(file.mimetype=='image/png' || file.mimetype=='image/jpg' || file.mimetype=='image/jpeg'){
        callback(null,true)
    }
    else{
        callback(null,false)
        return callback(new Error('onlypng,jpg,jpeg files are allowed'))
    }

}


// multer configration

const multerConfig = multer({
    storage,
    fileFilter
})
module.exports = multerConfig