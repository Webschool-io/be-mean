const Action = {
  delete: function(req, res) {
    res.json({action: 'delete'});
  }
}
module.exports = Action;