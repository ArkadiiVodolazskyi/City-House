
	<?php
		/*
			Template Name: Главная (Home Page)
		*/
	?>

	<?php get_header(); ?>

	<!-- Content start -->
	<section class="banner">
		<div class="blue_stripe"></div>
		<div class="wrapper">
			<div class="text">
				<div class="name loading">
					<svg
						class="loading"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="300 -110 450 160"
						width="1050"
						height="163"
					>
						<text>
							<?= get_field('banner_h1'); ?>
						</text>
					</svg>
				</div>
				<h2 class="loading">
					<?= get_field('banner_h2'); ?>
				</h2>
				<p class="loading">
					<?= get_field('banner_p'); ?>
				</p>
				<div class="angles_button open-request loading">
					<svg class="angle" width="50" height="50"><use xlink:href="<?= B_IMG_DIR; ?>/icons.svg#angle_top_left"></use></svg>
					<button>Подробнее</button>
					<svg class="angle" width="50" height="50"><use xlink:href="<?= B_IMG_DIR; ?>/icons.svg#angle_bottom_right"></use></svg>
				</div>
				<a class="next loading" href="#pros">
					<svg width="43" height="21">
						<use xlink:href="<?= B_IMG_DIR; ?>/icons.svg#arrow_down"></use>
					</svg>
				</a>
			</div>
		</div>
		<div class="banner_image">
			<img src="<?= get_field('banner_img'); ?>" alt="thumb_banner">
		</div>
	</section>

	<section id="pros" class="pros">
		<div class="wrapper">
			<h3>
				<svg
					class="angle"
					width="50"
					height="50"
					data-aos="fade-down-right"
				><use xlink:href="<?= B_IMG_DIR; ?>/icons.svg#angle_top_left"></use></svg>
				Преимущества
				<svg
					class="angle"
					width="50"
					height="50"
					data-aos="fade-up-left"
				><use xlink:href="<?= B_IMG_DIR; ?>/icons.svg#angle_bottom_right"></use></svg>
			</h3>
			<?php
				$pros = get_field('pros');
				$yt_link = get_field('pros_youtube_link');
			?>
			<div class="content">
				<div class="left">
					<div class="gallery">
						<?php foreach($pros as $key => $pro) { ?>
							<img class="<?= $key === 0 ? 'active' : '' ?>" src="<?= $pro['pro_img']; ?>" alt="thumb_pros">
						<?php } ?>
					</div>
					<a href="<?= $yt_link; ?>" class="watch">
						Смотреть видео на
						<svg width="75" height="17"><use xlink:href="<?= B_IMG_DIR; ?>/icons.svg#logo_youtube"></use></svg>
					</a>
				</div>
				<div id="pros_list" class="right">
					<ul>
						<?php foreach($pros as $key => $pro) { ?>
							<li class="<?= $key === 0 ? 'active' : '' ?>" data-aos="flip-up" data-aos-easing="linear" data-aos-duration="200">
								<?= $pro['pro_text']; ?>
							</li>
						<?php } ?>
					</ul>
				</div>
			</div>
		</div>
	</section>

	<section id="security" class="security">
		<svg
			class="figure_house"
			width="620"
			height="414"
			data-aos="draw_building"
		><use xlink:href="<?= B_IMG_DIR; ?>/icons.svg#figure_house"></use></svg>
		<div class="wrapper">
			<h3>
				<svg
					class="angle"
					width="50"
					height="50"
					data-aos="fade-down-right"
				><use xlink:href="<?= B_IMG_DIR; ?>/icons.svg#angle_top_left"></use></svg>
				Безопасность
				<svg
					class="angle"
					width="50"
					height="50"
					data-aos="fade-up-left"
				><use xlink:href="<?= B_IMG_DIR; ?>/icons.svg#angle_bottom_right"></use></svg>
			</h3>
			<div class="content">
				<div class="left">
					<div id="security_cards" class="cards">

						<?php
							$cards = get_field('security_cards');
							foreach($cards as $key => $card) { ?>
							<div
								class="card"
								data-aos="flip-left"
								data-aos-anchor="#security_cards"
								data-aos-delay="<?= $key*50 ?>"
							>
								<img src="<?= $card['security_img']; ?>" alt="security_card">
								<h5>
									<?= $card['security_text']; ?>
								</h5>
							</div>
						<?php } ?>

					</div>
				</div>
				<div class="right">
					<img src="<?= get_field('security_thumb'); ?>" alt="thumb_security" data-aos="fade-left" data-aos-anchor="#security_cards" data-aos-delay="100">
				</div>
			</div>
		</div>
	</section>

	<section id="planning" class="planning">
		<div class="wrapper">
			<h3>
				<svg
					class="angle"
					width="50"
					height="50"
					data-aos="fade-down-right"
				><use xlink:href="<?= B_IMG_DIR; ?>/icons.svg#angle_top_left"></use></svg>
				Планировки
				<svg
					class="angle"
					width="50"
					height="50"
					data-aos="fade-up-left"
				><use xlink:href="<?= B_IMG_DIR; ?>/icons.svg#angle_bottom_right"></use></svg>
			</h3>
			<div id="plan_map" class="plan_map">
				<img class="plan" src="<?= get_field('plan_big'); ?>" alt="plan_map">
				<img class="plan_mobile" src="<?= get_field('plan_small'); ?>" alt="plan_map">
				<div class="plan_markers">
					<svg>
						<linearGradient id="marker_round" x1="30" y1="42.1875" x2="30" y2="15.8203" gradientUnits="userSpaceOnUse">
							<stop stop-color="#FFF2C3"/>
							<stop offset="0.9973" stop-color="#F0FFF4"/>
						</linearGradient>
					</svg>

					<?php
						$markers = get_field('houses_map');

						foreach($markers as $key => $marker) {
							$house_name = $marker['house_name'];
							if (wp_is_mobile()) {
								$left = $marker['house_marker_small']['house_marker_small_left'];
								$top = $marker['house_marker_small']['house_marker_small_top'];
							} else {
								$left = $marker['house_marker_big']['house_marker_big_left'];
								$top = $marker['house_marker_big']['house_marker_big_top'];
							}
					?>
						<button
							data-aos="fade-down"
							data-aos-delay="<?= $key*100; ?>"
							data-aos-anchor="#plan_map"
							class="marker upper"
							data-marker="<?= $key; ?>"
							style="left: <?= $left; ?>%; top: <?= $top; ?>%;">
							<svg width="60" height="90" viewBox="0 0 60 90" fill="none" xmlns="http://www.w3.org/2000/svg">
								<defs>
									<linearGradient id="marker_<?= $key; ?>" x1="30" y1="90" x2="30" y2="0" gradientUnits="userSpaceOnUse">
										<stop stop-color="#19493E"/>
										<stop offset="1" stop-color="#C3E2DB"/>
									</linearGradient>
								</defs>
								<path d="M30 0C14.0072 0 0.996094 13.0112 0.996094 29.0039C0.996094 50.6869 26.7512 87.3367 27.8476 88.8863C28.3417 89.5848 29.1443 90 30 90C30.8557 90 31.6583 89.5848 32.1524 88.8863C33.2488 87.3367 59.0039 50.6869 59.0039 29.0039C59.0039 13.0112 45.9928 0 30 0Z" fill="url(#marker_<?= $key; ?>)"/>
								<path d="M30 42.1875C37.2811 42.1875 43.1836 36.285 43.1836 29.0039C43.1836 21.7228 37.2811 15.8203 30 15.8203C22.7189 15.8203 16.8164 21.7228 16.8164 29.0039C16.8164 36.285 22.7189 42.1875 30 42.1875Z" fill="url(#marker_round)"/>
							</svg>
							<h5>
								<?= $house_name; ?>
							</h5>
						</button>
					<?php } ?>
				</div>
			</div>
		</div>
	</section>

	<section class="plan_pros">
		<div class="wrapper">

			<?php
				$map_pros = get_field('map_pros');

				foreach($map_pros as $key => $map_pro) {
					$img = $map_pro['img'];
					$text = $map_pro['text'];
			?>
				<div class="card" data-aos="fade-up" data-aos-delay="<?= $key*50; ?>">
					<img src="<?= $img; ?>" alt="ico_plan_pro">
					<p>
						<?= $text; ?>
					</p>
				</div>
			<?php } ?>

		</div>
	</section>

	<section id="estate" class="estate">
		<div class="wrapper">
			<div class="left">
				<h3>
					<svg
						class="angle"
						width="50"
						height="50"
						data-aos="fade-down-right"
					><use xlink:href="<?= B_IMG_DIR; ?>/icons.svg#angle_top_left"></use></svg>
					Коммерческая<br>
					недвижимость
					<svg
						class="angle"
						width="50"
						height="50"
						data-aos="fade-up-left"
					><use xlink:href="<?= B_IMG_DIR; ?>/icons.svg#angle_bottom_right"></use></svg>
				</h3>
				<p>
					<?= get_field('estate_text'); ?>
				</p>
				<div class="angles_button open-request">
					<svg class="angle" width="50" height="50"><use xlink:href="<?= B_IMG_DIR; ?>/icons.svg#angle_top_left"></use></svg>
					<button>Подробнее</button>
					<svg class="angle" width="50" height="50"><use xlink:href="<?= B_IMG_DIR; ?>/icons.svg#angle_bottom_right"></use></svg>
				</div>
			</div>
			<div class="right">
				<img src="<?= get_field('estate_thumb'); ?>" alt="thumb_estate">
			</div>
		</div>
	</section>

	<section id="structure" class="structure">
		<div class="wrapper">
			<div class="left">
				<div id="map"></div>
			</div>
			<div class="right">
				<h3>
					<svg
						class="angle"
						width="50"
						height="50"
						data-aos="fade-down-right"
					><use xlink:href="<?= B_IMG_DIR; ?>/icons.svg#angle_top_left"></use></svg>
					Инфраструктура
					<svg
						class="angle"
						width="50"
						height="50"
						data-aos="fade-up-left"
					><use xlink:href="<?= B_IMG_DIR; ?>/icons.svg#angle_bottom_right"></use></svg>
				</h3>
				<div class="places">

					<ul class="types">
						<?php
							$structures = get_field('structure');

							foreach($structures as $key => $structure) {
								$icon = $structure['type']['icon'];
								$name = $structure['type']['name'];
						?>
							<li class="<?= $key === 0 ? 'active' : ''; ?>" data-type="<?= $key; ?>">
								<?= file_get_contents($icon); ?>
								<span>
									<?= $name; ?>
								</span>
							</li>
						<?php } ?>
					</ul>

					<ul class="addresses">
						<?php
							$structures = get_field('structure');
							foreach($structures as $key => $structure) {
								$addresses = $structure['addresses'];
						?>
							<li class="<?= $key === 0 ? 'active' : ''; ?>" data-type="<?= $key; ?>">
								<?php
									$structures = get_field('structure');
									foreach($addresses as $address) {
								?>
									<div class="item">
										<?= $address['title']; ?>
									</div>
								<?php } ?>
							</li>
						<?php } ?>
					</ul>
				</div>
			</div>
		</div>
	</section>

	<section id="gallery" class="gallery">
		<div class="wrapper">

			<h3>
				<svg
					class="angle"
					width="50"
					height="50"
					data-aos="fade-down-right"
				><use xlink:href="<?= B_IMG_DIR; ?>/icons.svg#angle_top_left"></use></svg>
				Галерея
				<svg
					class="angle"
					width="50"
					height="50"
					data-aos="fade-up-left"
				><use xlink:href="<?= B_IMG_DIR; ?>/icons.svg#angle_bottom_right"></use></svg>
			</h3>

			<div class="slider">
				<button class="slick-prev hs1 slick-disabled">
					<svg width="26" height="44">
						<use class="arrow_left" xlink:href="<?= B_IMG_DIR; ?>/icons.svg#arrow_left"></use>
					</svg>
				</button>

				<div class="toSlick" data-type="hs1">
					<?php
						$main_images = get_field('main_gallery');
						foreach($main_images as $key => $image) {
					?>
						<div class="slide">
							<a href="<?= $image; ?>" data-lightbox="gallery_image" class="zoomIn">
								<svg width="24" height="24">
									<use xlink:href="<?= B_IMG_DIR; ?>/icons.svg#loupe"></use>
								</svg>
							</a>
							<img src="<?= $image; ?>" alt="gallery_image">
						</div>
					<?php } ?>
				</div>

				<button class="slick-next hs1">
					<svg width="26" height="44">
						<use class="arrow_right" xlink:href="<?= B_IMG_DIR; ?>/icons.svg#arrow_right"></use>
					</svg>
				</button>
			</div>

		</div>
	</section>

	<section id="ment" class="ment">
		<div class="left">
			<p>
				<?= get_field('ment_title'); ?>
			</p>
			<img src="<?= get_field('ment_thumb_left'); ?>" alt="thumb_installment">
		</div>
		<div class="right">
			<img src="<?= get_field('ment_thumb_right'); ?>" alt="installment_bg">
			<div class="content">
				<div class="text">
					<p>
						<?= get_field('ment_text'); ?>
					</p>
					<div class="percents">
						<?php
							$percents = get_field('precents');
							foreach($percents as $percent) {
						?>
							<div class="percent">
								<svg
									class="angle"
									width="50"
									height="50"
									data-aos="fade-down-right"
								><use xlink:href="<?= B_IMG_DIR; ?>/icons.svg#angle_top_left"></use></svg>
								<?= $percent['percent']; ?><sup>%</sup>
								<svg
									class="angle"
									width="50"
									height="50"
									data-aos="fade-up-left"
								><use xlink:href="<?= B_IMG_DIR; ?>/icons.svg#angle_bottom_right"></use></svg>
							</div>
						<?php } ?>
					</div>
				</div>
				<?php echo do_shortcode( '[contact-form-7 id="88" title="Первый взнос"]' ); ?>
			</div>
		</div>
	</section>
	<!-- Content end -->

	<?php get_footer(); ?>
