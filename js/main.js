var btn = document.getElementById('btn');
btn.onclick = function () {
	var text = document.querySelector('p.intro');
	text.classList.add('red');
	var img = document.querySelector('.desktop');
	img.style.display = 'none';
	document.querySelector('.wait-value').style.marginLeft = '100px';
}

$(function () {
	$(window).scroll(function() {
	    $('#train.section-title').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("fadeInLeft");
	        }
	    });
	});
})
	
$(window).scroll(function() {
	    $('.wait-travel').each(function(){
	        var imagePos = $(this).offset().top;

	       var topOfWindow = $(window).scrollTop();
	       if (imagePos < topOfWindow+650) {
	           $(this).addClass("fadeInUp");
	       }
	   });
});