module.exports = function(res, type) {
  if(!type || type['Not-Found']) res.sendStatus(404);
}