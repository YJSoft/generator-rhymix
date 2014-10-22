'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');
var Configstore = require('configstore');

var Generator = module.exports = function Generator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);
};
util.inherits(Generator, yeoman.generators.Base);

Generator.prototype.askFor = function askFor() {
  var done = this.async();
  var conf = new Configstore('generator-xpressengine');

  var prompts = [{
      name: 'module_name',
      message: 'module_name',
      default: this.appname
    }
  ];

  this.prompt(prompts, function (props) {
    this.module_name = props.module_name;
    done();
  }.bind(this));
};

Generator.prototype.files = function files() {
  //directory
  this.mkdir('conf');
  this.mkdir('queries');
  this.mkdir('lang');
  this.mkdir('schemas');
  this.mkdir('tpl');

  //class
  this.template('class.php', this.module_name + '.class.php');
  this.template('controller.php', this.module_name + '.controller.php');
  this.template('model.php', this.module_name + '.model.php');
  this.template('view.php', this.module_name + '.view.php');
  this.template('admin.controller.php', this.module_name + '.admin.controller.php');
  this.template('admin.model.php', this.module_name + '.admin.model.php');
  this.template('admin.view.php', this.module_name + '.admin.view.php');

  //conf
  this.template('conf/module.xml', 'conf/module.xml');
  this.template('conf/info.xml', 'conf/info.xml');
};
