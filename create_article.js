let articles = require('./articles');
const helper = require('./helper');

module.exports = function createArticle(req, res, payload, cb){
    let new_article = {"id": helper.random_id(),"text":payload.text,"author":payload.author,"title":payload.title,"date":new Date()};
    articles.push(new_article);
    const result = { new_article: new_article};
    cb(null, result);
};