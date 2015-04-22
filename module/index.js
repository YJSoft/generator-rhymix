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
  var d = new Date();
  var year = d.getFullYear();
  var month = d.getMonth() + 1;
  var date = getDate();

  var prompts = [{
      name: 'module_name',
      message: 'Module ID',
      default: this.appname
    },
	{
      name: 'module_fullname',
      message: 'Module Name',
      default: this.appname
    },
	{
      name: 'module_description',
      message: 'Module description',
      default: 'Module ' + this.appname
    },
	{
      name: 'module_version',
      message: 'Module description',
      default: '0.0.1'
    },
	{
      name: 'module_date',
      message: 'Module Create Date',
      default: year + '-' + month + '-' + date
    },
	{
      name: 'author_email',
      message: 'Module author email',
      default: 'someone@example.com'
    },
	{
      name: 'author_link',
      message: 'Module author link',
      default: 'http://example.com'
    },
	{
      name: 'author_name',
      message: 'Module author name',
      default: 'Someone'
    }
  ];

  this.prompt(prompts, function (props) {
    this.module_name = props.module_name;
	this.module_fullname = props.module_fullname;
	this.module_description = props.module_description;
	this.module_version = props.module_version;
	this.module_date = props.module_date;
	this.author_email = props.author_email;
	this.author_link = props.author_link;
	this.author_name = props.author_name;
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
  this.mkdir('lang');

  //class
  this.template('class.php', this.module_name + '.class.php');
  this.template('controller.php', this.module_name + '.controller.php');
  this.template('model.php', this.module_name + '.model.php');
  this.template('view.php', this.module_name + '.view.php');
  this.template('admin.controller.php', this.module_name + '.admin.controller.php');
  this.template('admin.model.php', this.module_name + '.admin.model.php');
  this.template('admin.view.php', this.module_name + '.admin.view.php');

  //lang
  this.template('lang/lang.xml', 'lang/lang.xml');

  //conf
  this.template('conf/module.xml', 'conf/module.xml');
  this.template('conf/info.xml', 'conf/info.xml');
};