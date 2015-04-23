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
  var conf = new Configstore('generator-xpressengine',{
      author_email: 'someone@example.com',
      author_link: 'http://example.com',
      author_name: 'Someone'
    });
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

  var prompts = [
	{
      name: 'module_fullname',
      message: 'Layout Name',
      default: this.appname
    },
	{
      name: 'module_description',
      message: 'Layout description',
      default: 'Layout ' + this.appname
    },
	{
      name: 'module_version',
      message: 'Layout version',
      default: '0.0.1'
    },
	{
      name: 'module_date',
      message: 'Layout Create Date',
      default: year + '-' + month + '-' + date
    },
	{
      name: 'author_email',
      message: 'Layout author email',
      default: conf.get('author_email')
    },
	{
      name: 'author_link',
      message: 'Layout author link',
      default: conf.get('author_link')
    },
	{
      name: 'author_name',
      message: 'Layout author name',
      default: conf.get('author_name')
    }
  ];

  this.prompt(prompts, function (props) {
	//config save
	conf.set('author_email',props.author_email);
	conf.set('author_link',props.author_link);
	conf.set('author_name',props.author_name);

	//value set
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
  this.mkdir('css');
  this.mkdir('js');

  //layout file
  this.copy('layout.html', 'layout.html');
  this.copy('layout.css', 'layout.css');
  this.copy('thumbnail.png', 'thumbnail.png');

  //conf
  this.template('conf/info.xml', 'conf/info.xml');
};