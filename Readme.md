
# To fix
- добавить интерактивность секций на попап
- плавность изменения активных слайдов в галерее
	- пока не получилось изменить default поведение кнопки по тому же принципу, что и клик по слайдам - т.е. изменять ширину слайда и двигать tape после задержки
- заблокировать разворот (ландшафтный режим) на мобильном

# Questions

# Complile sass
node-sass -w --sourcemap=none --no-cache --output-style=compact docs/sass/main.sass docs/css/main.css

# SVG Gradient
	<svg class="gradient" width="120" height="120">
		<linearGradient id="gradient" x1="50%" y1="0%" x2="50%" y2="100%" gradientUnits="userSpaceOnUse">
			<stop stop-color="var(--grad-col1)"/>
			<stop offset="1" stop-color="var(--grad-col2)"/>
		</linearGradient>
		<use xlink:href="./img/icons.svg#app"></use>
	</svg>

	.gradient
		--grad-col1: #{$lblueB}
		--grad-col2: #{$dblueB}
		&:hover
			--grad-col1: #{$yellow}
			--grad-col2: #{$orange}

# Section header
	<h3>
		<svg
			class="angle"
			width="50"
			height="50"
			data-aos="fade-down-right"
		><use xlink:href="./img/icons.svg#angle_top_left"></use></svg>
		Преимущества
		<svg
			class="angle"
			width="50"
			height="50"
			data-aos="fade-up-left"
		><use xlink:href="./img/icons.svg#angle_bottom_right"></use></svg>
	</h3>

# Animation ideas
- Logo - появление частей изнутри-наружу
- Перетекание углов
- Улучшить анимацию появления здания в секции Безопасность

<div class="toSlick" data-type="hs1" data-mobile="false">
	<div class="slide">
		<div class="child">
			<a href="./img/gallery_1.png" data-lightbox="gallery_image" class="zoomIn">
				<svg width="24" height="24">
					<use xlink:href="./img/icons.svg#loupe"></use>
				</svg>
			</a>
			<img src="./img/gallery_1.png" alt="gallery_image">
		</div>
	</div>
	<div class="slide">
		<div class="child">
			<a href="./img/gallery_2.png" data-lightbox="gallery_image" class="zoomIn">
				<svg width="24" height="24">
					<use xlink:href="./img/icons.svg#loupe"></use>
				</svg>
			</a>
			<img src="./img/gallery_2.png" alt="gallery_image">
		</div>
	</div>
	<div class="slide">
		<div class="child">
			<a href="./img/gallery_1.png" data-lightbox="gallery_image" class="zoomIn">
				<svg width="24" height="24">
					<use xlink:href="./img/icons.svg#loupe"></use>
				</svg>
			</a>
			<img src="./img/gallery_1.png" alt="gallery_image">
		</div>
	</div>
	<div class="slide">
		<div class="child">
			<a href="./img/gallery_2.png" data-lightbox="gallery_image" class="zoomIn">
				<svg width="24" height="24">
					<use xlink:href="./img/icons.svg#loupe"></use>
				</svg>
			</a>
			<img src="./img/gallery_2.png" alt="gallery_image">
		</div>
	</div>
	<div class="slide">
		<div class="child">
			<a href="./img/gallery_1.png" data-lightbox="gallery_image" class="zoomIn">
				<svg width="24" height="24">
					<use xlink:href="./img/icons.svg#loupe"></use>
				</svg>
			</a>
			<img src="./img/gallery_1.png" alt="gallery_image">
		</div>
	</div>
	<div class="slide">
		<div class="child">
			<a href="./img/gallery_2.png" data-lightbox="gallery_image" class="zoomIn">
				<svg width="24" height="24">
					<use xlink:href="./img/icons.svg#loupe"></use>
				</svg>
			</a>
			<img src="./img/gallery_2.png" alt="gallery_image">
		</div>
	</div>
</div>