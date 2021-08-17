	<footer id="footer">
		<div class="wrapper">

			<div class="top">
				<div class="wrapper">
					<div class="logo_wrapper">
						<a href="#" class="logo_kadorrcity">
							<svg class="icon" width="79" height="69">
								<use xlink:href="<?= B_IMG_DIR; ?>/icons.svg#logo_kadorr"></use>
							</svg>
							<div class="text">
								<h1>Kadorr City</h1>
								<p>Официальный парнёр</p>
							</div>
						</a>
					</div>
					<div class="contacts">
						<div class="phones">
							<svg width="24" height="24">
								<use xlink:href="<?= B_IMG_DIR; ?>/icons.svg#phone"></use>
							</svg>
							<?php
								$phone = str_replace(str_split(' ()+-'), '', get_field('phone', 'options'));
							?>
							<a href="tel:<?= $phone; ?>">
								<?= get_field('phone', 'options'); ?>
							</a>
						</div>
						<div class="address">
							<svg class="stroke" width="49" height="49">
								<use xlink:href="<?= B_IMG_DIR; ?>/icons.svg#location"></use>
							</svg>
							<div>
								<p>
									<?= get_field('address', 'options'); ?>
								</p>
							</div>
						</div>
						<div class="schedule">
							<svg class="stroke" width="43" height="43">
								<use xlink:href="<?= B_IMG_DIR; ?>/icons.svg#calendar"></use>
							</svg>
							<div>
								<span>Работаем:</span>
								<p>
									<?= get_field('schedule', 'options'); ?>
								</p>
							</div>
						</div>
					</div>
					<nav>
						<ul class="nav_list">
							<?php while ( have_rows('header_links', 'options')): the_row();
								$main_link = get_sub_field('link');
							?>
								<li class="nav_item">
									<a class="nav_link" href="<?= $main_link['url']; ?>">
										<?= $main_link['title']; ?>
									</a>
								</li>
							<?php endwhile; ?>
						</ul>
					</nav>
				</div>
			</div>

			<div class="bottom">
				<div class="copyright">© City House 2018-2021</div>
				<div class="socials">
					<?php while ( have_rows('socials', 'options')): the_row();
						$type = get_sub_field('social_type');
						$link = get_sub_field('social_link');
						if ($type == 'telegram') {
							$link = 'https://telegram.me/' . $link;
						}
					?>
						<a href="<?= $link; ?>">
							<svg width="24" height="24">
								<use xlink:href="<?= B_IMG_DIR; ?>/icons.svg#<?= get_sub_field('social_type'); ?>"></use>
							</svg>
						</a>
					<?php endwhile; ?>
				</div>
				<div class="development">
					<p>Создание сайта  —</p>
					<a href="https://devpro.agency/">
						<svg class="native" viewBox="5 6 94 26" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path fill-rule="evenodd" clip-rule="evenodd" d="M84.6437 11.1747H80.4319V9.97132H84.6585C84.9972 9.95682 85.2623 10.2178 85.277 10.5512C85.2917 10.8847 85.0266 11.1602 84.6879 11.1747C84.6732 11.1747 84.6585 11.1747 84.6437 11.1747ZM84.9383 7.5791H78.1934V17.2785H80.6528V13.6394H83.716L85.5568 17.2785H88.0162L86.0575 13.4364C87.1326 13.016 88.0162 11.7546 88.0162 10.6092C88.0014 8.94194 86.6318 7.5791 84.9383 7.5791ZM74.2172 11.1747H69.9907V9.97132H74.2172C74.556 9.95682 74.821 10.2178 74.8358 10.5512C74.8505 10.8847 74.5854 11.1602 74.2467 11.1747C74.2467 11.1747 74.232 11.1747 74.2172 11.1747ZM93.627 14.8282C92.2722 14.8282 91.1824 13.7409 91.1824 12.407C91.1824 11.0732 92.2722 9.98582 93.627 9.98582C94.9819 9.98582 96.0717 11.0732 96.0717 12.407C96.0717 13.7554 94.9819 14.8282 93.627 14.8282ZM93.6123 7.5791C90.9026 7.5936 88.723 9.75384 88.723 12.4215C88.7378 15.0892 90.932 17.2495 93.6418 17.235C96.3367 17.2205 98.531 15.0602 98.531 12.407C98.531 9.73935 96.322 7.5791 93.6123 7.5791ZM74.3351 7.5791H67.5902V17.2785H70.0496V13.6394H74.3498C76.0434 13.6394 77.4129 12.2765 77.4129 10.6092C77.3982 8.94194 76.0286 7.5791 74.3351 7.5791ZM57.2815 24.9625L53.1728 14.1033H49.064L55.2345 30.3994H59.3433L65.5138 14.1033H61.405L57.2815 24.9625ZM31.3184 30.3994H47.7534V26.3254H35.4271V24.2956H47.7534V20.2071H35.4271V18.1773H47.7534V14.1033H31.3184V30.3994Z" fill="#7C7D82"/>
							<path d="M5.96387 7.59717V14.0634H17.5538C20.3224 14.0634 22.5609 16.2816 22.5609 19.0073C22.5609 21.733 20.3224 23.9512 17.5538 23.9512L9.91062 23.9802V30.4175H17.5685C23.9599 30.3885 29.129 25.2706 29.0995 18.9638C29.0701 12.7006 23.9304 7.64066 17.5685 7.61167H5.96387V7.59717Z" fill="url(#paint0_linear)"/>
							<path d="M9.92578 17.9634V20.0511H17.5542C18.1285 20.0221 18.5704 19.5582 18.5704 18.9928C18.5704 18.4418 18.1285 17.9779 17.5542 17.9634H9.92578Z" fill="url(#paint1_linear)"/>
							<defs>
								<linearGradient id="paint0_linear" x1="25.114" y1="28.7253" x2="7.5756" y2="8.72724" gradientUnits="userSpaceOnUse">
								<stop stop-color="#F5C840"/>
								<stop offset="0.5" stop-color="#FA50A8"/>
								<stop offset="1" stop-color="#2A3ED7"/>
								</linearGradient>
								<linearGradient id="paint1_linear" x1="23.7927" y1="29.8773" x2="6.26445" y2="9.89071" gradientUnits="userSpaceOnUse">
								<stop stop-color="#F5C840"/>
								<stop offset="0.5" stop-color="#FA50A8"/>
								<stop offset="1" stop-color="#2A3ED7"/>
								</linearGradient>
							</defs>
						</svg>
					</a>
				</div>
			</div>

		</div>
	</footer>

	<!-- Libraries JS -->
	<script src="<?= B_JS_DIR; ?>/libs/jquery-3.5.1.min.js"></script>
	<script src="<?= B_JS_DIR; ?>/libs/slick.min.js"></script>
	<script src="<?= B_JS_DIR; ?>/libs/aos.js"></script>
	<script src="<?= B_JS_DIR; ?>/libs/lightbox/js/lightbox.js"></script>
	<script src="<?= B_JS_DIR; ?>/libs/jquery.maskedinput.min.js" defer></script>

	<!-- Google Maps API -->
	<script>
		function initMap() {
		const coordinates = [
			<?php
				$structures = get_field('structure');
				foreach($structures as $structure) {
					echo "[\n";
						$addresses = $structure['addresses'];
						foreach($addresses as $address) {
							echo '[' . $address['lat'] . ', ' . $address['lng'] . '],' . "\n\t\t\t";
						}
					echo "],\n\t";
				}
			?>
		];

		const center = {
			lat: coordinates[0][0][0],
			lng: coordinates[0][1][1]
		};

		const map = new google.maps.Map(document.querySelector("#map"), {
			center: center,
			zoom: 14,
			disableDefaultUI: false,
			scrollwheel: false,
		});

		const markers = [];

		for (let i = 0; i < coordinates.length; i++) {
			markers.push([]);

			for (let j = 0; j < coordinates[i].length; j++) {
				const lat = coordinates[i][j][0];
				const lng = coordinates[i][j][1];

				const marker = new google.maps.Marker({
					position: {
						lat: lat,
						lng: lng
					},
					map: map,
					label: {
						text: `0${j + 1}`,
						fontSize: "24px",
						fontFamily: 'Gilroy',
						className: "marker_label"
					},
					icon: {
						url: '<?= B_IMG_DIR; ?>/img_shared/map_marker.svg',
						labelOrigin: new google.maps.Point(15,-15)
					},
					animation: google.maps.Animation.DROP
				});

				marker.setVisible(false);

				markers[i].push(marker);
			}
		}

		// Markers init
		for (let k = 0; k < markers[0].length; k++) {
			markers[0][k].setVisible(true);
		}

		// Toggle places
		(function() {
			const placesTypes = document.querySelectorAll('section.structure .types li');
			const prosAddresses = document.querySelectorAll('section.structure .addresses li');

			// Init
			let curPlace = 0;

			for (let i = 0; i < placesTypes.length; i++) {
				placesTypes[i].addEventListener('mouseover', (e) => {
					placesTypes[curPlace].classList.remove('active');
					prosAddresses[curPlace].classList.remove('active');
					for (let j = 0; j < markers[curPlace].length; j++) {
						markers[curPlace][j].setVisible(false);
					}

					curPlace = placesTypes[i].getAttribute('data-type');
					placesTypes[curPlace].classList.add('active');
					prosAddresses[curPlace].classList.add('active');
					for (let j = 0; j < markers[curPlace].length; j++) {
						markers[curPlace][j].setVisible(true);
					}
				}, true);
			}
		})();
	}
	</script>

<script src="https://maps.googleapis.com/maps/api/js?key=<?= get_field('gmaps_key', 'options'); ?>&callback=initMap" defer></script>

	<!-- Custom JS -->
	<script src="<?= B_JS_DIR; ?>/main.js" defer></script>

	<?php wp_footer(); ?>
</body>
</html>