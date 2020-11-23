const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const itemRoutes = require('./routes');

app.use(bodyParser.json());
app.use('/items', itemRoutes);
app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    return next(err);
});
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    return res.json({
        message: err.message,
        error: app.get('env') === 'development' ? err : " {}"
    });
});

app.get('/', function(req, res, next) {
    return res.json('Welcome to your Shopping Lists!');
});

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});
