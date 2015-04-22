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
      message: 'Addon ID',
      default: this.appname
    },
	{
      type: 'list',
      name: 'called_position',
      message: 'Called Position',
      choices: [{
          name: 'before_module_init',
          checked: true
        },
        'before_module_proc',
        'after_module_proc',
        'before_display_content'
      ]
    },
	{
      name: 'module_fullname',
      message: 'Addon Name',
      default: this.appname
    },
	{
      name: 'module_description',
      message: 'Addon description',
      default: 'Addon ' + this.appname
    },
	{
      name: 'module_version',
      message: 'Addon version',
      default: '0.0.1'
    },
	{
      name: 'module_date',
      message: 'Addon Create Date',
      default: year + '-' + month + '-' + date
    },
	{
      name: 'author_email',
      message: 'Addon author email',
      default: 'someone@example.com'
    },
	{
      name: 'author_link',
      message: 'Addon author link',
      default: 'http://example.com'
    },
	{
      name: 'author_name',
      message: 'Addon author name',
      default: 'Someone'
    }
  ];

  this.prompt(prompts, function (props) {
    this.module_name = props.module_name;
	this.called_position = props.called_position;
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

  //addon file
  this.template('addon.php', this.module_name + '.addon.php');

  //conf
  this.template('conf/info.xml', 'conf/info.xml');
};