
'use strict';

module.exports = function(kbox, app) {

  /*
   * Add wraith specific CLI containers
   */
  app.events.on('post-app-load', function(app) {

    var path = require('path');

    // Add drupal cli containers
    var drupalComp = path.resolve(__dirname, '..', 'wraith-compose.yml');
    app.composeCore.push(drupalComp);

    // Add drupal specific tasks
    var drupalCli = path.resolve(__dirname, '..', 'wraith-cli.yml');
    app.taskFiles.push(drupalCli);

  });

};
