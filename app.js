const express = require('express');

// Create an Express application
const app = express();

app.use(express.static(__dirname +'/partials'));

// Register view engine
app.set('view engine', 'ejs');

// Listen for requests
app.listen(3000);


// Handle GET request for the root URL
app.get('/', (req, res) => {
    const blogs = [
        {title:'Yoshi find eggs',snippet:'He finds it in his fridge'},
        {title:'Mario finds star',snippet:'He finds it in the sky'},
        {title:'how to distract a dog',snippet:'give him food'},
    ];
    res.render('index',{ title:'Home',blogs:blogs});
});

app.get('/about', (req, res) => {
    res.render('about',{ title:'About'});
});

app.get('/blogs/create', (req, res) => {
    res.render('create',{ title:'Create a new Blog'});
});

// Handle 404 errors
app.use((req, res) => {
    res.status(404).render('404',{ title:'404'});
});


