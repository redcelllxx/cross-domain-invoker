(function($){
	$.extend({
		"invoke":function(target, name, ...args)
		{
			if (name == null || name == "")
			{
				return false;
			}
			
			var data = {};
			data.name = name;
			data.args = args;
			
			if (target == null || target == "" || target == "container")
			{
				window.parent.postMessage(data, "*");
			}
			else
			{
				$("[invoker='" + target + "']")[0].contentWindow.postMessage(data, "*");
			}
		}
	});
})(jQuery);

window.addEventListener("message", function(event){
	var data = event.data;
	if (data.args.length == 0)
	{
		window[data.name]();
	}
	else
	{
		window[data.name].apply(null, data.args);
	}
}, false);