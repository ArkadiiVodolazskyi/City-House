
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
