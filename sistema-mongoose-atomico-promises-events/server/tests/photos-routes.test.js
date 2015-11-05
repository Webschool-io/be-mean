'use strict'

const should = require('chai').should()
  , ch =  require('charlatan')
  , request =  require('superagent')
  , url = require('url')
  , ABS_URL = "http://localhost:3000/api/photos"
  , fs =  require('fs')
  ;

describe('photos routes testing', () => {
  let id = nulli;
  const photo = {
    legend : ch.Lorem.word()
  };

  after('after all', done => {
    let path    = '../server/public/image/'
      , images  = fs.readdirSync(path)
      ;
    images.forEach(img => {
      fs.unlink(path+img);
    });
    done();
  });

  it('it should be an user create one photo' , done => {
    request
      .post(url.resolve(ABS_URL, './photos'))
      .send(photo)
      .attach('image', '../server/tests/test.png')
      .field('legend', photo.legend)
      .end((err, res) => {
        res.should.be.exist;
        res.body._id.should.exist;
        res.body.legend.should.be.eql(photo.legend);
        res.body.path.should.be.not.empty;
        id = res.body_id;
        res.status.should.be.eql(201);
        done();
      });
  });
  
});
