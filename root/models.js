(function(namespace) {

  var models = namespace.models;
  var collections = namespace.collections;

  //TODO: add models below

  models.Init = Bb.Model.extend({
  	initialize: function() {
  		var me = this;
  		me.set({
  			medics: new collections.Medics(),
  			appointments: new collections.Appointments(),
  			users: new collections.Users
  		})
  	}
  });

  models.Medic = Bb.Model.extend();

  models.User = Bb.Model.extend();

  models.Appointment = Bb.Model.extend();

})(root);