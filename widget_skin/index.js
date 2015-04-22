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
  if (month<10)
  {
	  month = '0' + month;
  }
  var date = d.getDate();
  if (date<10)
  {
	  date = '0' + date;
  }

  var prompts = [{
      name: 'module_name',
      message: 'Widget name',
      default: this.appname
    },
	{
      name: 'module_fullname',
      message: 'Widget skin name',
      default: this.appname
    },
	{
      name: 'module_description',
      message: 'Widget skin description',
      default: 'Widget skin for ' + this.appname + ' widget'
    },
	{
      name: 'module_version',
      message: 'Widget skin version',
      default: '0.0.1'
    },
	{
      name: 'module_date',
      message: 'Widget skin Create Date',
      default: year + '-' + month + '-' + date
    },
	{
      name: 'author_email',
      message: 'Widget skin author email',
      default: 'someone@example.com'
    },
	{
      name: 'author_link',
      message: 'Widget skin author link',
      default: 'http://example.com'
    },
	{
      name: 'author_name',
      message: 'Widget skin author name',
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
  this.mkdir('css');
  this.mkdir('js');

  //addon file
  this.template('skin.html', this.module_name + '.html');

  //conf
  this.template('skin.xml', 'skin.xml');
};