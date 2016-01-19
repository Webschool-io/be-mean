const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

mongoose.connect('mongodb://localhost/teste');

const CommentsSchema = new Schema({
  title: String
, body: String
, date: Date
});

const BlogPostSchema = new Schema({
  title: String
, body: String
, comments: [CommentsSchema]
});

const BlogPostModel = mongoose.model('BlogPost', BlogPostSchema);
const BlogPost = new BlogPostModel();
const comment = { 
  title: 'Comentei aqui'
, body: 'Tá comentando meu fiiiii!'
, date: Date.now()
};

BlogPost.comments.push(comment);
BlogPost.save(function (err, data) {
  if (err) return console.log('Erro:', err);
  return console.log('Sucesso:', data);
});
