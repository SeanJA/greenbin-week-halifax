/* Author: 

*/
jQuery.jQueryRandom = 0;
jQuery.extend(jQuery.expr[":"],
{
    random: function(a, i, m, r) {
        if (i == 0) {
            jQuery.jQueryRandom = Math.floor(Math.random() * r.length);
        };
        return i == jQuery.jQueryRandom;
    }
});



$().ready(function(){
	$('#new-tip').click(function(e){
		e.preventDefault();
		$('#greenbin-tips li').hide();
		$('#greenbin-tips li:random').show();
	});
	$('#greenbin-tips li:random').show();
});




















