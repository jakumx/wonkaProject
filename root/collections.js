(function(namespace) {

  var models = namespace.models;
  var collections = namespace.collections;

  //TODO: add collections below
   collections.Medics = Bb.Collection.extend({
   	model: models.Medic,
   	parse: function(out) {
   		console.log(out);
   	}
   });

   collections.Users = Bb.Collection.extend({
   	model: models.User
   });

   collections.Appointments = Bb.Collection.extend({
   	model: models.Appointment
   });

})(root);