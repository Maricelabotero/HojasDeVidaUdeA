const express = require('express');
const router = express.Router();


const connection = require('./Database/bd');

router.get('/', (req, res)=>{
  //  res.render('main');
  connection.query('SELECT * FROM ASPIRANTE', (error, results)=>{
      if (error) {
          throw error;
      } else {
          res.render('main', {results:results});
      } 
  })  
})

router.get('/create', (req, res) => {
    res.render('create')
})

router.get('/edit/:ID', (req, res) => {
    const ID = req.params.ID;
    connection.query('SELECT * FROM ASPIRANTE WHERE ID=?', [ID], (error, results)=>{
        if (error) {
            throw error;
        } else {
            res.render('edit', {aspirante:results[0]});
        } 
    })
})

router.get('/delete/:ID', (req,res) =>{
    const ID = req.params.ID;
    connection.query('DELETE FROM ASPIRANTE WHERE ID=?', [ID], (error, results)=>{
        if (error) {
            throw error;
        } else {
            res.redirect('/');
        } 
    })
});

const crud= require('./controllers/crud');
router.post('/save', crud.save)
router.post('/update', crud.update)

module.exports = router;