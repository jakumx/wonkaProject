(function(namespace) {

  var models = namespace.models;
  var collections = namespace.collections;
  var views = namespace.views;

  var getTemplate = function(name) {
    return hbs.compile($('#root-' + name + '-template').html());
  }

  views.Main = Bb.View.extend({
    template: getTemplate('main'),
    events: {
      'click .view': 'showView'
    },
    initialize: function() {
      var me = this;
      me.model = new models.Init();
      me.mView = new views.Medic({
        parentView: me,
        model: me.model
      });
      me.aView = new views.Appointment({
        parentView: me,
        model: me.model
      });
      me.uView = new views.User({
        parentView: me,
        model: me.model
      });
      me.render();
    },
    render: function() {
      var me = this;
      me.$el.html(me.template());
      return me;
    },
    showView: function(e) {
      var me = this,
        target = me.$(e.currentTarget),
        data = target.data('view'),
        view;
      switch (data) {
        case 'm':
          view = me.mView;
          break;
        case 'u':
          view = me.uView;
          break;
        case 'a':
        default:
          view = me.aView;
      }
      view.setElement(me.$('#change-view'));
      view.render();
    }
  });

  views.Medic = Bb.View.extend({
    template: getTemplate('medic'),
    events: {
      'submit #medic-form': 'onSubmit'
    },
    initialize: function() {
      var me = this;
      me.render();
    },
    render: function() {
      var me = this;
      me.$el.html(me.template({
        medics: me.model.get('medics').toJSON()
      }));
      return me;
    },
    onSubmit: function(e) {
      e.preventDefault();
      e.stopPropagation();
      var me = this,
        target = me.$(e.currentTarget),
        form = formToJSON(target),
        model = me.model.get('medics');
      model.add(form);
      me.render();
    }
  });

  views.Appointment = Bb.View.extend({
    template: getTemplate('appointment'),
    events: {
      'submit #appointment-form': 'onSubmit'
    },
    initialize: function() {
      var me = this;
      me.render();
    },
    render: function() {
      var me = this;
      me.$el.html(me.template({
        appointments: me.model.get('appointments').toJSON(),
        users: me.model.get('users').toJSON(),
        medics: me.model.get('medics').toJSON()
      }));
      return me;
    },
    onSubmit: function(e) {
      e.preventDefault();
      e.stopPropagation();
      var me = this,
        target = me.$(e.currentTarget),
        form = formToJSON(target),
        model = me.model.get('appointments');
      model.add(form);
      me.render();       
    }
  });

  views.User = Bb.View.extend({
    template: getTemplate('user'),
    events: {
      'submit #user-form': 'onSubmit'
    },
    initialize: function() {
      var me = this;
      me.render();
    },
    render: function() {
      var me = this;
      me.$el.html(me.template({
        users: me.model.get('users').toJSON()
      }));
      return me;
    },
    onSubmit: function(e) {
      e.preventDefault();
      e.stopPropagation();
      var me = this,
        target = me.$(e.currentTarget),
        form = formToJSON(target),
        model = me.model.get('users');
      model.add(form);
      me.render();    
    }
  });

})(root);