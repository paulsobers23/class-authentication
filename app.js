const express = require('express');

const bodyParser = require('body-parser');

const cookieParser = require('cookie-parser');

const authController = require('./controllers/auth');

const app = express();

const port = 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.use(cookieParser());

app.post('/register',authController.register );

app.post('/login', authController.login);

app.use(authController.verify);

app.get('/', (req,res)=>{
  res.send('Hey World');
});

// app.get('/register', authController.getRegistrationPage);

app.get('/secret', (req,res)=>{
    res.send('I really need a haircut...');
});






app.listen(port, () => console.log(`Server listening on port ${port}`));