const Action = {
  retrieve: function(req, res) {
    res.json({action: 'retrieve'});
  }
}
module.exports = Action;