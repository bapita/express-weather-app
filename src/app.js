const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');
const port = process.env.PORT || 9000;

// public static paths 
const staticPath = path.join(__dirname,"../public");
const templatePath = path.join(__dirname,"../templates/views");
const partialsPath = path.join(__dirname,"../templates/partials");

// set view engine as hbs i.e. handlebars 
app.set('view engine', 'hbs');

// change name of view folder to templates
app.set('views',templatePath);

//register partials using hbs
hbs.registerPartials(partialsPath);

// express static path
app.use(express.static(staticPath));
console.log(staticPath)


// routing
app.get("/", (req,res) => {
    //res.send("Index page");
    res.render('index');
})

app.get("/about", (req,res) => {
    //res.send("About page");
    res.render('about');
})

app.get("/weather", (req,res) => {
    //res.send("Weather page");
    res.render('weather');
})

app.get("*", (req,res) => {
    //res.send("404 ERROR PAGE");
    res.render('404error', {
        errorMsg: "This Page couldn't be found in this site"
    });
})

app.listen(port, () => {
    console.log(`Localhost:${port} running successfully`);
})