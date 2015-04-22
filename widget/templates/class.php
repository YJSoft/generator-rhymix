<?php
class <%= module_name %> extends WidgetHandler
{
	function proc($args)
	{
		// Set a path of the template skin (values of skin, colorset settings)
		$tpl_path = sprintf('%sskins/%s', $this->widget_path, $args->skin);
		$tpl_file = '<%= module_name %>';

		Context::set('colorset', $args->colorset);

		// Compile a template
		$oTemplate = &TemplateHandler::getInstance();
		return $oTemplate->compile($tpl_path, $tpl_file);
	}
}
/* End of file <%= module_name %>.class.php */
/* Location: ./widgets/<%= module_name %>/<%= module_name %>.class.php */