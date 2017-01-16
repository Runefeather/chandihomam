var exp = require('express');
var path = require("path");
var router = exp.Router();
var appdir = path.dirname(require.main.filename);


router.get('/', function(req, res) {
    return res.sendFile(path.join(appdir + '/html/index.html'));
});


module.exports = router;
