
		var mySwiper = new Swiper('.swiper-bannner .swiper-container', {
			autoplay: 5000, //可选选项，自动滑动
			pagination: '.swiper-bannner .swiper-pagination',
			autoplayDisableOnInteraction: false,
			effect: 'fade',
			paginationClickable: true,
			loop: true
		})
		var mySwiper = new Swiper('.case-swiper .swiper-container', {
			pagination: '.case-swiper .swiper-pagination',
			effect: 'fade',
			paginationClickable: true,
			loop: true
		})
		var mySwiper = new Swiper('.humanity-swiper .swiper-container', {
			slidesPerView: 2,
			prevButton: '.swiper-button-prev',
			nextButton: '.swiper-button-next',
			loop: true,
			paginationClickable: true,
			breakpoints: {
				768: {
					slidesPerView: 1,
				},
			}
		})
		$('.public-header .search-box').on('click', function () {
			$('.search-container').slideToggle();
		})
		$('.public-header .mobile-menu').on('click', function () {
			$('.public-header .nav').slideToggle();
		})

		function f_render_() {
			var o_element = $('.index-dream .item.active'),
				s_h3 = o_element.attr('data-h3'),
				s_src = o_element.attr('data-src'),
				s_h4 = o_element.attr('data-h4'),
				s_p = o_element.attr('data-p')
			var o_rener_element = $('.index-dream .layout-text');
			o_rener_element.find('h3').text(s_h3)
			o_rener_element.find('img').attr('src',s_src)
			o_rener_element.find('h4').text(s_h4)
			o_rener_element.find('p').text(s_p)
		}
		$('.index-dream .item').on('click',function() {
			$('.index-dream .item').removeClass('active');
			$(this).addClass('active');
			f_render_();
		})


		$('.public-header .nav .child-menu>a').on('click',function () {
			$(this).toggleClass('active').parent().toggleClass('active');
			$(this).siblings('.child').slideToggle();
		})
		window.requestAnimFrame = (function () {
			return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame ||
				function (fn) {
					window.setTimeout(fn, 1000 / 60)
				};
		})();