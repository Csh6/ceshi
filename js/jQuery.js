
$(document).ready(function()
	{
		alert("hello word!");
	}
 )
$(document).keypress(function(){
    if(event.keyCode==13)
    {
        confirm("确定要检查吗？");
    }
})
// $(document).ready(function()
//     {
//         alert("hello word!");
//     }
// )
$(document).ready(function()
{
	$("#div2").css("width","1000px");
	$("#div2").click(function()
	{
		console.log("点击事件");
		$("#div2").after($("<p>"+"<h1>解答：</h1>"+"是一个jQuery库；"+
	"极大地简化了JavaScript编程；"+"容易学习" +"</p>"));
	})
	$("#div2").click(function () {
		$("#div2").hide();
    })
	$("#div2").css("background-color","red");
	$("*").css("color","blue");
	$(document).click(function()
	{
		console.log("点击事件");
		$("p").css("color","deepskyblue");
	})
	$(document).click(function()
	{
		$("tr:even").css("background-color","pink");
		$("tr:odd").css("background-color","yellow");
	})
	
//	var content = $("#div3").html();
//	console.log(content);
//	$("#div2").after($("<p>"+"<h1>解答：</h1>"+"是一个jQuery库；"+
//	"极大地简化了JavaScript编程；"+"容易学习" +"</p>"));
})



