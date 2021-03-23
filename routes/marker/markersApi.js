var express = require('express');
var router = express.Router();
const {Markers} = require('../../models/Markers')



router.post('/', function(req, res, next) {
    console.log("업로드")
    console.log(req.body)
        const marker = new Markers({
            time: req.body.time,
            text:req.body.text,
            val:req.body.val ,
            key : req.body.key
        })
    
        marker.save((err, mark) => {
            if(err) return res.status(400).json({ success: false, err })
            return res.status(200).json({
                success: true 
            })
        })
});


router.get('/', function(req, res, next) {
    console.log("업로드")
    console.log(req.body)
    Markers.find().exec((err,markers) => {
        if(err) return res.status(400).send(err)
        console.log(markers)
        res.status(200).json({success:true, markers})
    })
});



module.exports = router;
