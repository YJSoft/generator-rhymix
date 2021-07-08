<?php
class <%= module_name %>Model extends <%= module_name %>
{
	function init()
	{
	}

	/**
	 * @return Object config object
	 * @notice this function load module config object from db.
	 */
	function getConfig()
	{
		return ModuleModel::getModuleConfig('<%= module_name %>');
	}
}