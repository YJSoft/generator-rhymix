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
    var conf = new Configstore('generator-rhymix',{
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
            message: 'Module Description',
            default: 'Module ' + this.appname
        },
        {
            name: 'module_version',
            message: 'Module Version',
            default: '0.0.1'
        },
        {
            name: 'module_date',
            message: 'Module Create Date',
            default: year + '-' + month + '-' + date
        },
        {
            name: 'author_email',
            message: 'Module Primary Author Email',
            default: conf.get('author_email')
        },
        {
            name: 'author_link',
            message: 'Module Primary Author Link',
            default: conf.get('author_link')
        },
        {
            name: 'author_name',
            message: 'Module Primary Author Name',
            default: conf.get('author_name')
        }
    ];

    this.prompt(prompts, function (props) {
        //config save
        conf.set('author_email',props.author_email);
        conf.set('author_link',props.author_link);
        conf.set('author_name',props.author_name);
        
        //filter some var
        props.module_name = props.module_name.replace(/[^A-Za-z0-9_]/g, "");

        //value set
        this.module_name = props.module_name;
        this.module_funcname = props.module_name.substring(0,1).toLocaleUpperCase() + module_name.substring(1);
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
    this.template('lang/lang.php', 'lang/de.php');
    this.template('lang/lang.php', 'lang/en.php');
    this.template('lang/lang.php', 'lang/es.php');
    this.template('lang/lang.php', 'lang/fr.php');
    this.template('lang/lang.php', 'lang/ja.php');
    this.template('lang/lang.php', 'lang/ko.php');
    this.template('lang/lang.php', 'lang/mn.php');
    this.template('lang/lang.php', 'lang/ru.php');
    this.template('lang/lang.php', 'lang/tr.php');
    this.template('lang/lang.php', 'lang/vi.php');
    this.template('lang/lang.php', 'lang/zh-CN.php');
    this.template('lang/lang.php', 'lang/zh-TW.php');

    //conf
    this.template('conf/module.xml', 'conf/module.xml');
    this.template('conf/info.xml', 'conf/info.xml');

    //tpl
    this.template('tpl/header.html', 'tpl/header.html');
    this.template('tpl/config.html', 'tpl/config.html');
    this.template('tpl/tabex.html', 'tpl/tabex.html');
};