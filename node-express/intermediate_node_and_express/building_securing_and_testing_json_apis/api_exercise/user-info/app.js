const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const usersRoutes = require('./routes/users');

app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use('/api/users', usersRoutes);

app.use((req, res, next) => {
    let err = new Error('Not Found');
    err.status = 404;
    return next(err);
});

if(app.get('env') === 'development') {
    app.use((err, req, res, next) => {
        res.status(err.status || 500);
        return res.json({
            message: err.message,
            error: err
        });
    });
}

app.listen(3000, () => {
    console.log("Port started on 3000");
});
