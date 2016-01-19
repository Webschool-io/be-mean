'use strict';

require('chai').should();
const ch        = require('charlatan')
, request       = require('superagent')
, url           = require('url')
, ABS_URL       = "http://localhost:3000/api/photos"
, ABS_URL_USERS = "http://localhost:3000/api/users"
, fs            = require('fs')
, dir           = __dirname.replace('tests', 'public/images/');


describe('photos routes testing', () => {
  let id = null
,  user_id = null
, photo = {
    user_id : ''
  , legend : ch.Lorem.word()
  };

  before('get id for one user',done => {
    request
    .get(url.resolve(ABS_URL_USERS,'users'))
    .end((err, res) => {
      user_id = photo.user_id = res.body[0]._id;
      done();
    });
  });

  after('after all', done => {
    let path = dir;
    let images  = fs.readdirSync(path);
    images.forEach(img => {
      fs.unlink(path+img);
    });
    done();
  });

  it('should be an user create one photo' , done => {
    request
    .post(url.resolve(ABS_URL, 'photos'))
    .send(photo)
    .attach('image', __dirname+'/test.png')
    .field('legend', photo.legend)
    .field('user_id', photo.user_id)
    .end((err, res) => {
      res.should.be.exist;
      res.body._id.should.exist;
      res.body.legend.should.be.eql(photo.legend);
      res.body.user_id.should.be.eql(photo.user_id);
      res.body.path.should.be.not.empty;
      id = res.body._id;
      res.status.should.be.eql(201);
      done();
    });
  });

  it('should be get all photos', done => {
    request
    .get(url.resolve(ABS_URL, 'photos'))
    .end((err, res) => {
      res.body.should.be.an('Array');
      res.status.should.be.eql(200);
      done();
    });
  });

  it('should be update one phote by id', done => {
    let newPhoto = {
      user_id : user_id
    , legend : ch.Lorem.word()
    };

    request
    .put(url.resolve(ABS_URL, 'photos/'+id))
    .send(newPhoto)
    .end(() => {
      done();
    });
  });

  it('should be delete one photo by id', done => {
    request
    .del(url.resolve(ABS_URL, 'photos/'+id))
    .end((err, res) => {
      res.status.should.be.eql(204);
      done();
    });
  });
});
