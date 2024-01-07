const express = require('express');
const path = require("path");
const exphbs = require("express-handlebars");
const logger = require("../middleware/logger");
const members = require('./Members');

const app = express();

// Init middleware
//app.use(logger);

// Handlebars Middleware
app.engine('handlebars', exphbs.engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Homepage route
app.get('/', (req, res) => res.render('index', {
    title: 'Member App',
    members
}));

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Members API Routes
app.use('/api/members', require('./routes/api/members'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Servers started on port: ${PORT}`));