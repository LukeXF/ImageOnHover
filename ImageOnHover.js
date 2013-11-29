// This script created by Equals182 (equals182.com)
// Use it and improve it. Don't forget to pull your requests on https://github.com/Equals182/ImageOnHover
// Please don't erase theese three lines. Thank you.

(function( $ ) {
	$.fn.imageOnHover = function(options) {
		var objects = this;
		
		settings = $.extend( {
		  'zIndex'		: 1000,
		  'maxWidth'	  : '90%',
		  'maxHeight'	 : '90%',
		  'childrenClass' : 'hi182childContainer',
		  'animationTime' : 200,
		  'maxOpacity'	: 1
		}, options);
		var animationTime = settings.animationTime;
		
		$('body').prepend('<div id="hoverHolder182" style="position:fixed; z-index:'+settings.zIndex+';"></div>');
		imgHover182 = $('#hoverHolder182');
		objects.addClass('hi182');
		imgHover182canAnimate = 1;
		lastImgHovered = {};
		
		function goo(contLeft, contTop, contWidth, contHeight, imgRatio, imgWith, imgHeight, move) {
			imgHover182canAnimate = 0;
			
			lastImgHovered['contLeft']=contLeft;
			lastImgHovered['contTop']=contTop;
			lastImgHovered['contWidth']=contWidth;
			lastImgHovered['contHeight']=contHeight;
			lastImgHovered['imgRatio']=imgRatio;
			lastImgHovered['imgWith']=imgWith;
			lastImgHovered['imgHeight']=imgHeight;
			
			var w = contWidth;
			var h = w / imgRatio;
			if(h>contHeight) {
				h = contHeight;
				w = h * imgRatio;
			}
			var l = ( (contWidth - w) / 2 ) + contLeft; 
			var t = ( (contHeight - h) / 2 ) + contTop; 
			
			if(move=='open') {
				imgHover182.css('width',w).css('height',h);
				imgHover182.css('left',l).css('top',t);
				
				var windowHeight = $(window).innerHeight();
				var windowWidth = $(window).innerWidth();
				// Анимируем
				
				var mh = settings.maxHeight;
				if($.type(mh)=='string') {
					mh = parseInt(mh.slice(0,-1));
					if(isNaN(mh)) { mh = 90; }
					mh = windowHeight*mh/100;
				}else if($.type(mh)!='number') {
					mh = 500;
				}
				var maxHeight = mh;
				
				var mw = settings.maxWidth;
				if($.type(mw)=='string') {
					mw = parseInt(mw.slice(0,-1));
					if(isNaN(mw)) { mw = 90; }
					mw = windowWidth*mw/100;
				}else if($.type(mw)!='number') {
					mw = 500;
				}
				var maxWidth = mw;
	
				maxH = maxWidth / imgRatio;
				if(maxH > maxHeight) {
					maxWidth = maxHeight * imgRatio;
				}
				if(imgWith<maxWidth) {
					maxWidth = imgWith;
					maxHeight = maxWidth / imgRatio;
				}
				if(imgHeight<maxHeight) {
					maxHeight = imgHeight;
					maxWidth = maxHeight * imgRatio;
				}
				var finalLeft = (windowWidth - maxWidth) / 2;
				var finalTop = (windowHeight - maxHeight) / 2;
				
				imgHover182.css('display','block');
				var opacity = settings.maxOpacity;
			}else if(move=='close') {
				var maxHeight = h;
				var maxWidth = w;
				var finalLeft = l;
				var finalTop = t;
				var opacity = 0;
			}
			
			imgHover182.stop().animate({'height':maxHeight+"px", 'width':maxWidth+"px", 'left':finalLeft+'px', 'top':finalTop+'px', 'opacity':opacity},animationTime,function() {
				imgHover182canAnimate = 1;
				if(move=='close') {
					imgHover182.css('display','none');
				}
			});
		}
		
		function goo1(a,state) {
			var href = a.attr('href');
			var img = $('<img src="'+href+'"/>').load(function(){
				// Узнаем высоту, ширину и отношение сторон
				var imgWith = this.width;
				var imgHeight = this.height;
				var imgRatio = imgWith/imgHeight;
				// Узнаем позицию и размер содержимого или контейнера
				if(a.find('.'+settings.childrenClass).length>0) {
					var startContainer = a.find('.'+settings.childrenClass).first();
				}else{
					var startContainer = a;
				}
				startContainer = $(startContainer);
				var contWidth = startContainer.innerWidth();
				var contHeight = startContainer.innerHeight();
				var contTop = startContainer.offset().top;
				var contLeft = startContainer.offset().left;
				// Пихаем пикчу в контейнер, но пока делаем невидимой
				imgHover182.html('<img src="'+href+'" class="imgHover" style="max-width:100%;">');
				imgHover182.css('display','none').css('opacity',0);
				goo(contLeft, contTop, contWidth, contHeight, imgRatio, imgWith, imgHeight, state);
			});
		}
		
		$(document).off('mouseover','.hi182');
		$(document).on('mouseover','.hi182',function() {
			if(imgHover182canAnimate == 0) { return false; }
			var a = $(this);
			goo1(a,'open');
		});
		
		$(document).on('mousemove',function(e) {
			if(imgHover182canAnimate == 0) { return false; }
			
			var contLeft = lastImgHovered['contLeft'];
			var contTop = lastImgHovered['contTop'];
			var contWidth = lastImgHovered['contWidth'];
			var contHeight = lastImgHovered['contHeight'];
			var imgRatio = lastImgHovered['imgRatio'];
			var imgWith = lastImgHovered['imgWith'];
			var imgHeight = lastImgHovered['imgHeight'];

			if(contLeft && contTop && contWidth && contHeight && imgRatio) {
				var mx = e.pageX;
				var my = e.pageY;
				if( ( mx < contLeft ) || ( mx > contLeft+contWidth ) || ( my > contTop+contHeight ) || ( my < contTop ) ) {
					goo(contLeft, contTop, contWidth, contHeight, imgRatio, imgWith, imgHeight, 'close');
				lastImgHovered={};
				}
			}
		});
		
	};
})(jQuery);