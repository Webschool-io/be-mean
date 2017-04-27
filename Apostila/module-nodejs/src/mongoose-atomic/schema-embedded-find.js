const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/teste');

const CommentsSchema = new Schema({
  title: String,
  body: String,
  date: Date
});

const BlogPostSchema = new Schema({
  title: String,
  body: String,
  comments: [CommentsSchema]
});

const post = {
  title: 'Primeiro POST'
, body: 'Post inicial do blog UEBAAA'
, date: Date.now()
}
const comment = {
  title: 'Comentei aqui'
, body: 'Tá comentando meu fiiiii!'
, date: Date.now()
};

const BlogPostModel = mongoose.model('BlogPost', BlogPostSchema);
const BlogPost = new BlogPostModel(post);
const post_id = '569e36b2d6a928b526db9135';
const comment_id = '569e36b2d6a928b526db9136';

BlogPostModel.findById(post_id, function (err, post) {
  if (err) return console.log('Erro:', err);
  console.log('Achou esse comentário: ', post.comments.id(comment_id));
});





