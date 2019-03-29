var express = require('express');
var connect = require('../utils/sqlConnect');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //get data from db and send through the route to the index.bhs view and then render
  connect.query('SELECT song_name, artist_name, song_img FROM tbl_song', (error, result)=>{
    if(error){
      throw error;
      console.log(error);
    }else{
      console.log(result);
        res.render('index', { songs: result });
    }
  })
});

/* GET song page. */
router.get('/:song', function(req, res, next) {
  //get data from db and send through the route to the index.bhs view and then render
  connect.query(`SELECT * FROM tbl_song WHERE song_name="${req.params.song}"`, (error, result)=>{
    if(error){
      throw error;
      console.log(error);
    }else{
      console.log(result);
        res.render('song', { songData: result[0] });
    }
  })
});

module.exports = router;
