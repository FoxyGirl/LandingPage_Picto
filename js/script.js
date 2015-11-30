	//Слайдер, переключаемый кликом по фото 
		//находим и скрываем вспомогательный элемент
		var prwHelp = document.querySelector('.prw_help');
		prwHelp.classList.add('hide');
		//находим все фото, помещенные в слайдер
		var imgSlider = document.querySelectorAll('.top_preview img');
		//определяем и показываем слайдер
		var slider = document.getElementById('top_preview');
		slider.classList.remove('hide');
		
		//счетчик
		var i = 0;	
		var z;		
		//при клике на слайдере переключаем у изображений класс 'prw-active'  по кругу
		slider.onclick = function() {
			z = i%imgSlider.length;			
			imgSlider[z].classList.toggle('prw-active');
			if (z >= (imgSlider.length-1)) {
				imgSlider[0].classList.toggle('prw-active');
			} else {
			imgSlider[z+1].classList.toggle('prw-active');
			};
			++i;			
		};

		changeSliderWidth();
		window.onresize = changeSliderWidth;
		
		//изменение высоты слайдера, в зависимости от его ширины и ширины окна для адаптивной модели при ширине окна менее 600px
		function changeSliderWidth() {
			if (document.documentElement.clientWidth < 600) {
			slider.style.height = document.documentElement.clientWidth*0.466 + 'px';		
			} else {
			slider.style.height = '280px';
			}
		}
		
		//****************************************
			//автоматический запуск слайдера
			//через 0.5 секунды с интервалом 3 секунды;
			var startTime = 500;
			var stepTime = 3000;
			setTimeout(changeSlaid, startTime);
			//выполняет функцию UpdateTime() 
			//и устанавливает интервал stepTime милисекунд для её повторения
			function changeSlaid() {
				UpdateTime();
				setInterval(UpdateTime, stepTime);
			}
			//производит клик на слайдере
			function UpdateTime() {
				slider.click();
			}
			
		/********************/
	
		/* Scrolling Window*/
		var el = document.getElementById('toTop');	
		//если окно проскроллировано на 50px, показываем кнопку для прокрутки наверх
		el.style.display = (window.pageYOffset > '50' ? 'block' : 'none');		
		window.onscroll = function () {
			el.style.display = (window.pageYOffset > '50' ? 'block' : 'none');
		}	
		//обработчик клика по кнопки прокрутки
		el.addEventListener('click', function(e) {
			e.preventDefault();
			toUp();
		}, false);
		
		//функция прокрутки окна наверх
		function toUp() {
			//переменная скорость тем больше, чем больше промотали вниз
			var speed = window.pageYOffset/10;
			window.scrollBy(0,-speed);
			if (window.pageYOffset > 0) {requestAnimationFrame(toUp);}
			}		
		/********************/	