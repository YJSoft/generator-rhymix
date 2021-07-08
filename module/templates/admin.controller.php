<?php
class <%= module_name %>AdminController extends <%= module_name %>
{
	function init()
	{
	}

	function proc<%= module_funcname %>AdminInsertConfig()
	{
		$vars = Context::getRequestVars();

		$oModuleController = getController('module');
		$oModuleController->updateModuleConfig('<%= module_name %>', $vars);
		if(!in_array(Context::getRequestMethod(),array('XMLRPC','JSON')))
		{
			$returnUrl = Context::get('success_return_url') ? Context::get('success_return_url') : getNotEncodedUrl('', 'module', 'admin', 'act', 'disp<%= module_name.substring(0,1).toLocaleUpperCase() + module_name.substring(1) %>AdminConfig');
			header('location: ' . $returnUrl);
			return;
		}
	}
}
