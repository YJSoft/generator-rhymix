<?php
class <%= module_name %>AdminView extends <%= module_name %>
{
	function init()
	{
		$this->setTemplatePath($this->module_path.'tpl');
		$this->setTemplateFile(strtolower(str_replace('disp<%= module_name.substring(0,1).toLocaleUpperCase() + module_name.substring(1) %>Admin', '', $this->act)));
	}

	function disp<%= module_name.substring(0,1).toLocaleUpperCase() + module_name.substring(1) %>AdminConfig()
	{
		$o<%= module_name.substring(0,1).toLocaleUpperCase() + module_name.substring(1) %>Model = getModel('<%= module_name %>');
		$module_config = $o<%= module_name.substring(0,1).toLocaleUpperCase() + module_name.substring(1) %>Model->getConfig();
		Context::set('config', $module_config);
	}

	function disp<%= module_name.substring(0,1).toLocaleUpperCase() + module_name.substring(1) %>AdminTabEx()
	{
		//tab
	}
}
