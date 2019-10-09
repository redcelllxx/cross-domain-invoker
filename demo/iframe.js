function dosomething(str1, str2)
{
	alert("function in iframe");
	alert(str1);
	alert(str2);
}

$(document).ready(function()
{
	$.invoke('container','dosomething','arg1','arg2');
});
