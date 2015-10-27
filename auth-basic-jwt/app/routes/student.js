"use strict";
module.exports = function(app){
	var studentController = app.controllers.student;
  var interceptor = app.services.interceptor;
	app.route("/students")
	.get(interceptor.ensureAuthorized, studentController.findAllStudents) //to list all datas 
	.post(interceptor.ensureAuthorized, studentController.saveStudent) //to save data student
	;

	app.route("/students/:id")
	.get(interceptor.ensureAuthorized, studentController.findOneStudent)
	.delete(interceptor.ensureAuthorized, studentController.removeStudent)
	;
	
}
