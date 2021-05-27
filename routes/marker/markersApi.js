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
            src : req.body.src 
        })
    
        marker.save((err, mark) => {
            if(err) return res.status(400).json({ success: false, err })
            return res.status(200).json({
                success: true 
            })
        })
});


router.get('/:id', function(req, res, next) {
    console.log("업로드")
    console.log(req.body)
    console.log(req.params.id)
    Markers.find({"src" : req.params.id}).exec((err,markers) => {
        if(err) return res.status(400).send(err)
        console.log("markers" , markers)
        res.status(200).json({success:true, markers})
    })
});


router.delete('/:id', function(req, res, next) {
    Markers.deleteOne({"time" :req.params.id }).then(e => console.log(e))
});



module.exports = router;
