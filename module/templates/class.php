<?php
class <%= module_name %> extends ModuleObject
{
	private $triggers = array();

	function moduleInstall()
	{
		$oModuleController = getController('module');

		foreach($this->triggers as $trigger)
		{
			$oModuleController->insertTrigger($trigger[0], $trigger[1], $trigger[2], $trigger[3], $trigger[4]);
		}

		return new Object();
	}

	function checkUpdate()
	{
		$oModuleModel = getModel('module');

		foreach($this->triggers as $trigger)
		{
			if(!$oModuleModel->getTrigger($trigger[0], $trigger[1], $trigger[2], $trigger[3], $trigger[4]))
			{
				return true;
			}
		}

		return false;
	}

	function moduleUpdate()
	{
		$oModuleModel = getModel('module');
		$oModuleController = getController('module');

		foreach($this->triggers as $trigger)
		{
			if(!$oModuleModel->getTrigger($trigger[0], $trigger[1], $trigger[2], $trigger[3], $trigger[4]))
			{
				$oModuleController->insertTrigger($trigger[0], $trigger[1], $trigger[2], $trigger[3], $trigger[4]);
			}
		}

		return new Object(0, 'success_updated');
	}

	function moduleUninstall()
	{
		return new Object();
	}

	function recompileCache()
	{
		return new Object();
	}
}
