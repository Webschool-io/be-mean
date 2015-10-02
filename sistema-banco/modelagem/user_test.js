const Model = require('./user_model');


var _model = new Model();

Model.email = 'test';
console.log(_model.validateSync().toString());

// Model.password = 'senhapaia';
// console.log(_model.validateSync().toString());

// describe('with none of its required fields filled in', function() {
//     it('should fail with validation errors for each required field', function() {
//         var customer = new Customer();
//         customer.save(function(err) {
//             expect(err).not.toBeNull();
//             expect(err).toHaveRequiredValidationErrorFor('name');
//             expect(err).toHaveRequiredValidationErrorFor('vatNumber');
//             expect(err).toHaveRequiredValidationErrorFor('address.street');
//             expect(err).toHaveRequiredValidationErrorFor('address.postalCode');
//             expect(err).toHaveRequiredValidationErrorFor('address.city');
//             asyncSpecDone();
//         });
//         asyncSpecWait();
//     });
// });