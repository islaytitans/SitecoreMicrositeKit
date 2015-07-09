var ww = ww || {};

(function ($) {
	ww.inYourArea = {
		containerClass: '.resp-tab-accord',
		clickTrigger: '.title',
		contentClass: '.content-wrap',
		openClass: 'js-open',
		closedClass: 'js-closed',
		hiddenContent: '.hidden-content',
		bodyClass: $('body').attr('class'),
		idPrefix: 'cid',
		tabLoadCompleted: 'undefined',
		setIntervalTime: 500,
		postcodeSection: '.postcode-lookup',
		postcodeSectionError: '.postcode-lookup .error',
		autoPostcodeAdded: 'undefined',
		noMap: '.GetWaterQuality',
		postcodeLat: 'undefined',
		postcodeLng: 'undefined',
		searchZoomLevel: 'undefined',
		maxRecordsAllowed: 'undefined',
		dictionaryItemsLoaded: 'undefined',
		invalidPostcodeDictionary: '',
		googleLoadErrorDictionary: '',
		latestUpdatesDictionary: '',
		moreInfoDictionary: '',
		loadingDictionary: '',
		noRecordsDictionary: '',
		startDictionary: '',
		endDictionary: '',
		closeDictionary: '',
		currentSearch: '',
		currentFilter: undefined,
		ganalyticsCallback: 'undefined',
		prePopulatedLocation: ww.cookie.value('UserAddress'),
		prePopulatedInput: true,
		emergencyOpen: false,
		exsistingBounds: undefined,

		init: function () {
			
			// add class to page header to style just for IYA
			$('.page_hd').addClass('IYA');

			// hide extra content
			// convert to array
			var nomap = ww.inYourArea.noMap.replace(/\s/g, '').split(',');
			// look through array and hide
			$.each(nomap, function () {
				var content = this + '-content';
				$(content).each(function () {
					if ($(this).length > 0) {
						$(this).hide();
					}
				});
			});

			
			// user prepopulated location 
			if (this.prePopulatedLocation !== false && $.trim($(this.postcodeSection).find('input.postcode').val()).length === 0) {
				// if its used TC cookie setter it may have multiple locations, get the last
				var locationArray = this.prePopulatedLocation.split('&'),
						location = locationArray[locationArray.length - 1];

				ww.inYourArea.prePopulatedInput = false;

				// update the cookie with user location to correctly match
								ww.cookie.update('UserAddress', location, 28);
				// update input
				$(this.postcodeSection).find('input.postcode').val(location);
			}

			// get dictionary items
			this.dictionaryItems();
			// move promo panel if on mobile
			this.promoPanelMoveOnMobile();

		},
		
		// This section will not work unless gmap API has been loaded successfully
		gmapDependant: function () {
						// if there is already content in the postcode entry then run the update as it accounts for towns too
			if ($(this.postcodeSection).find('input.postcode').val().length > 0) {
								this.updateFromSearch();
			} else {
				this.postcodeLookup();
			}
			this.createMap();
			this.searchButtonSubmit();
		},

		dictionaryItems: function () {
			$.ajax({
				cache: false,
				url: '/api/InYourArea/GetLabels',
				dataType: "json",
				success: function (data) {
					ww.inYourArea.latestUpdatesDictionary = data.LatestUpdates;
					ww.inYourArea.moreInfoDictionary = data.MoreInfomation;
					ww.inYourArea.closeDictionary = data.Close;
					ww.inYourArea.startDictionary = data.Start;
					ww.inYourArea.endDictionary = data.End;
					ww.inYourArea.noRecordsDictionary = data.NoRecords;
					ww.inYourArea.googleLoadErrorDictionary = data.GoogleMapsError;
					ww.inYourArea.loadingDictionary = data.Loading;
					ww.inYourArea.invalidPostcodeDictionary = data.InvalidPostcode;
					// load next section of code now all dictionary items are lookedup
					ww.inYourArea.createTabs();
				}
			});
		},

		getEmergencyID: function (variable) {
			var query = window.location.search.substring(1);
			var vars = query.split("&");
			for (var i = 0; i < vars.length; i++) {
				var pair = vars[i].split("=");
				if (pair[0] == variable) {
					return pair[1];
				}
			}
			return (false);
		},

		// TODO:	loading symbol while google maps is loading

		convertForString: function (str) {
			var text = str.replace(/\w\S*/g, function (txt) {
				return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
			});
			return 'Get' + text.replace(/ /g, '').replace(/-/g, '');
		},

		createTabs: function () {
			$.ajax({
				cache: false,
				url: '/api/InYourArea/GetTabs',
				dataType: "json",
				success: function (data) {
					var tabs = [];
					var content = [];
					$.each(data, function (i) {
						// create tabs html avr

						var hashVal = data[i].Name.replace(' ', '');
						var displayName = ww.inYourArea.convertForString(data[i].DisplayName);

						var tmpTabsHtml = '<li id="tab-btn-' + data[i].Id + '">';
						tmpTabsHtml += '<a class="' + displayName + '" href="#' + hashVal + '" data-link="' + data[i].Url + '">' + data[i].DisplayName;
						tmpTabsHtml += '<img src=' + encodeURI(data[i].IconUrl) + ' alt=' + data[i].DisplayName + '/>';
						tmpTabsHtml += '</a></li>';

						var tmpContentHtml = '<div class="content ' + displayName + '" id="' + hashVal + '">';
						tmpContentHtml += '<h2 class="title" data-hash="#' + hashVal + '">';
						tmpContentHtml += '<img src=' + encodeURI(data[i].IconUrl) + ' alt=' + data[i].DisplayName + '/>';
						tmpContentHtml += data[i].DisplayName + '</h2>';
						tmpContentHtml += '<div class="content-inner">';
						tmpContentHtml += '<div class="map" id="map" />';
						tmpContentHtml += '<div class="more-info">';
						tmpContentHtml += '<div class="loading-overlay">' + ww.inYourArea.loadingDictionary + '</div>'
						tmpContentHtml += '<h3>' + ww.inYourArea.latestUpdatesDictionary + '</h3>';
						tmpContentHtml += '<div class="latest-news">';
						tmpContentHtml += '<span class="loading">' + ww.inYourArea.loadingDictionary + '</span>';
						tmpContentHtml += '</div></div></div></div>';

						// push item array to page
						tabs.push(tmpTabsHtml);
						content.push(tmpContentHtml);
					});

					// add html to the page
					// tabs
					$('<ul />', {
						html: tabs.join('')
					}).addClass('tab-btns').prependTo(ww.inYourArea.containerClass);
					// content
					$(content.join('')).appendTo(ww.inYourArea.containerClass);
					$(ww.inYourArea.containerClass).find('.content').wrapAll('<div class="tab-content-wrap"/>');
					// remove map and sidebar from noMap tabs
					// convert to array
					var nomap = ww.inYourArea.noMap.replace(/\s/g, '').split(',');
					// look through array
					$.each(nomap, function () {
						var el = 'div' + this;
						$(ww.inYourArea.containerClass).find(el).find('.map, .more-info').remove();
						// if there is content to be added then move it
						ww.inYourArea.moveNoMapTabContent(el);
					});
					// tab load completed - run tab navigation setup
					ww.inYourArea.navigateTabs();
					// load google maps
					ww.loadGoogleScript.init('ww.inYourArea.gmapDependant');
					// load building and navigation of water qautiy section
					ww.inYourArea.waterQualityTabs();
				},
				error: function () {
					$(ww.inYourArea.containerClass).find('.load-error').remove();
					$(ww.inYourArea.containerClass).append('<h2 class="load-error">' + ww.inYourArea.googleLoadErrorDictionary + '</h2>');
				}
			});
		},

		navigateTabs: function () {
			$(ww.inYourArea.containerClass).each(function () {
				// var
				var $tabAccord = $(this),
						active = 'js-active';

				// make the first tab active by default
				$tabAccord.find('ul.tab-btns li:first-child').addClass(active);
				$tabAccord.find('.content').first().addClass(active);

				// check the URL to see if it contain hash
				if (window.location.hash) {
					// vars
					var tabToOpen = window.location.hash,
							tabsLength = $tabAccord.find('ul.tab-btns li').length - 1,
							href,
							tabExsists;


					// get each tab
					$tabAccord.find('ul.tab-btns li').each(function (i) {
						// get the href of the tab
						href = $(this).find('a').attr('href');
						// if it the same as the hash
						if (tabToOpen === href) {
							// say yes it does exsist
							tabExsists = true;
						}


						// once each has completed and if the has exsists
						if (i === tabsLength && tabExsists === true) {
							if ($tabAccord.find('ul:first-of-type li a[href="' + tabToOpen + '"]').attr('class') === 'GetWaterQuality') {
								var wqHash = $('.tab-btns a.GetWaterQuality').data('link');
								window.location.href = wqHash;
							} else {
								// remove the active class of all btns
								$tabAccord.find('ul:first-of-type li').removeClass(active);
								// add class to correct btn
								$tabAccord.find('ul:first-of-type li a[href="' + tabToOpen + '"]').parent().addClass(active);
								// remove active class of all content
								$tabAccord.find('.content').removeClass(active);
								// add active class to correct content
								$tabAccord.find('.content' + tabToOpen).addClass(active);
							}
						}
					});
				}

				// click to navigate
				$tabAccord.find('ul.tab-btns li a').on('click', function (e) {
					// prevent default
					e.preventDefault();
					// get the target href
					var tabToOpen = $(this).attr('href');
					// remove the active class of all btns
					$tabAccord.find('ul.tab-btns li').removeClass(active);
					// add class to correct btn
					if ($(this).attr('class') === 'GetWaterQuality') {
						var wqHash = $('.tab-btns a.GetWaterQuality').data('link');
						window.location.href = wqHash;
					} else {
						$(this).parent().addClass(active);
						// remove active class of all content
						$tabAccord.find('.content').removeClass(active);
						// add active class to correct content
						$tabAccord.find('.content' + tabToOpen).addClass(active);
						// adjust height of wrapper to the content
						if (!$('body').hasClass('mobile')) {
							var height = $('.tab-content-wrap .content.js-active').outerHeight(true);
							$('.tab-content-wrap').height(height);
						}
					}
					// update the hash
					if (history.pushState) {
						history.pushState(null, null, tabToOpen);
					}
					else {
						location.hash = tabToOpen;
					}
				});
				// click to navigate mobile
				$tabAccord.find('.title').each(function () {
					$(this).on('click', function (e) {
						e.preventDefault();
						
						if ($(this).parent().attr('class').replace('content ', '').replace(' js-active', '') === 'GetWaterQuality') {
							var wqHash = $('.tab-btns a.GetWaterQuality').data('link');
							window.location.href = wqHash;
						} else {
							var $this = $(this),
									tabToOpen = $this.data('hash');
							if (!$this.next('.content-inner').hasClass(active)) {
								$('.title.' + active).removeClass(active);
								$this.addClass(active);
								$('.content-inner.' + active).removeClass(active).slideUp();
								$this.next('.content-inner').addClass(active).slideDown(function () {
									$('html, body').animate({
										scrollTop: $this.offset().top - 5
									}, 300);
								});
							} else {
								$this.removeClass(active);
								$this.next('.content-inner').removeClass(active).slideUp();
							}
						}
						// update the hash
						if (history.pushState) {
							history.pushState(null, null, tabToOpen);
						}
						else {
							location.hash = tabToOpen;
						}
					});
				});
				if ($.trim($tabAccord.find('.title').first().parent().find('.latest-news').text().replace(ww.inYourArea.loadingDictionary, '')).length > 0) {
					$tabAccord.find('.title').first().addClass(active).next('.content-inner').addClass(active).slideDown();
				}
			});
		},

		waterQualityTabs: function () {
			var active = 'js-wq-active',
					$wq = $('.waterQualityLeftColumn'),
					$tabPanels = $('.waterQualityLeftColumn > div'),
					scaleColum = [];
			
			$tabPanels.first().addClass(active);

			var tabBtns = [],
					amountOfTabs = $('.waterQualityLeftColumn > div').length;

			$tabPanels.each(function (i) {
				if ($.trim($(this).text()).length === 0) {
					$(this).remove();
				} else {
					var rex = /([A-Z])([A-Z])([a-z])|([a-z])([A-Z])/g;
					var title = $.trim($(this).find('.wq-tab-title').text());
					$(this).addClass('js-wq-tab-' + i);

					var tabBtnHTML = '<li><a href="#js-wq-tab-' + i + '">' + title + '</a></li>'

					tabBtns.push(tabBtnHTML);
				}

				if (i + 1 === amountOfTabs) {
					$('<ul />', {
						html: tabBtns.join('')
					}).addClass('wq-tab-btns').prependTo('.GetWaterQuality-content');

					$('.wq-tab-btns a').each(function () {
						$(this).on('click', function () {
							var tabToOpen = $(this).attr('href').replace('#', '');
							// remove openned tab
							$('.wq-tab-btns li').removeClass(active);
							$tabPanels.removeClass(active);
							// open correct tab
							$(this).parent().addClass(active);
							$wq.find('.' + tabToOpen).addClass(active);
							// adjust height of wrapper to the content
							if (!$('body').hasClass('mobile')) {
								var height = $('.tab-content-wrap .content.js-active').outerHeight(true);
								$('.tab-content-wrap').height(height);
							}
						});
					});

					$('.wq-tab-btns a').first().trigger('click');

					if ($('body').hasClass('mobile')) {
						$('.wq-tab-title').each(function () {
							$(this).on('click', function () {
								var $this = $(this);
								if (!$this.next('.mobile-accordion').hasClass('js-wq-active')) {
									$('.wq-tab-title').removeClass('js-wq-active');
									$('.mobile-accordion').removeClass('js-wq-active').slideUp();;
									$this.addClass('js-wq-active');
									$this.next('.mobile-accordion').addClass('js-wq-active').slideDown(function () {
										$('html, body').animate({
											scrollTop: $this.offset().top - 5
										}, 300);
									});
								} else {
									$this.next('.mobile-accordion').removeClass('js-wq-active').slideUp();
									$this.removeClass('js-wq-active');
								}
							});
						});

						$('.wq-tab-title').first().trigger('click');
					}
				}
			});

			var scaleRows = $('.waterHardnessScalesLeftColumn div').length;
			// hack to get the table markup correct from TC code
			$('.waterHardnessScalesLeftColumn div').each(function (i) {
				scaleColum.push($.trim($(this).text()));
				if (i + 1 === scaleRows) {
					$('<th class="scale">' + scaleColum[0] + '</th>').prependTo('.waterHardnessScalesTable thead tr');
					$('.waterHardnessScalesTable tbody tr').each(function (i) {
						$('<td class="scale">' + scaleColum[i + 1] + '</td>').prependTo($(this));
					});
				}
			});
		},

		moveNoMapTabContent: function (el) {
			var content = el + '-content';
			$(content).each(function () {
				if ($(this).length > 0) {
					$(this).prependTo($(el).find('.content-inner'));
					$(el).find('.content-inner').addClass('content-avalible');
					$(this).show();
				}
			});

			this.waterQualityTableHack();
		},

		waterQualityTableHack: function() {
			if ($('.waterHardnessScalesContainer').length > 0 && $('body').hasClass('mobile')) {
				$('.waterHardnessScalesContainer').clone().insertAfter('.waterHardnessScalesContainer');
				$('.waterHardnessScalesContainer').first().find('tr').each(function () {
					$(this).find('th, td').slice(2, 5).remove();
				});
				$('.waterHardnessScalesContainer').last().find('tr').each(function () {
					$(this).find('th, td').slice(0, 3).remove();
				});
			}
		},

		categoriesFilter: function ($this) {
			var $categories = $this.find('.categories-list');
			var $sidebar = $this.find('.sidebar-list');
			var filters = [];

			$categories.find('li input[type=checkbox]').each(function () {
				$(this).change(function () {
					$categories.addClass('loading');
					$categories.parent().find('.more-info').addClass('loading');
					filters = [];
					$categories.find('li input[type=checkbox]:checked').each(function () {
						filters.push($(this).val());
					});
					ww.inYourArea.updateFromSearch(filters, true);
					ww.inYourArea.currentFilter = filters;
				});
			});
		},

		postcodeLookup: function () {
			// show postcode error text
			$(ww.inYourArea.postcodeSectionError).empty();
			$(ww.inYourArea.postcodeSectionError).html(ww.inYourArea.invalidPostcodeDictionary);

			// keep checking for geolocation
			var checkForGeolocation;
			checkForGeolocation = setInterval(checkForAutoPostcode, ww.inYourArea.setIntervalTime);

			// Bind GA tracking class
			$(ww.inYourArea.postcodeSection).addClass("js-ga-track");

			// check if geolocation has been aquired or declined
			function checkForAutoPostcode() {
				// has been aquired
				if (ww.getCoordinate.aquired === true) {
					// stop checking
					clearInterval(checkForGeolocation);
					// remove postcode error
					$(ww.inYourArea.postcodeSectionError).empty();

					// convert lat long into postcode and if there is already a value in the text input then use that value (the true)
					ww.inYourArea.latLongToValidPostcode(ww.getCoordinate.lat, ww.getCoordinate.long, true,
						// once postcode has been returned
						function (postcode) {
							// if there is a postcode returned
							if (postcode.length > 0) {
								// add it to the input
																$(ww.inYourArea.postcodeSection).find('input.postcode').val(postcode);
								// say there has been a postcode added
								ww.inYourArea.updateFromSearch();
							} else {
								// 
								$(ww.inYourArea.postcodeSectionError).empty();
								$(ww.inYourArea.postcodeSectionError).html(ww.inYourArea.invalidPostcodeDictionary);
							}
						}
					);
				} else if (ww.getCoordinate.aquired === false) {
					console.log('cords failed');
					clearInterval(checkForGeolocation);
					$(ww.inYourArea.postcodeSectionError).empty();
					$(ww.inYourArea.postcodeSectionError).html(ww.inYourArea.invalidPostcodeDictionary);
					
					$(ww.inYourArea.containerClass).find('.latest-news .loading').remove();
				}
			}

			// validate postcode while typing
			$(ww.inYourArea.postcodeSection).find('input.postcode').on('input', function () {
				if (ww.validPostcode.init($(this).val())) {
					$(ww.inYourArea.postcodeSectionError).empty();
				} else {
					$(ww.inYourArea.postcodeSectionError).empty();
					$(ww.inYourArea.postcodeSectionError).html(ww.inYourArea.invalidPostcodeDictionary);
				}
			});
		},

		createMap: function () {
			// now the markup is avalible continue
			$.ajax({
				cache: false,
				url: '/api/InYourArea/GetMapSettings',
				dataType: "json",
				success: function (data) {

					// setting vars
					var initLat = data.InitialLatitude,
							initLong = data.InitialLongitude,
							initZoom = parseInt(data.InitialZoomLevel);
					ww.inYourArea.searchZoomLevel = parseInt(data.SearchZoomLevel);
					ww.inYourArea.maxRecordsAllowed = parseInt(data.MaxArticles);
					// varible for gmap
					gmap = $('.map');

					// check if there is a gmap on the page beofr firing the full function
					if (gmap.length > 0) {

						// for each of the gmaps
						gmap.each(function (i) {
							// add index ID attr
							var gmapID = 'map-' + i;
							$(this).attr('id', gmapID);
							ww.inYourArea.initializeMap(gmapID, initLat, initLong, initZoom);
							$(ww.inYourArea.postcodeSectionError).empty();
							$(ww.inYourArea.postcodeSectionError).html(ww.inYourArea.invalidPostcodeDictionary);
						});

					}
				},
				error: function () {
					$(ww.inYourArea.containerClass).find('.load-error').remove();
					$(ww.inYourArea.containerClass).append('<h2 class="load-error">' + ww.inYourArea.googleLoadErrorDictionary + '</h2>');
				}
			});
		},

		initializeMap: function (gmapID, lat, lng, zoom) {
			var whichLat,
      		whichLng,
      		whichZoom,
        	postcodeLookUp;
			if (ww.inYourArea.postcodeLat !== 'undefined' && ww.inYourArea.postcodeLng !== 'undefined') {
				whichLat = ww.inYourArea.postcodeLat;
				whichLng = ww.inYourArea.postcodeLng;
				whichZoom = ww.inYourArea.searchZoomLevel;
				postcodeLookUp = true;
			} else {
				whichLat = lat;
				whichLng = lng;
				whichZoom = zoom;
				postcodeLookUp = false;
			}

			var map,
					myLatLng = new google.maps.LatLng(whichLat, whichLng);

			mapOptions = {
				zoom: whichZoom,
				center: myLatLng
			};

			map = new google.maps.Map(document.getElementById(gmapID), // target index
					mapOptions);

			if (postcodeLookUp === true) {
				ww.inYourArea.addMarkMap(map, myLatLng);
			}

			// add class so we know its been init
			$('#' + gmapID).addClass('mapInit');

		},

		addMarkMap: function (map, myLatLng) {
			marker = new google.maps.Marker({
				map: map,
				draggable: false,
				position: myLatLng
			});
		},

		placePinsOnMap: function (gmapID, data, ifBeingFilter) {
			var bounds = new google.maps.LatLngBounds();
			var map = new google.maps.Map(document.getElementById(gmapID));
			if (ifBeingFilter !== true) {
				var mapAnimation = google.maps.Animation.DROP;
			}
			var infowindow = new google.maps.InfoWindow();
			var markers = [];

			$.each(data, function (i) {
				var latlng = new google.maps.LatLng(this.lat, this.lng),
						pinTitle = this.title,
						pin = this.icon,
						popup = true;

				bounds.extend(latlng);
					

				if (this.index === 'home') {
					popup = false;
				}

				marker = new google.maps.Marker({
					id: this.index,
					position: latlng,
					map: map,
					icon: pin,
					animation: mapAnimation,
					title: pinTitle,
					filter: this.filter,
					clickable: popup
				});


				var shortText;
				if (this.shortText !== undefined) {
					shortText = this.shortText;
				}
				var windowContent = '<div class="map-popup">';
				windowContent += '<h2><a class="more-info-window ' + this.index + '" data-lat="' + this.lat + '" data-lng="' + this.lng + '" href="#">' + this.title + '</a></h2>';
				if (this.showDates === true) {
					if (this.startDate !== null) {
						windowContent += '<p class="date-time"><span>' + ww.inYourArea.startDictionary + ': </span>' + this.startTime + ' ' + this.startDate + '</p>';
					}
					if (this.endDate !== null) {
						windowContent += '<p class="date-time"><span>' + ww.inYourArea.endDictionary + ': </span>' + this.endTime + ' ' + this.endDate + '</p>';
					}
				}
				windowContent += shortText;
				windowContent += '<a class="more-info-window ' + this.index + '" data-lat="' + this.lat + '" data-lng="' + this.lng + '" href="#">' + ww.inYourArea.moreInfoDictionary + '</a>';
				windowContent += '</div>';

				// close info window if clicked on map
				google.maps.event.addListener(map, 'click', function () {
					infowindow.close();
				});

				// open info window on marker click
				google.maps.event.addListener(marker, 'click', (function (marker, i) {
					return function () {
						infowindow.close();
						infowindow = new google.maps.InfoWindow({
							content: windowContent,
							maxWidth: 250
						});
						infowindow.open(map, marker);
						map.panTo(latlng);
						$('.map').on('click', 'a.more-info-window', function (e) {
							e.preventDefault();

							// get the target and current map center
							var infoPanel = $(this).attr('class').replace('more-info-window ', ''),
									currCenter = map.getCenter(),
									lat = $(this).data('lat'),
									lng = $(this).data('lng'),
									latlng = new google.maps.LatLng(lat, lng),
									latlngSidebar = new google.maps.LatLng(lat, lng + 0.36);

							// check if its already in the right place if not move it
							if (currCenter !== latlng) {
								map.panTo(latlng);
							}

							// open correct more info content
							// TODO: if already open then animate close and open
							$('.more-info-wrapper .' + infoPanel).parent().addClass('open').find('.open').removeClass('open');
							$('.more-info-wrapper .' + infoPanel).addClass('open');
							
							// make map smaller to fit area
							if (!$('.js-active').find('.map').hasClass('open')) {
								var currCenter = map.getCenter();
								$('.js-active').find('.map').addClass('open');
								setTimeout(function () {
									// recenter map
									map.panTo(currCenter);
								}, 400);
							}
						});
						
						// on close of map 
						$('.js-active .close').on('click', function () {
							var currCenter = map.getCenter();
							$('.js-active .map').removeClass('open');
							google.maps.event.trigger(map, 'resize');
							map.panTo(currCenter);
						});
					};
				})(marker, i));

				markers.push(marker);

			});
			// Adjust map boundaries to fit pins in view 
			map.fitBounds(bounds);
			
			// if not mobile
			if (!$('body').hasClass('mobile')) {
				// allow selection of pins from sidebar
				$('.sidebar-list a').on('click', function (e) {
					e.preventDefault();
					var target = $(this).attr('class');
					$.each(markers, function () {
						if(this.id === target) {
							google.maps.event.trigger(this, 'click');
						}
					});
				});
			}
		},
		
		updateFromSearch: function (filter, ifBeingFilter) {
			
			$('input').blur();

			// vars
			var postcodeInput = $(ww.inYourArea.postcodeSection).find('input.postcode'),
					enteredSearch = postcodeInput.val();

			// check its not the same as the current enteredSearch
			if (ww.inYourArea.currentSearch !== enteredSearch || ww.inYourArea.currentFilter !== filter) {
				// take the entered location and turn it into the a lat long
				ww.inYourArea.locationToLatLong(enteredSearch,
					function (lat, lng) {
						// take that lat long and turn it into a postcode to check if its valid
						ww.inYourArea.latLongToValidPostcode(lat, lng, false,
							// once postcode has been returned
							function (postcode) {
								// if there is a postcode returned
								if (postcode.length > 0) {
									// load content
									ww.inYourArea.loadContent(lat, lng, filter, ifBeingFilter);
									// update Main
									var apiURL = '/api/locationservices/storeuserspostcode/' + encodeURIComponent(enteredSearch);
									$.ajax({
										cache: false,
										url: apiURL,
										dataType: "json",
										error: function () {
											console.log('Water quality update was not successful - UNABLE TO LOAD JSON');
										}
									});
									// as its successful update current search
									ww.inYourArea.currentSearch = enteredSearch;
									// and update the cookie with user location to match
																		if (ww.inYourArea.prePopulatedInput === false) {
																				ww.cookie.update('UserAddress', ww.inYourArea.currentSearch, 28);
									}

									// Add search to the H1
									$('.page_hd h1').find('span').remove();
									$('.page_hd h1').append('<span> : ' + ww.inYourArea.currentSearch + '</span>');
								} else {
									// show error message
									$(ww.inYourArea.postcodeSectionError).empty();
									$(ww.inYourArea.postcodeSectionError).html(ww.inYourArea.invalidPostcodeDictionary);
								}
							}
						);
					}
				);
			}
		},

		searchButtonSubmit: function () {
			// on click of submit btn
			$(ww.inYourArea.postcodeSection).find('input[type=submit]').on('click', function (e) {
				e.preventDefault();
				ww.inYourArea.prePopulatedInput = false;
				ww.inYourArea.updateFromSearch();
			});
			// on enter key press
			$(ww.inYourArea.postcodeSection).find('input').on('keydown', function (e) {
				if (e.keyCode === 13) {  //checks whether the pressed key is "Enter"
					e.preventDefault();
					ww.inYourArea.prePopulatedInput = false;
					ww.inYourArea.updateFromSearch();
				}
			});
		},

		locationToLatLong: function (enteredSearch, callback) {
			// vars
			var geocoder = new google.maps.Geocoder(),
					lat,
					lng;
			geocoder.geocode({ 'address': enteredSearch + ', Wales' }, function (results, status) {
				if (status === google.maps.GeocoderStatus.OK) {

					var searchAddressComponents = results[0].address_components,
							country,
							postcode,
							length = searchAddressComponents.length,
							i = 0;

					$.each(searchAddressComponents, function () {
						// add one to index
						i += 1;
						if ($.inArray('country', this.types) > -1) {
							// take full postcode (sometime short depending on how good the GPS is 
							country = this.short_name;
						}
						// once each is completed - index is equal to length
						if (i === length) {
							// its in GB
							if (country === 'GB') {
								// then get the lat long
								lat = results[0].geometry.location.lat();
								lng = results[0].geometry.location.lng();

								// load content and update map
								callback(lat, lng);

							} else {
								console.log('Geocode was not successful for the following reason: OUTSIDE GB & NOT WITHIN MAIN COVERAGE');
								// show an error
								$(ww.inYourArea.postcodeSectionError).empty();
								$(ww.inYourArea.postcodeSectionError).html(ww.inYourArea.invalidPostcodeDictionary);
								// remove the loading
								$(ww.inYourArea.containerClass).find('.latest-news .loading').remove();
							}
						}
					});

				} else {
					console.log('Geocode was not successful for the following reason: ' + status);
					// if a valid postcode but it doesn't exsist it will return zero results so display error message
					if (status === 'ZERO_RESULTS') {
						$(ww.inYourArea.postcodeSectionError).empty();
						$(ww.inYourArea.postcodeSectionError).html(ww.inYourArea.invalidPostcodeDictionary);
					}
				}
			});
		},

		latLongToValidPostcode: function (lat, lng, usePreEntered, callback) {
			// vars
			var geocoder = new google.maps.Geocoder(),
					latlng = new google.maps.LatLng(lat, lng),
					output;

			// start gmap geocoder - input the lat/long then run the results
			geocoder.geocode({ 'latLng': latlng }, function (results, status) {

				// if successful
				if (status === google.maps.GeocoderStatus.OK) {

					// vars
					var searchAddressComponents = results[0].address_components,
							postcode,
							country,
							length = searchAddressComponents.length,
							i = 0;
					// loop through the array
					$.each(searchAddressComponents, function () {
						// add one to index
						i += 1;
						// look for postcode
						if ($.inArray('postal_code', this.types) > -1) {
							// take full postcode (sometime short depending on how good the GPS is)
							postcode = this.long_name;
						}
						// look for country
						if ($.inArray('country', this.types) > -1) {
							// take the country
							country = this.short_name;
						}
						// if function is asked to use pre entered text
						if (usePreEntered === true) {
							// check if there is already text entered for some reason like history
							if ($(ww.inYourArea.postcodeSection).find('input.postcode').val().length > 0) {
								// if there is take that value and continue with it rather than the geolocation looked up one
								postcode = $(ww.inYourArea.postcodeSection).find('input.postcode').val();
							}
						}
						// once each is completed - index is equal to length
						if (i === length) {
							// if there is a postcode and its in GB
							if (ww.validPostcode.init(postcode) && country === 'GB') {
								// then return postcode
								callback(postcode);
							} else {
								console.log('Geocode was not successful for the following reason: POSTCODE NOT WITHIN MAIN COVERAGE');
							}
						}
					});
				} else {
					console.log("Google Maps had some trouble finding" + results + status);
				}
			});
		},

		loadContent: function (lat, lng, filter, ifBeingFilter) {
			$(ww.inYourArea.containerClass).find('.content').each(function (i) {
				var $this = $(this),
						allClasses = $(this).attr('class'),
						allClassesArray = allClasses.split(" "),
						section = allClassesArray[1],
						api = '/api/InYourArea/' + section + '/' + lat + '/' + lng,
						gmap = $this.find('.map').attr('id'),
						containers = $('.content').length;
				
				if ($(this).find('.map').length > 0) {

					$.ajax({
						cache: false,
						url: api,
						dataType: "json",
						success: function (data) {

							var sidebar = [],
									sidebarF = [],
									sidebarNF = [],
									moreInfo = [],
									moreInfoF = [],
									moreInfoNF = [],
									pins = [],
									pinsF = [],
									pinsNF = [],
									subtype = [],
									records = data.Updates.length,
									maxRecords = ww.inYourArea.maxRecordsAllowed,
									$latest = $this.find('.latest-news');

							// remove anything if it is alreay there
							$latest.find('.sidebar-list').remove();
							$this.find('.content-inner').removeClass('content-avalible');
							$this.find('.more-info-wrapper').remove();
							// add loading
							$latest.find('.loading').remove();
							$latest.append('<span class="loading">' + ww.inYourArea.loadingDictionary + '</span>');

							if (records === 0) {
								$latest.find('.loading').remove();
								$latest.find('.no-records').remove();
								$latest.append('<span class="no-records">' + ww.inYourArea.noRecordsDictionary + '</span>');
							} else {
								// there are records - load them
								$.each(data.Updates, function (i) {
									// show loading message
									$latest.find('.no-records').remove();
									$latest.find('.loading').remove();
									$latest.append('<span class="loading">' + ww.inYourArea.loadingDictionary + '</span>');

									// count each time
									i += 1;
									// as google maps indexs from 1 lets do the same
									var index = String(this.Id.replace('{','').replace('}',''));

									// create sidebar html
									if (this.SubType !== null) {
										var tmpSidbarHtml =		'<li class="' + this.SubType + '">';
									} else {
										var tmpSidbarHtml =		'<li>';
									}
									tmpSidbarHtml +=	'<a class="' + index + '" href="#">' + this.Title;
									if (this.ShowDates === true) {
										if (this.StartTime !== null) {
											tmpSidbarHtml += '<span>' + this.StartTime + ' (' + this.StartDate + ')</span>';
										}
									}
									tmpSidbarHtml +=	'</a></li>';

									// create more info
									var tmpMoreInfoHtml =		'<div class="more-info-content ' + index + '">';
									tmpMoreInfoHtml +=	'<h3>' + this.Title + '</h3>';
									if (this.ShowDates === true) {
										tmpMoreInfoHtml += '<p class="date-time">';
										if (this.StartTime !== null) {
											tmpMoreInfoHtml += '<span>' + ww.inYourArea.startDictionary + ': ' + this.StartDate + ' ' + this.StartTime + '</span>';
										}
										if (this.EndTime !== null) {
											tmpMoreInfoHtml += '<span>' + ww.inYourArea.endDictionary + ': ' + this.EndDate + ' ' + this.EndTime + '</span>';
										}
										tmpMoreInfoHtml +=	'</p>';
									}
									tmpMoreInfoHtml += this.MoreInfomation;
									tmpMoreInfoHtml +=	'</div>';

									// create pins
									var tmpPinsInfo = {
										'index': index,
										'title': this.Title,
										'type': this.Type,
										'filter': this.SubType,
										'shortText': this.ShortText,
										'lat': this.Location.Latitude,
										'lng': this.Location.Longitude,
										'icon': this.MapIconUrl,
										'showDates': this.ShowDates,
										'startDate': this.StartDate,
										'startTime': this.StartTime,
										'endDate': this.EndDate,
										'endTime': this.EndTime
									};
									// create subtypes
									var tmpSubtype = '<li>';
									// TODO: Update icon image
									tmpSubtype += '<label for="category-' + this.SubType + '"><img src="' + this.MapIconUrl + '" alt="' + this.SubType + '"/></label>';
									tmpSubtype += '<input id="category-' +this.SubType + '" type="checkbox" checked="checked" value="' + this.SubType + '"/>';
									tmpSubtype += '<label for="category-' + this.SubType + '">' + this.SubType + '</label>';
									tmpSubtype +=	'</li>';

									// push into correct array - featured / non featured and if this is a filter or full search
									if (ifBeingFilter !== true) {
										if (this.PinUpdate) {
											sidebarF.push(tmpSidbarHtml);
											pinsF.push(tmpPinsInfo);
											moreInfoF.push(tmpMoreInfoHtml);
										} else {
											sidebarNF.push(tmpSidbarHtml);
											pinsNF.push(tmpPinsInfo);
											moreInfoNF.push(tmpMoreInfoHtml);
										}
										if (this.SubType !== null) {
											subtype.push(tmpSubtype);
										}
									} else if ($.inArray(this.SubType, filter) > -1 || this.SubType === null) {
										if (this.PinUpdate) {
											sidebarF.push(tmpSidbarHtml);
											pinsF.push(tmpPinsInfo);
											moreInfoF.push(tmpMoreInfoHtml);
										} else {
											sidebarNF.push(tmpSidbarHtml);
											pinsNF.push(tmpPinsInfo);
											moreInfoNF.push(tmpMoreInfoHtml);
										}
									}


									// add html to the page when all records are collected otherwise it will add random markup/half completed lists
									if (i === records) {
										// home pin - this needs to be added to the pins array
										var home = [{
											'index': 'home',
											'title': null,
											'type': null,
											'subtype': null,
											'shortText': null,
											'lat': lat,
											'lng': lng,
											'icon': null,
											'startDate': null,
											'startTime': null,
											'endDate': null,
											'endTime': null
										}];

										// merge the two arrays - featured & non featured into one
										sidebar = $.merge(sidebarF, sidebarNF).slice(0, maxRecords);
										moreInfo = $.merge(moreInfoF, moreInfoNF).slice(0, maxRecords);
										// dealing with home pin
										var mergePins = $.merge(pinsF, pinsNF);
										pins = $.merge(home, mergePins).slice(0, maxRecords + 1);

										// remove loading
										$latest.find('.loading').remove();
										
										// if no records
										if (sidebar.length === 0) {
											$latest.find('.loading').remove();
											$latest.find('.no-records').remove();
											$latest.append('<span class="no-records">' + ww.inYourArea.noRecordsDictionary + '</span>');
										}

										// add list of records
										$('<ul />', {
											html: sidebar.join('')
										}).addClass('sidebar-list').prependTo($this.find('.latest-news'));

										// add more info
										$('<div />', {
											html: moreInfo.join('')
										}).addClass('more-info-wrapper').appendTo($this.find('.content-inner'));

										// add close button
										$this.find('.more-info-wrapper').append('<div class="close"><div class="close-icon">' + ww.inYourArea.closeDictionary + '</div></div>');

										// add filters if there are any
										if (ifBeingFilter !== true) {
											// renove duplicates
											subtype = $.unique(subtype);
											var uniqueSubtype = [];
											$.each(subtype, function (i, el) {
												if ($.inArray(el, uniqueSubtype) === -1) uniqueSubtype.push(el);
											});
											// check there are subtypes
											if (uniqueSubtype.length > 0) {
												// remove any exsisting filters
												$this.find('.categories-list').remove();
												// if there is, create a selection
												$('<ul />', {
													html: uniqueSubtype.join('')
												}).addClass('categories-list').prepend('<div class="loading-overlay">' + ww.inYourArea.loadingDictionary + '</div>').prependTo($this.find('.content-inner'));
												// run filter function
												ww.inYourArea.categoriesFilter($this);
											}
										}

										// adjust height of wrapper to the content
										if (!$('body').hasClass('mobile')) {
											var height = $('.tab-content-wrap .content.js-active').outerHeight(true);
											$('.tab-content-wrap').height(height);
										}
										
										// add the pins
										ww.inYourArea.placePinsOnMap(gmap, pins, ifBeingFilter);

										// run function completed checker
										callback(gmap, pins, ifBeingFilter);
										
									}

									// close info panel - needs to be here as it didn't exsist before, otherwise you would need to listen to every click on the area and this would reduce preformance
									$this.find('.close').on('click', function () {
										$(this).parent().removeClass('open');
										setTimeout(function () {
											$this.find('.more-info-content.open').removeClass('open');
										}, 400);
									});
								});
							}
						},
						error: function (error) {
							if (error.status === 404) {
								console.log('API NOT FOUND');
							} else {
								$(ww.inYourArea.containerClass).find('.load-error').remove().remove();
								$(ww.inYourArea.containerClass).append('<h2 class="load-error">' + ww.inYourArea.googleLoadErrorDictionary + '</h2>');
							}

							ww.inYourArea.ganalyticsCallback = false;
	
						}
					});
				}
				function callback() {
					// check if each has completed
					if (i + 1 === containers) {
						ww.inYourArea.ganalyticsCallback = true;

						// mobile more info nav
						ww.inYourArea.mobileMoreInfoNavigation();
						// show/hide mobile accordion section if there is content
						//$(ww.inYourArea.containerClass).each(function () {
						//	$(this).find('.title').each(function () {
						//		var $this = $(this);
						//		if ($.trim($this.parent().find('.latest-news').html()).length > 0) {
						//			$(this).addClass('content-available');
						//		} else {
						//			$(this).removeClass('content-available');
						//									//		}
						//	});
						//});

						$(ww.inYourArea.containerClass).find('.title').addClass('content-available');
						$(ww.inYourArea.containerClass).find('.more-info').removeClass('loading');
						$(ww.inYourArea.containerClass).find('.categories-list').removeClass('loading');

						// move content if on mobile
						ww.inYourArea.mobileMoreInfoPositionChange();

						// open emergency if required
						setTimeout(function () {
							var emergID = ww.inYourArea.getEmergencyID('id');
							if ($('body').hasClass('mobile')) {
								// close any open accordions
								var active = 'js-active';
								if (window.location.hash === null || window.location.hash === undefined) {
									$('.title.' + active).removeClass(active);
									$('.content-inner.' + active).removeClass(active).slideUp();
									// open first accordion
									$('.tab-content-wrap .content').first().find('h2').first().trigger('click');
								}
							}
							if (emergID !== false && ww.inYourArea.emergencyOpen === false) {
								$('a.' + emergID).trigger('click');
								ww.inYourArea.emergencyOpen = true;
							}
						}, 850);

						// open hash if first load
						$(ww.inYourArea.containerClass).each(function () {
							// var
							var $tabAccord = $(this),
									active = 'js-active',
									tabToOpen = window.location.hash,
									tabsLength = $tabAccord.find('ul.tab-btns li').length - 1,
									href,
									tabExsists;
							
							// check the URL to see if it contain hash
							if (window.location.hash) {
								// get each tab
								$tabAccord.find('ul.tab-btns li').each(function (i) {
									// get the href of the tab
									href = $(this).find('a').attr('href');
									// if it the same as the hash
									if (tabToOpen === href && $tabAccord.find('.content' + tabToOpen).find('.title').hasClass('content-available')) {
										// say yes it does exsist
										tabExsists = true;
									}
									// once each has completed and if the has exsists
									if (i === tabsLength && tabExsists === true && ifBeingFilter !== true) {
										// mobile on load
										$('.title.' + active).removeClass(active);
										$('.content-inner.' + active).removeClass(active).slideUp();

										// open correct accordion
										$tabAccord.find('.content' + tabToOpen).find('.title').first().trigger('click');
									}
								});
							} else if (i === tabsLength) {
								$tabAccord.find('.content').first().find('.title').first().trigger('click');
							}
						});
					}
				}
			});
		},

		mobileMoreInfoPositionChange: function () {
			if ($('body').hasClass('mobile')) {
				// get how many containers there are
				var containers = $('.content').length;
				// for each
				$('.content').each(function (i) {
					// var
					var $this = $(this);
					// find the links
					$(this).find('.latest-news a').each(function () {
						// get the target more info
						var ID = $(this).attr('class');
						// move the more info
						$this.find('.more-info-wrapper .' + ID).insertAfter($(this));
					});
					// once each is completed
					if (i + 1 === containers) {
						// remove the more info wrapper
						$this.find('.more-info-wrapper').remove();
					}
				});
			}
		},

		mobileMoreInfoNavigation: function () {
			if ($('body').hasClass('mobile')) {
				// find the links
				$('.tab-content-wrap').children().each(function () {
					$(this).find('.latest-news li').each(function () {
						// click event
						$(this).find('a').first().on('click', function (e) {
							e.preventDefault();
							var $this = $(this);
							var active = 'js-active';
							if (!$this.next('.more-info-content').hasClass(active)) {
								$('.latest-news a.' + active).removeClass(active);
								$this.addClass(active);
								$('.more-info-content.' + active).removeClass(active).slideUp();
								$this.next('.more-info-content').addClass(active).slideDown(function () {
									$('html, body').animate({
										scrollTop: $this.offset().top - 5
									}, 300);
								});
							} else {
								$this.removeClass(active);
								$this.next('.more-info-content').removeClass(active).slideUp();
							}
						});
					});
				});
			}
		},

		promoPanelMoveOnMobile: function () {
			if ($('body').hasClass('mobile')) {
				$('.postcode-lookup__promo-panel').detach().insertAfter($(this.containerClass));
			}
		}
	};
})(jQuery);