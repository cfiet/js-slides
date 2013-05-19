var express = require("express"),
    app = express();

app.configure(function () {
    app.use(express.static(__dirname + "/content"));
    app.use(express.directory(__dirname + '/content'));
    app.use(express.errorHandler());
});

app.listen(10111);
