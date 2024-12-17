var core = {
  "start": function () {
    core.load();
  },
  "install": function () {
    core.load();
  },
  "load": function () {
  },
  "action": {
    "storage": function (changes, namespace) {
      /*  */
    },
    "removed": function (e) {
      if (e === app.interface.id) {
        app.interface.id = '';
      }
    },
    "button": function () {
      const context = config.interface.context;
      const url = app.interface.path + '?' + context;
      /*  */
      if (app.interface.id) {
        if (context === "tab") {
          app.tab.get(app.interface.id, function (tab) {
            if (tab) {
              app.tab.update(app.interface.id, {"active": true});
            } else {
              app.interface.id = '';
              app.tab.open(url);
            }
          });
        }
        /*  */
        if (context === "win") {
          app.window.get(app.interface.id, function (win) {
            if (win) {
              app.window.update(app.interface.id, {"focused": true});
            } else {
              app.interface.id = '';
              app.interface.create();
            }
          });
        }
      } else {
        if (context === "tab") app.tab.open(url);
        if (context === "win") app.interface.create(url);
      }
    }
  }
};

app.button.on.clicked(core.action.button);
app.window.on.removed(core.action.removed);

app.on.startup(core.start);
app.on.installed(core.install);
app.on.storage(core.action.storage);
