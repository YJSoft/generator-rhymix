<?php
class <%= module_name %>AdminView extends <%= module_name %>
{
	function init()
	{
		$this->setTemplatePath($this->module_path.'tpl');
		$this->setTemplateFile(strtolower(str_replace('disp<%= module_name.substring(0,1).toLocaleUpperCase() + module_name.substring(1) %>Admin', '', $this->act)));
	}

	function disp<%= module_funcname %>AdminConfig()
	{
		$o<%= module_funcname %>Model = getModel('<%= module_name %>');
		$module_config = $o<%= module_funcname %>Model->getConfig();
		Context::set('config', $module_config);
	}

	function disp<%= module_funcname %>AdminTabEx()
	{
		//tab
	}
}
