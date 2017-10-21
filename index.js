const express = require('express');
const morgan = require('morgan');

//setting up the server
const port = process.env.PORT || 3000;
const app = express();

//settings for the app
app.set('views engine', 'ejs');
app.set('views', `${__dirname}/views`);

//middleware settings
app.use(morgan('dev'));
app.use(express.static(`${__dirname}/public`));

//listen to port

app.listen(port, () => console.log(`Express is listening to port ${port}`));
