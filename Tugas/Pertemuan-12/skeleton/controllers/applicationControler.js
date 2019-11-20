exports.home = function(req, res, next){
    res.render('index');
};

exports.contact = function(req, res, next){
   res.render('contact');
};

exports.about = function(req, res, next){
    res.render('about');
};