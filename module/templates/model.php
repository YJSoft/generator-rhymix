<?php
class <%= module_name %>Model extends <%= module_name %>
{
	function init()
	{
	}

	/**
	 * @return Object config object
	 * @notice this function saves config object to private value $config.
	 */
	function getConfig()
	{
		$oModuleModel = getModel('module');
		$config = $oModuleModel->getModuleConfig('<%= module_name %>');

		return $config;
	}
}
