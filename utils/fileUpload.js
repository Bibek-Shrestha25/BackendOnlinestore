const multer = require("multer")
const fs = require("fs")
const path = require('path')

const storage = multer.diskStorage({
    destination:function(req,file, cb){
        let filepath = 'public/uploads'

        if(!fs.existSync(filepath)){
            fs.mkdirSync(filepath,{recursive:true})
        }
        cb(null, path)
    },
    filename:function(req,file,cb){
        let extname = path.extname(file.originalname)
        let basename= path.basename(file.originalname, extname)
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() *1E9)

        let filename = basname + '-' + uniqueSuffix+extname

        cb(null, filename)
    }
})
const fileFilter = (req, file, cb)=>{
    if(!file.originalname.match(/[.](jpg|jpeg|png|webp|gif|JPG|JPEG|PNG|WEBP|GIF|svg|SVG)$/)){
        cb(new error("Invalid file type"),false)
    }
    cb(null, true)
}

const upload = multer({
    storage:storage,
    fileFilter,
    limits:{
        fileSize:200000
    }
})
module.exports = upload
