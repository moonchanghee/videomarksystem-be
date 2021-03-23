var express = require('express');
var router = express.Router();
const {Video} = require('../../models/Video')
const multer = require("multer") //multer이용 파일 저장


/* GET home page. */

let storage = multer.diskStorage({
    //저장경로
   destination:(req,file,cb) => {
    // cb(null , "uploads/") //전송된 파일 저장 디렉토리 설정
    cb(null , "public")   
},
   //파일이름
   filename:(req,file,cb) => {
    cb(null, `${Date.now()}_${file.originalname}`);

   },
})
const upload = multer({storage : storage}).single("file"); //single 하나만 설정

 

router.post('/', function(req, res, next) {
    console.log("업로드")
    console.log(req.body)
        const video = new Video({
            title: req.body.title,
            description:req.body.description,
            filePath:req.body.filePath ,
            fileName:req.body.filename,   
        })
    
        video.save((err, video) => {
            if(err) return res.status(400).json({ success: false, err })
            return res.status(200).json({
                success: true 
            })
        })
});


router.post('/ondrop', (req, res, next) => {

    //비디오를 서버에 저장
    upload(req ,res , err => {
    if(err){
        return res.json({success:false , err})
    }
    // console.log("비디오 업로드" + res.req.file.filename)
    return res.json({success: true , url : res.req.file.path, fileName: res.req.file.filename })  //파일을 저장한 경로를 보내준다 
    })
    })

    
// router.get("/getVideos", (req, res ,next) => {

//     Video.find()
//     .exec((err, video) => {
//         if(err) return res.status(400).send(err);
//         console.log(video)
//         res.status(200).json({ success: true, video })
//     })
// });


router.post("/getVideoDetail", (req, res) => {
    console.log("getVideoDetail")
    console.log(req.body)
        Video.findOne({ "_id" : req.body.videoId })
        .populate('writer')
        .exec((err, video) => {
            if(err) return res.status(400).send(err);
            res.status(200).json({ success: true, video })
        })
    });

module.exports = router;
