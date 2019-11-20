let Article = require('../models/article');

exports.index = function(req, res, next) {
    Article.find({}, function(err, results){
        if (err) throw err;
        res.render('articles/index', { article: results });
    });
};

exports.category = function(req, res, next) {
    res.render('articles/category');
};

exports.create = function(req, res, next) {
    res.render('articles/create');
};

exports.create_article = function(req, res, next) {
    console.log(req.body);
    let article = new Article(req.body)
    article.save(function(err, result){
        if(err){
            console.log(err, message)
        } else {
            res.redirect('/articles')
        }
    });
};

exports.update = function(req, res, next){
    let articleID = req.params.articleId
    console.log(articleID)
    Article.findByIdAndUpdate( articleID, function (err, result) {
        res.render('/article/update', { article: result });
    });
};

exports.delete = function(req, res, next){
    let articleId = req.params.articleId
    Article.findOneAndDelete({_id: articleId}, function (err, article) {
        if (err){
            res.redirect('/articles?message=Failed delete Article!');
        } else {
            res.redirect('/articles?message=Success delete Article!')
        }
    });
};

exports.detail = function(req, res, next){
    let params = req.params;
    console.log(params)
    Article.findOne({ _id: params.articleId }, function(err, result){
        res.render('articles/detail', {
            article:result
        });
        console.log(result);
    });
}