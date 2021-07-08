'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');
var Configstore = require('configstore');

var Generator = module.exports = function Generator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  var conf = new Configstore('generator-rhymix', {});
};
util.inherits(Generator, yeoman.generators.Base);

Generator.prototype.askFor = function askFor() {
  var done = this.async();

  var prompts = [{
      type: 'list',
      name: 'extension_type',
      message: 'Extension type',
      choices: [{
          name: 'module',
          checked: true
        },
        'widget',
		'widget_skin',
        'addon',
        'layout'
      ]
    }
  ];

  this.prompt(prompts, function (props) {
    this.extension_type = props.extension_type;

    this.composeWith('rhymix:' + props.extension_type, {});

    done();
  }.bind(this));
};
