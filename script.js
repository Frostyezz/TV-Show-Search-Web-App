const express = require('express');
const app = express();
const axios = require('axios');

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.listen(3000,() =>{})

app.get('/', (req,res) =>{
    const {query} = req.query;
    if(!query)
        res.render('home.ejs');
    else
    {
        axios.get(`http://api.tvmaze.com/search/shows?q=${query}`)
        .then(response =>{
            res.render('searchResults.ejs', {...response, query});
        })
    }
})

